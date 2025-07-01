import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import OrderEdit from "./components/OrderEdit";
import axios from "../../utils/axios";
import ReactLoading from "react-loading";

export default function OrderList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Форматирование даты из массива [2025, 7, 2, 0, 0]
  const formatDateFromArray = (dateArray) => {
    if (!dateArray || dateArray.length < 3) return "Noma'lum sana";
    const [year, month, day] = dateArray;
    return `${day.toString().padStart(2, "0")}-${month
      .toString()
      .padStart(2, "0")}-${year}`;
  };

  // Получение всех заказов с сервера
  const getAllOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/bot/orders/getAll`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      setData(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  // Лоадер
  if (loading) {
    return (
      <div className="min-h-screen p-4 flex items-center justify-center">
        <ReactLoading type="spinningBubbles" color="black" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-[80px] p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Buyurtmalar Ro‘yxati
      </h1>
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-600 text-xl font-medium">Buyurtmalar mavjud emas</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((order, index) => (
            <Card key={index} className="shadow-md border border-gray-300 bg-white">
              <CardBody className="space-y-2 relative">
                <Typography variant="h6" className="font-bold text-black">
                  {order.category} - {order.orderServiceType}
                </Typography>
                <Typography className="text-gray-700">
                  <span className="font-medium">Izoh:</span> {order.orderComment}
                </Typography>
                <Typography className="text-gray-700">
                  <span className="font-medium">Buyurtma sanasi:</span>{" "}
                  {formatDateFromArray(order.orderDate)}
                </Typography>
                <Typography className="text-gray-700">
                  <span className="font-medium">Hudud:</span> Viloyat ID {order.regionId}, Shahar ID {order.cityId}
                </Typography>
                <Typography className="text-gray-700">
                  <span className="font-medium">Egasining ID raqami:</span> {order.ownerId}
                </Typography>
                <Typography className="text-gray-700">
                  <span className="font-medium">Manzil:</span> {order.ownerFullAddress}
                </Typography>
                <Typography className={`font-semibold ${order.orderStatus ? "text-green-600" : "text-red-500"}`}>
                  {order.orderStatus ? "Tasdiqlangan" : "Tasdiqlanmagan"}
                </Typography>
                <Typography className="text-xs text-gray-400">
                  Yaratilgan vaqti:{" "}
                  {order.createAt
                    ? new Date(order.createAt).toLocaleString()
                    : "Yaratilgan sana yo'q"}
                </Typography>
                <div className="flex items-center justify-end">
                  <OrderEdit refresh={getAllOrders} orderData={order} />
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}

    </div>
  );
}
