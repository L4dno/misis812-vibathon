import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useUser } from '../../context/UserContext';

const Navigation: React.FC = () => {
  const { userType, setUserType } = useUser();
  
  // Use try-catch to handle potential router context issues
  let location;
  let history;
  try {
    location = useLocation();
    history = useHistory();
  } catch (error) {
    console.error("Router context not available:", error);
    // Return a fallback UI when router is not available
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 max-w-md mx-auto">
        <div className="flex justify-center">
          <p className="text-sm text-gray-500">Loading navigation...</p>
        </div>
      </div>
    );
  }
  
  const isAdmin = userType === 'admin';
  const baseRoutes = isAdmin ? '/admin' : '';
  
  const toggleUserType = () => {
    const newType = isAdmin ? 'regular' : 'admin';
    setUserType(newType);
    
    // Redirect to appropriate route based on new user type
    const currentPath = location.pathname.split('/').pop() || 'profile';
    const newPath = newType === 'admin' ? `/admin/${currentPath}` : `/${currentPath}`;
    history.push(newPath);
  };
  
  const navItems = [
    { path: `${baseRoutes}/profile`, icon: 'lucide:user', label: 'Profile' },
    { path: `${baseRoutes}/coworking`, icon: 'lucide:calendar', label: 'Coworking' },
    { path: `${baseRoutes}/achievements`, icon: 'lucide:award', label: 'Achievements' },
    { path: `${baseRoutes}/donaters`, icon: 'lucide:heart', label: 'Donaters' },
  ];
  
  if (isAdmin) {
    navItems[2] = { path: '/admin/panel', icon: 'lucide:settings', label: 'Admin' };
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <Button
            key={item.path}
            variant="light"
            isIconOnly
            className={`${location.pathname === item.path ? 'text-primary' : 'text-gray-500'}`}
            onPress={() => history.push(item.path)}
          >
            <Icon icon={item.icon} width={24} height={24} />
          </Button>
        ))}
        <Button
          variant="light"
          isIconOnly
          className="text-gray-500"
          onPress={toggleUserType}
        >
          <Icon icon={isAdmin ? 'lucide:user' : 'lucide:shield'} width={24} height={24} />
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
