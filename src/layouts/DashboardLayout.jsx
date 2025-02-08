import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/dashboard' },
    { icon: '📦', label: 'Products', path: '/dashboard/products' },
    { icon: '🛍️', label: 'Orders', path: '/dashboard/orders' },
    { icon: '📈', label: 'Analytics', path: '/dashboard/analytics' },
    { icon: '⚙️', label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border-r">
          <div className="flex items-center justify-between mb-6 px-2">
            <h2 className="text-2xl font-bold text-gray-800">DashMaster</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center px-2 py-3 text-gray-600 rounded-lg hover:bg-gray-100 group"
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarOpen ? 'lg:ml-64' : ''} p-4`}>
        {/* Top Navigation */}
        <header className="bg-white shadow-sm mb-6 rounded-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              ☰
            </button>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">🔔</button>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  <span className="text-sm font-medium">{user?.email}</span>
                  <span>👤</span>
                </button>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="bg-white rounded-lg shadow-sm p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 