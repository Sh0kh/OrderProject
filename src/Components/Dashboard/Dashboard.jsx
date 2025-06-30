import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import EditIcon from "@mui/icons-material/Edit";
import OrderEdit from "./components/OrderEdit";

export default function OrderList() {
  const orders = [
    {
      order_service_type: "Elektr ta'minoti",
      order_comment: "Uydagi chiroq ishlamayapti",
      category: "Elektrik",
      order_date: "2025-06-30",
      region_id: 1,
      city_id: 5,
      owner_id: 123456,
      owner_full_address: "Toshkent shahri, Chilonzor tuman, 21-kvartal, 15-uy",
      order_status: false,
      created_at: "2025-06-29T12:00:00",
    },
    {
      order_service_type: "Santexnika",
      order_comment: "Quvur yorilib ketgan",
      category: "Santexnik",
      order_date: "2025-06-28",
      region_id: 2,
      city_id: 3,
      owner_id: 789012,
      owner_full_address: "Andijon viloyati, Asaka tumani, Yangi ko‘cha 10-uy",
      order_status: true,
      created_at: "2025-06-27T10:30:00",
    },
  ];

  const handleEdit = (order) => {
    console.log("Tahrirlash bosildi:", order);
  };

  return (
    <div className="min-h-screen mt-[80px] p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Buyurtmalar Ro‘yxati
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {orders.map((order, index) => (
          <Card key={index} className="shadow-md border border-gray-300 bg-white">
            <CardBody className="space-y-2 relative ">
              <Typography variant="h6" className="font-bold text-black">
                {order.category} - {order.order_service_type}
              </Typography>
              <Typography className="text-gray-700">
                <span className="font-medium">Izoh:</span> {order.order_comment}
              </Typography>
              <Typography className="text-gray-700">
                <span className="font-medium">Buyurtma sanasi:</span> {order.order_date}
              </Typography>
              <Typography className="text-gray-700">
                <span className="font-medium">Hudud:</span> Viloyat ID {order.region_id}, Shahar ID {order.city_id}
              </Typography>
              <Typography className="text-gray-700">
                <span className="font-medium">Egasining ID raqami:</span> {order.owner_id}
              </Typography>
              <Typography className="text-gray-700">
                <span className="font-medium">Manzil:</span> {order.owner_full_address}
              </Typography>
              <Typography
                className={`font-semibold ${order.order_status ? "text-green-600" : "text-red-500"
                  }`}
              >
                {order.order_status ? "Tasdiqlangan" : "Tasdiqlanmagan"}
              </Typography>
              <Typography className="text-xs text-gray-400">
                Yaratilgan vaqti: {new Date(order.created_at).toLocaleString()}
              </Typography>

              {/* Edit Button */}
              <div className="flex items-center justify-end">
                <OrderEdit orderData={order}/>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
