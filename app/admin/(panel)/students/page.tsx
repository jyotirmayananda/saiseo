import StudentTable from "@/components/admin/StudentTable";

export default function StudentsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-white">
        Manage Students
      </h1>
      <p className="mt-1 text-[#86868b]">
        View, search, edit, and delete student records.
      </p>
      <div className="mt-8">
        <StudentTable />
      </div>
    </div>
  );
}
