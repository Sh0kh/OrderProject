import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 200 },
  { name: "Thu", value: 278 },
  { name: "Fri", value: 189 },
  { name: "Sat", value: 239 },
  { name: "Sun", value: 349 },
];

const expensesData = [
  { name: "Mon", value: 250 },
  { name: "Tue", value: 180 },
  { name: "Wed", value: 300 },
  { name: "Thu", value: 200 },
  { name: "Fri", value: 170 },
  { name: "Sat", value: 220 },
  { name: "Sun", value: 260 },
];

const salesData = [
  { name: "M", value: 2000 },
  { name: "T", value: 3000 },
  { name: "W", value: 4000 },
  { name: "T", value: 3500 },
  { name: "F", value: 5000 },
  { name: "S", value: 4200 },
  { name: "S", value: 5678 },
];

export default function Dashboard() {
  return (
    <div className="pt-[80px] px-4 bg-[#f8f9ff] min-h-screen">
      
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-sm text-gray-500 mb-8">Welcome back</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Revenue */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Ustozlar</p>
              <h2 className="text-xl font-bold">50</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={revenueData}>
              <Bar dataKey="value" fill="url(#blueGradient)" radius={[10, 10, 0, 0]} />
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity={0.3} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Expenses */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Guruhlar</p>
              <h2 className="text-xl font-bold">20</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <BarChart data={expensesData}>
              <Bar dataKey="value" fill="url(#pinkGradient)" radius={[10, 10, 0, 0]} />
              <defs>
                <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#f9a8d4" stopOpacity={0.3} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sales */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">O'quvchilar</p>
              <h2 className="text-xl font-bold">100</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={salesData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#salesGradient)"
                strokeWidth={3}
              />
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
