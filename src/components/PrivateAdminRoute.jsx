import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import useUsersStore from '../store/usersStore';

const PrivateAdminRoute = ({ children }) => {
  const { session } = useAuthStore();
  const { users } = useUsersStore();

  // First check if user is authenticated
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // Find the current user's record
  const currentUser = users.find(user => user.email === session.user.email);

  // Check if user is an admin using the type field
  if (!currentUser || currentUser.type !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PrivateAdminRoute; 