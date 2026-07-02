import StudentForm from "@/components/admin/StudentForm";

export default function NewStudentPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-white">
        Add Student
      </h1>
      <p className="mt-1 text-[#86868b]">
        Create a new student record with examination results.
      </p>
      <div className="mt-8">
        <StudentForm />
      </div>
    </div>
  );
}
