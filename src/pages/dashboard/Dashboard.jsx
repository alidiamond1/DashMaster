import DashboardLayout from '../../layouts/DashboardLayout';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const StatCard = ({ title, value, icon, trend }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <span className="text-2xl">{icon}</span>
    </div>
    <div className="flex items-center justify-between">
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      {trend && (
        <span className={`text-sm ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      )}
    </div>
  </div>
);

const Dashboard = () => {
  // Example data - replace with real data from your backend
  const stats = [
    { title: 'Total Revenue', value: '$24,567', icon: '💰', trend: 12 },
    { title: 'Total Users', value: '1,234', icon: '👥', trend: 8 },
    { title: 'Total Orders', value: '567', icon: '🛍️', trend: -3 },
    { title: 'Average Order', value: '$123', icon: '📊', trend: 5 },
  ];

  const recentOrders = [
    { id: '1', customer: 'John Doe', amount: '$120', status: 'Completed', date: '2024-02-07' },
    { id: '2', customer: 'Jane Smith', amount: '$85', status: 'Pending', date: '2024-02-07' },
    { id: '3', customer: 'Bob Johnson', amount: '$200', status: 'Processing', date: '2024-02-06' },
    { id: '4', customer: 'Alice Brown', amount: '$150', status: 'Completed', date: '2024-02-06' },
  ];

  // Revenue data for the line chart
  const revenueData = [
    { month: 'Jan', revenue: 12000, orders: 220 },
    { month: 'Feb', revenue: 19000, orders: 380 },
    { month: 'Mar', revenue: 15000, orders: 340 },
    { month: 'Apr', revenue: 22000, orders: 420 },
    { month: 'May', revenue: 18000, orders: 390 },
    { month: 'Jun', revenue: 25000, orders: 480 },
    { month: 'Jul', revenue: 32000, orders: 560 },
  ];

  // Sales data for the area chart
  const salesData = [
    { name: 'Week 1', online: 4000, offline: 2400 },
    { name: 'Week 2', online: 3000, offline: 1398 },
    { name: 'Week 3', online: 2000, offline: 9800 },
    { name: 'Week 4', online: 2780, offline: 3908 },
    { name: 'Week 5', online: 1890, offline: 4800 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Download Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4F46E5"
                    activeDot={{ r: 8 }}
                    name="Revenue ($)"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="orders"
                    stroke="#22C55E"
                    name="Orders"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Analytics</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={salesData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="online"
                    stackId="1"
                    stroke="#4F46E5"
                    fill="#4F46E5"
                    name="Online Sales"
                  />
                  <Area
                    type="monotone"
                    dataKey="offline"
                    stackId="1"
                    stroke="#22C55E"
                    fill="#22C55E"
                    name="Offline Sales"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{order.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard; 