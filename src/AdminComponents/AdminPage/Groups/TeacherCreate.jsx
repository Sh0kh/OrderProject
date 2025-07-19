import { useState } from "react";
import Swal from "sweetalert2";
import $api from "../../../utils/axios";


export default function TeacherCreate({ isOpen, onClose, refresh }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Har doim +998 bilan boshlanishini ta'minlash
    if (!value.startsWith('+998')) {
      value = '+998';
    }

    // Faqat raqamlarni qabul qilish va +998 dan keyin 9 raqamgacha cheklash
    const phoneNumber = value.replace(/[^0-9]/g, '').slice(3); // +998 ni olib tashlash
    if (phoneNumber.length <= 9) {
      setPhone('+998' + phoneNumber);
    }
  };
  const handleCreate = async () => {
    setLoading(true);
    try {
      const data = {
        name,
        phone,
        password,
        password_confirmation: passwordConfirmation,
      };

      await $api.post("api/teachers", data);

      Swal.fire({
        title: "Muvaffaqiyatli!",
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
      setName("");
      setPhone("");
      setPassword("");
      setPasswordConfirmation("");
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
        <div className="flex items-center justify-between">
          <h1 className="text-[25px] font-bold">O‘qituvchi yaratish</h1>
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
          <div className="mb-4">
            <label className="block text-[13px] text-black">Ism</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ism kiriting"
              className="w-full py-2 px-3 rounded-[5px] outline-none border-[2px] border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[13px] text-black">Telefon</label>
            <input
      type="text"
      value={phone}
      onChange={handlePhoneChange}
      className="w-full py-2 px-3 rounded-[5px] outline-none border-[2px] border-gray-300 focus:border-blue-500"
      maxLength={12} // +998 va 9 raqam
      pattern="\+998[0-9]{9}" // Faqat +998 va 9 raqam
      title="Telefon raqami +998 bilan boshlanib, 9 raqamdan iborat bo‘lishi kerak"
      required
    />
          </div>
          <div className="mb-4">
            <label className="block text-[13px] text-black">Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Parol kiriting"
              className="w-full py-2 px-3 rounded-[5px] outline-none border-[2px] border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[13px] text-black">
              Parolni tasdiqlash
            </label>
            <input
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="Parolni qayta kiriting"
              className="w-full py-2 px-3 rounded-[5px] outline-none border-[2px] border-gray-300 focus:border-blue-500"
            />
          </div>
          <button
            disabled={loading}
            onClick={handleCreate}
            className={`w-full py-2 rounded-lg shadow-lg border-2 duration-500 ${
              loading
                ? "bg-gray-400 border-gray-400 text-white cursor-not-allowed"
                : "bg-blue-500 border-blue-500 text-white hover:text-blue-500 hover:bg-transparent"
            }`}
          >
            {loading ? "Yaratilmoqda..." : "Yaratish"}
          </button>
        </div>
      </div>
    </div>
  );
}