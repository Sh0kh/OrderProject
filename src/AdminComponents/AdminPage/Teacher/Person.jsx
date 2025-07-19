import { useEffect, useState } from "react";
import $api from "../../../utils/axios";
import PersonCreate from "./PersonCreate";
import PersonEdit from "./PersonEdit";
import PersonDelete from "./PersonDelete";

export default function Person() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [createModal, setCreateModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await $api.get("/api/groups");
      const data = response.data?.data || [];

      if (Array.isArray(data)) {
        setGroups(data);
      } else {
        setGroups([]);
      }
    } catch (error) {
      console.error("Guruhlarni olishda xatolik:", error);
      setError("Guruhlarni olishda xato yuz berdi. Iltimos, keyinroq urinib ko'ring.");
      setGroups([]);
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (group) => {
    setSelectedGroup(group);
    setEditModalOpen(true);
  };

  const openDeleteModal = (group) => {
    setSelectedGroup(group);
    setDeleteModalOpen(true);
  };

  const closeModals = () => {
    setCreateModal(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setSelectedGroup(null);
  };

  return (
    <div className="pt-[75px] pb-[50px]">
      <div className="Admin__header__wrapper flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Guruhlar</h1>
        <button
          onClick={() => setCreateModal(true)}
          className="bg-[#1ca9ff] text-white px-4 py-2 rounded-lg shadow-lg border-2 border-MainColor duration-500 hover:text-[#1ca9ff] border-[#1ca9ff] hover:bg-transparent"
        >
          Guruh yaratish
        </button>
      </div>

      {error && (
        <div className="p-4 text-center text-red-500">{error}</div>
      )}
      <div className="bg-white w-full rounded-lg shadow-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm md:text-base bg-gray-100">
              <th className="p-3 text-center">№</th>
              <th className="p-3 text-center">Ustoz</th>
              <th className="p-3 text-center">Guruh nomi</th>
              <th className="p-3 text-center">Ta'rif</th>
              <th className="p-3 text-center">Amallar</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  Yuklanmoqda...
                </td>
              </tr>
            ) : groups.length > 0 ? (
              groups.map((group, index) => (
                <tr key={group.id} className="text-center text-sm md:text-base border-t">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{group.user?.name || "Noma'lum"}</td>
                  <td className="p-3">{group.name}</td>
                  <td className="p-3">{group.description || "-"}</td>
                  <td className="p-3">
                    <button
                      onClick={() => openEditModal(group)}
                      className="bg-yellow-400 mx-[10px] hover:bg-yellow-500 text-white px-3 py-1 rounded"
                    >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                    </button>
                    <button
                      onClick={() => openDeleteModal(group)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  Guruhlar topilmadi.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modallar */}
      <PersonCreate
        isOpen={createModal}
        onClose={closeModals}
        refresh={fetchGroups}
      />
      <PersonEdit
        isOpen={editModalOpen}
        onClose={closeModals}
        refresh={fetchGroups}
        group={selectedGroup}
      />
      <PersonDelete
        isOpen={deleteModalOpen}
        onClose={closeModals}
        refresh={fetchGroups}
        group={selectedGroup}
      />
    </div>
  );
}