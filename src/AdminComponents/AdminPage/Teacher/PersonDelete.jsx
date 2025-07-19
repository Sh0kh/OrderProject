import { useState } from "react";
import Swal from "sweetalert2";
import $api from "../../../utils/axios";

export default function PersonDelete({ isOpen, onClose, refresh, group }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await $api.delete(`/api/groups/${group.id}`);

      Swal.fire({
        title: "Muvaffaqiyatli!",
        text: "Guruh muvaffaqiyatli o'chirildi.",
        icon: "success",
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        toast: true,
        showConfirmButton: false,
      });

      refresh();
      onClose();
    } catch (error) {
      Swal.fire({
        title: "Xato!",
        text: error.response?.data?.message || "Guruh o'chirishda xatolik yuz berdi.",
        icon: "error",
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        toast: true,
        showConfirmButton: false,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between">
          <h1 className="text-[25px] font-bold">Guruhni o'chirish</h1>
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">
          <p className="text-[16px] text-gray-600">
            <strong>{group?.name}</strong> guruhini o'chirishni xohlaysizmi? Bu
            amalni qaytarib bo'lmaydi.
          </p>
          <div className="mt-6 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="py-2 px-4 rounded-lg border-2 border-gray-300 text-gray-600 hover:bg-gray-100 duration-500"
            >
              Bekor qilish
            </button>
            <button
              disabled={loading}
              onClick={handleDelete}
              className={`py-2 px-4 rounded-lg border-2 duration-500 ${
                loading
                  ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed"
                  : "bg-red-500 border-red-500 text-white hover:text-red-500 hover:bg-transparent"
              }`}
            >
              {loading ? "O'chirilmoqda..." : "O'chirish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}