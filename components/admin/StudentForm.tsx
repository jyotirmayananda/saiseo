"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { studentSchema, StudentFormData } from "@/lib/validations";
import { calculateResultStats } from "@/lib/utils";
import { Plus, Trash2 } from "lucide-react";

const COURSES = [
  "PGDCA", "DCA", "CCA", "C", "C++", "PHP", "Java", ".NET",
  "Oracle", "Tally", "Python", "Internet", "Visual Basic", "AutoCAD",
];

interface StudentFormProps {
  studentId?: string;
  initialData?: StudentFormData;
}

export default function StudentForm({ studentId, initialData }: StudentFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const isEdit = !!studentId;

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: initialData || {
      name: "",
      rollNumber: "",
      course: "",
      fatherName: "",
      dob: "",
      contactNumber: "",
      photoUrl: "",
      results: [{ subjectName: "", marksObtained: 0, maxMarks: 100 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "results",
  });

  const results = watch("results");
  const stats = calculateResultStats(
    (results || []).map((r) => ({
      marksObtained: Number(r.marksObtained) || 0,
      maxMarks: Number(r.maxMarks) || 0,
    }))
  );

  useEffect(() => {
    if (initialData) reset(initialData);
  }, [initialData, reset]);

  const onSubmit = async (data: StudentFormData) => {
    setLoading(true);
    setError("");

    try {
      const url = isEdit ? `/api/students/${studentId}` : "/api/students";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Failed to save student");
        return;
      }

      router.push("/admin/students");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-[#1d1d1f] p-6">
        <h2 className="font-heading text-lg font-semibold text-white">
          Student Information
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Input dark label="Full Name" error={errors.name?.message} {...register("name")} />
          <Input dark label="Roll Number" error={errors.rollNumber?.message} {...register("rollNumber")} />
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[#86868b]">
              Course
            </label>
            <select
              {...register("course")}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
            >
              <option value="" className="bg-[#1d1d1f]">Select course</option>
              {COURSES.map((c) => (
                <option key={c} value={c} className="bg-[#1d1d1f]">
                  {c}
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="mt-1 text-sm text-red-400">{errors.course.message}</p>
            )}
          </div>
          <Input dark label="Father's Name" error={errors.fatherName?.message} {...register("fatherName")} />
          <Input dark label="Date of Birth" type="date" error={errors.dob?.message} {...register("dob")} />
          <Input dark label="Contact Number" error={errors.contactNumber?.message} {...register("contactNumber")} />
          <Input dark label="Photo URL (optional)" placeholder="https://..." error={errors.photoUrl?.message} {...register("photoUrl")} />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#1d1d1f] p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold text-white">
            Subject Marks
          </h2>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ subjectName: "", marksObtained: 0, maxMarks: 100 })}
            className="gap-1 border-white/20 text-white hover:bg-white/10"
          >
            <Plus size={16} /> Add Subject
          </Button>
        </div>

        {errors.results?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.results.message}</p>
        )}

        <div className="mt-4 space-y-3">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="grid gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 sm:grid-cols-4"
            >
              <Input dark label="Subject" error={errors.results?.[index]?.subjectName?.message} {...register(`results.${index}.subjectName`)} />
              <Input dark label="Marks Obtained" type="number" error={errors.results?.[index]?.marksObtained?.message} {...register(`results.${index}.marksObtained`)} />
              <Input dark label="Max Marks" type="number" error={errors.results?.[index]?.maxMarks?.message} {...register(`results.${index}.maxMarks`)} />
              <div className="flex items-end">
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-red-400 hover:bg-red-500/10"
                    onClick={() => remove(index)}
                  >
                    <Trash2 size={16} />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-6 rounded-xl bg-teal/10 p-4">
          <div>
            <p className="text-xs text-[#86868b]">Total</p>
            <p className="font-heading text-lg font-bold text-teal">
              {stats.totalObtained}/{stats.totalMax}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#86868b]">Percentage</p>
            <p className="font-heading text-lg font-bold text-teal">
              {stats.percentage}%
            </p>
          </div>
          <div>
            <p className="text-xs text-[#86868b]">Status</p>
            <p className={`font-heading text-lg font-bold ${stats.passed ? "text-teal" : "text-red-400"}`}>
              {stats.passed ? "PASS" : "FAIL"}
            </p>
          </div>
        </div>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : isEdit ? "Update Student" : "Add Student"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/students")}
          className="border-white/20 text-white hover:bg-white/10"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
