import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Select,
    Option,
    Textarea,
} from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import regions from "../../Dashboard/Data/regions.json";
import districts from "../../Dashboard/Data/districts.json";

export default function EditUser({ user, refresh }) {
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        id: user.id,
        username: user.username || "",
        user_phone_number: user.user_phone_number || "",
        fullAddress: user.fullAddress || "",
        regionId: user.regionId || "",
        cityId: user.cityId || "",
        language: user.language || "uz",
        user_type: user.user_type || "worker",
        created_at: user.created_at || new Date().toISOString(),
    });

    const [filteredDistricts, setFilteredDistricts] = useState([]);

    useEffect(() => {
        if (formData.regionId) {
            const filtered = districts.filter(d => d.region_id === Number(formData.regionId));
            setFilteredDistricts(filtered);

            const cityExists = filtered.some(d => d.id === Number(formData.cityId));
            if (!cityExists) {
                setFormData(prev => ({ ...prev, cityId: "" }));
            }
        } else {
            setFilteredDistricts([]);
            setFormData(prev => ({ ...prev, cityId: "" }));
        }
    }, [formData.regionId]);

    const handleOpen = () => setOpen(!open);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: name === "regionId" || name === "cityId" ? Number(value) : value,
        }));
    };


    const handleSave = async () => {
        try {
            await axios.put(`/user/update`, formData);
            Swal.fire({
                title: "Muvaffaqiyatli!",
                icon: "success",
                toast: true,
                position: "top-end",
                timer: 3000,
                showConfirmButton: false,
                customClass: {
                    popup: 'custom-z-index'
                }
            });

            refresh?.();
            handleOpen();
        } catch (error) {
            Swal.fire({
                title: "Xato!",
                text: error.response?.data?.message || "Xatolik yuz berdi.",
                icon: "error",
                toast: true,
                position: "top-end",
                timer: 3000,
                customClass: {
                    popup: 'custom-z-index'
                },
                showConfirmButton: false,
            });
            console.error(error);
        }
    };

    return (
        <>
            <Button size="sm" color="blue" onClick={handleOpen}>
                Tahrirlash
            </Button>

            <Dialog open={open} handler={handleOpen} size="lg">
                <DialogHeader>Foydalanuvchini tahrirlash</DialogHeader>
                <DialogBody className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto">
                    <Input
                        label="F.I.Sh"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <Input
                        label="Telefon raqami"
                        name="user_phone_number"
                        value={formData.user_phone_number}
                        onChange={handleChange}
                    />

                    {/* Viloyat */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                            Viloyat
                        </label>
                        <select
                            name="regionId"
                            value={formData.regionId}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">-- Tanlang --</option>
                            {regions.map((r) => (
                                <option key={r.id} value={r.id}>
                                    {r.name_uz}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Tuman */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">
                            Shahar / Tuman
                        </label>
                        <select
                            name="cityId"
                            value={formData.cityId}
                            onChange={handleChange}
                            disabled={!formData.regionId}
                            className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none ${!formData.regionId
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "focus:ring-2 focus:ring-blue-500"
                                }`}
                        >
                            <option value="">-- Tanlang --</option>
                            {filteredDistricts.map((d) => (
                                <option key={d.id} value={d.id}>
                                    {d.name_uz}
                                </option>
                            ))}
                        </select>
                    </div>

                    <Textarea
                        label="To‘liq manzil"
                        name="fullAddress"
                        value={formData.fullAddress}
                        onChange={handleChange}
                        className="col-span-1 md:col-span-2"
                    />

                    <Select
                        label="Til"
                        value={formData.language}
                        onChange={(val) => setFormData(prev => ({ ...prev, language: val }))}
                    >
                        <Option value="uz">Uzbek</Option>
                        <Option value="ru">Russian</Option>
                    </Select>

                    <Select
                        label="Foydalanuvchi turi"
                        value={formData.user_type}
                        onChange={(val) => setFormData(prev => ({ ...prev, user_type: val }))}
                    >
                        <Option value="worker">Ishchi</Option>
                        <Option value="customer">Mijoz</Option>
                    </Select>
                </DialogBody>

                <DialogFooter>
                    <Button variant="text" color="gray" onClick={handleOpen} className="mr-2">
                        Bekor qilish
                    </Button>
                    <Button color="blue" onClick={handleSave}>
                        Saqlash
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
