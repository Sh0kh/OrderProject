import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import $api from "../../../utils/axios";

export default function TeacherEdit({ isOpen, onClose, refresh, teacher }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (teacher) {
      setName(teacher.name || "");
      setPhone(teacher.phone || "");
    }
  }, [teacher]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await $api.post(`api/teachers/${teacher.id}`, {
        name,
        phone,
        password,
        password_confirmation: passwordConfirmation,
      });

      Swal.fire({
        title: "Yangilandi!",
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
        text: error.response?.data?.message || "Xatolik yuz berdi.",
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
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[25px] font-bold">O‘qituvchini tahrirlash</h1>
          <button onClick={onClose}>❌</button>
        </div>

        <div className="mb-4">
          <label className="block text-[13px] text-black">Ism</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-3 rounded-md border-2 border-gray-300 focus:border-blue-500 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[13px] text-black">Telefon</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full py-2 px-3 rounded-md border-2 border-gray-300 focus:border-blue-500 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[13px] text-black">Yangi parol</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 px-3 rounded-md border-2 border-gray-300 focus:border-blue-500 outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[13px] text-black">Parolni tasdiqlash</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="w-full py-2 px-3 rounded-md border-2 border-gray-300 focus:border-blue-500 outline-none"
          />
        </div>

        <button
          disabled={loading}
          onClick={handleUpdate}
          className={`w-full py-2 rounded-lg shadow-lg border-2 duration-500 ${
            loading
              ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed"
              : "bg-blue-500 border-blue-500 text-white hover:text-blue-500 hover:bg-transparent"
          }`}
        >
          {loading ? "Yangilanmoqda..." : "Yangilash"}
        </button>
      </div>
    </div>
  );
}
