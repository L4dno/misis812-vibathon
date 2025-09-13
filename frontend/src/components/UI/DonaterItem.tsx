import React from 'react';
import { Avatar } from '@heroui/react';

interface DonaterItemProps {
  username: string;
  amount: string;
  userId?: string;
}

const DonaterItem: React.FC<DonaterItemProps> = ({ username, amount, userId }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Avatar
        src="https://img.heroui.chat/image/avatar?w=200&h=200&u=2"
        className="bg-purple-900"
        size="md"
      />
      <div className="flex-1">
        <div className="text-sm">{username}</div>
        <div className="font-medium">{amount}</div>
        {userId && <div className="text-xs text-gray-500">{userId}</div>}
      </div>
    </div>
  );
};

export default DonaterItem;
