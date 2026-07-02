import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateResultStats, getGrade } from "@/lib/utils";

export async function GET(
  _request: NextRequest,
  { params }: { params: { rollNumber: string } }
) {
  const rollNumber = decodeURIComponent(params.rollNumber);

  const student = await prisma.student.findUnique({
    where: { rollNumber },
    include: { results: true },
  });

  if (!student) {
    return NextResponse.json({ error: "Result not found" }, { status: 404 });
  }

  const stats = calculateResultStats(student.results);

  return NextResponse.json({
    student: {
      name: student.name,
      rollNumber: student.rollNumber,
      course: student.course,
      fatherName: student.fatherName,
    },
    results: student.results,
    totalObtained: stats.totalObtained,
    totalMax: stats.totalMax,
    percentage: stats.percentage,
    grade: getGrade(stats.percentage),
    passed: stats.passed,
  });
}
