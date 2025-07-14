import axios from "axios";
import { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    Typography,
    Button,
    Select,
    Option,
} from "@material-tailwind/react";
import ReactLoading from "react-loading";
import DeleteUser from "./Components/DeleteUser";
import EditUser from "./Components/EditUser";

export default function User() {
    const [userType, setUserType] = useState("worker");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllUser = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/user/getAll?userType=${userType}`, {
                headers: {
                    "ngrok-skip-browser-warning": "true",
                }
            });
            const data = Array.isArray(response.data) ? response.data : [];
            setUsers(data);
        } catch (error) {
            console.error("Foydalanuvchilarni olishda xatolik:", error);
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllUser();
    }, [userType]);

    const handleEdit = (id) => {
        console.log("Tahrirlash", id);
    };

    const handleDelete = (id) => {
        console.log("O'chirish", id);
    };

    if (loading) {
        return (
            <div className="min-h-screen p-4 flex items-center justify-center">
                <ReactLoading
                    type="spinningBubbles"
                    color="black"
                    height={100}
                    width={100}
                />
            </div>
        );
    }

    return (
        <div className="p-6 mt-[80px]">
            {/* Foydalanuvchi turini tanlash */}
            <div className="mb-6 w-60">
                <Select
                    label="Foydalanuvchi turini tanlang"
                    value={userType}
                    onChange={(val) => setUserType(val)}
                >
                    <Option value="worker">Ishchi</Option>
                    <Option value="customer">Mijoz</Option>
                </Select>
            </div>

            {/* Foydalanuvchilar kartochkasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <Card
                            key={user.id}
                            className="shadow-xl transition-all duration-300 hover:scale-[1.02] animate-fade-down"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {user.username}
                                </Typography>
                                <Typography className="text-sm text-gray-600">
                                    📱 Tel: {user.user_phone_number}
                                </Typography>
                                <Typography className="text-sm text-gray-600">
                                    📍 Manzil: {user.fullAddress}
                                </Typography>
                                <Typography className="text-sm text-gray-600">
                                    🗣️ Til: {user.language.toUpperCase()}
                                </Typography>
                                <Typography className="text-sm text-gray-600">
                                    👤 Turi: {user.user_type === "worker" ? "Ishchi" : "Mijoz"}
                                </Typography>
                                <Typography className="text-sm text-gray-600">
                                    📅 Yar.t.: {new Date(...user.created_at).toLocaleString("uz-UZ")}
                                </Typography>

                                <div className="mt-4 flex gap-2">
                                    <EditUser user={user} refresh={getAllUser} />
                                    <DeleteUser userId={user?.id} refresh={getAllUser} />

                                </div>
                            </CardBody>
                        </Card>
                    ))
                ) : (
                    <Typography color="gray" className="col-span-full text-center">
                        Foydalanuvchilar topilmadi.
                    </Typography>
                )}
            </div>
        </div>
    );
}
