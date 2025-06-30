import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Button,
    Textarea,
} from "@material-tailwind/react";
import { EditIcon } from "lucide-react";
import { useState } from "react";

export default function OrderEdit({ orderData }) {
    const [formData, setFormData] = useState(orderData);
    const [isOpen, setOpen] = useState(false)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = () => {
        onClose();
    };

    return (
        <>
            <Button
                size="sm"
                color="blue"
                className="flex items-center gap-1 normal-case text-sm "
                onClick={() => setOpen(true)}
            >
                <EditIcon className="w-4 h-4" />
                Tahrirlash
            </Button>
            <Dialog open={isOpen} handler={() => setOpen(false)} size="lg">
                <DialogHeader>Buyurtmani Tahrirlash</DialogHeader>
                <DialogBody className="overflow-y-auto max-h-[70vh] grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Xizmat turi"
                        name="order_service_type"
                        value={formData.order_service_type}
                        onChange={handleChange}
                    />
                    <Input
                        label="Kategoriya"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                    <Input
                        label="Buyurtma sanasi"
                        type="date"
                        name="order_date"
                        value={formData.order_date}
                        onChange={handleChange}
                    />
                    <Input
                        label="Viloyat ID"
                        name="region_id"
                        type="number"
                        value={formData.region_id}
                        onChange={handleChange}
                    />
                    <Input
                        label="Shahar ID"
                        name="city_id"
                        type="number"
                        value={formData.city_id}
                        onChange={handleChange}
                    />
                    <Input
                        label="Egasining ID raqami"
                        name="owner_id"
                        type="number"
                        value={formData.owner_id}
                        onChange={handleChange}
                    />
                    <Textarea
                        label="To‘liq manzil"
                        name="owner_full_address"
                        value={formData.owner_full_address}
                        onChange={handleChange}
                    />
                    <Textarea
                        label="Izoh"
                        name="order_comment"
                        value={formData.order_comment}
                        onChange={handleChange}
                    />
                    <label className="flex items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            name="order_status"
                            checked={formData.order_status}
                            onChange={handleChange}
                        />
                        <span className="text-sm">Tasdiqlangan</span>
                    </label>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="gray" onClick={() => setOpen(false)}>
                        Bekor qilish
                    </Button>
                    <Button color="blue" onClick={handleSubmit}>
                        Saqlash
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
