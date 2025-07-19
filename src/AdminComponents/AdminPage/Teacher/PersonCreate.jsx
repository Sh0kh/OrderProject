import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import $api from "../../../utils/axios";

export default function PersonCreate({ isOpen, onClose, refresh }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("name", name);
      formData.append("description", description);
      if (image) {
        formData.append("image", image);
      }

      await $api.post("/api/groups", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Muvaffaqiyatli!",
        text: "Guruh muvaffaqiyatli yaratildi.",
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
      setDescription("");
      setUserId("");
      setImage(null);
    } catch (error) {
      Swal.fire({
        title: "Xato!",
        text: error.response?.data?.message || "Guruh yaratishda xatolik yuz berdi.",
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

  useEffect(()=>{
    fetchTeachers()
  },[])
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between">
          <h1 className="text-[25px] font-bold">Guruh yaratish</h1>
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
            <label className="block text-[13px] text-black">User ID</label>
            {/* <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="User ID kiriting"
              className="w-full py-2 px-3 rounded-[5px] outline-none border-[2px] border-gray-300 focus:border-blue-500"
            // /> xato */}  
     <select
  value={userId}
  onChange={(e) => setUserId(e?.target?.value)}
  className="w-full py-2 px-3 rounded-[5px] outline-none border-[2px] border-gray-300 focus:border-blue-500"
>
  <option value="">O'qituvchini tanlang</option>
  {teachers?.map((teacher) => (
    <option key={teacher?.id} value={teacher?.id}>
      {teacher?.name}
    </option>
  ))}
</select>

 
          </div>
          <div className="mb-4">
            <label className="block text-[13px] text-black">Guruh nomi</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Guruh nomini kiriting"
              className="w-full py-2 px-3 rounded-[5px] outline-none border-[2px] border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[13px] text-black">Ta'rif</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Guruh ta'rifini kiriting"
              className="w-full py-2 px-3 rounded-[5px] outline-none border-[2px] border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[13px] text-black">Rasm</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
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