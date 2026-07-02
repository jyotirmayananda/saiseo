import StudentForm from "@/components/admin/StudentForm";

export default function NewStudentPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-brand">Add Student</h1>
      <p className="mt-1 text-muted">Create a new student record with examination results.</p>
      <div className="mt-8">
        <StudentForm />
      </div>
    </div>
  );
}
