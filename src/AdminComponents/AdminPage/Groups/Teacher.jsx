import { useState, useEffect } from "react";
import $api from "../../../utils/axios";
import TeacherCreate from "./TeacherCreate";
import TeacherEdit from "./TeacherEdit";
import Swal from "sweetalert2";

export default function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const fetchTeachers = async () => {
    try {
      const response = await $api.get("api/teachers");
      setTeachers(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Ishonchingiz komilmi?",
      text: "Bu ustozni o‘chirishni xohlaysizmi?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ha, o‘chir!",
      cancelButtonText: "Bekor qilish",
    });

    if (result.isConfirmed) {
      try {
        await $api.delete(`api/teachers/${id}`);
        Swal.fire({
          title: "O‘chirildi!",
          icon: "success",
          timer: 2000,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
        fetchTeachers();
      } catch (error) {
        Swal.fire({
          title: "Xato!",
          text: error.response?.data?.message || "O‘chirishda xatolik yuz berdi.",
          icon: "error",
        });
      }
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>Xatolik yuz berdi: {error}</div>;

  return (
    <>
      <TeacherCreate
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        refresh={fetchTeachers}
      />

      <TeacherEdit
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        refresh={fetchTeachers}
        teacher={selectedTeacher}
      />

      <div className="pt-[75px] pb-[50px]">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Ustozlar</h1>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="bg-[#1ca9ff] text-white px-4 py-2 rounded-lg shadow-lg border-2 border-[#1ca9ff] duration-500 hover:text-[#1ca9ff] hover:bg-transparent"
          >
            Ustoz yaratish
          </button>
        </div>

        <div className="bg-white w-full rounded-lg shadow-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm md:text-base">
                <th className="p-3">№</th>
                <th className="p-3">Ismi</th>
                <th className="p-3">Telefon</th>
                <th className="p-3">Amallar</th>
              </tr>
            </thead>
            <tbody>
              {teachers?.map((teacher, index) => (
                <tr
                  key={teacher.id}
                  className="border-t hover:bg-gray-100 text-sm md:text-base"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{teacher.name}</td>
                  <td className="p-3">{teacher.phone}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedTeacher(teacher);
                        setIsEditOpen(true);
                      }}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                    </button>
                    <button
                      onClick={() => handleDelete(teacher.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
