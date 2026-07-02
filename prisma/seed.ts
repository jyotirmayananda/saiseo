import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@saiseo.com";
  const password = process.env.ADMIN_PASSWORD || "admin123";
  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.admin.upsert({
    where: { email },
    update: { passwordHash },
    create: { email, passwordHash },
  });

  const sampleStudents = [
    {
      rollNumber: "SEO2024001",
      name: "Rahul Kumar",
      fatherName: "Suresh Kumar",
      course: "PGDCA",
      dob: "2000-05-15",
      contactNumber: "9876543210",
      results: [
        { subjectName: "Programming in C", marksObtained: 85, maxMarks: 100 },
        { subjectName: "Database Management", marksObtained: 78, maxMarks: 100 },
        { subjectName: "Web Development", marksObtained: 92, maxMarks: 100 },
        { subjectName: "Operating System", marksObtained: 70, maxMarks: 100 },
      ],
    },
    {
      rollNumber: "SEO2024002",
      name: "Priya Das",
      fatherName: "Manoj Das",
      course: "DCA",
      dob: "2001-08-22",
      contactNumber: "9876543211",
      results: [
        { subjectName: "Computer Fundamentals", marksObtained: 88, maxMarks: 100 },
        { subjectName: "MS Office", marksObtained: 95, maxMarks: 100 },
        { subjectName: "Internet & Email", marksObtained: 82, maxMarks: 100 },
      ],
    },
    {
      rollNumber: "SEO2024003",
      name: "Amit Patnaik",
      fatherName: "Rajesh Patnaik",
      course: "Python",
      dob: "1999-12-10",
      contactNumber: "9876543212",
      results: [
        { subjectName: "Python Basics", marksObtained: 45, maxMarks: 100 },
        { subjectName: "Data Structures", marksObtained: 38, maxMarks: 100 },
      ],
    },
  ];

  for (const student of sampleStudents) {
    const { results, ...data } = student;
    await prisma.student.upsert({
      where: { rollNumber: student.rollNumber },
      update: {},
      create: {
        ...data,
        results: { create: results },
      },
    });
  }

  console.log("Seed completed!");
  console.log(`Admin login: ${email} / ${password}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
