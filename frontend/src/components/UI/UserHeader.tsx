import React from 'react';
import { Avatar, Card, CardBody } from '@heroui/react';
import { useUser } from '../../context/UserContext';

interface UserHeaderProps {
  showSocialCredit?: boolean;
}

const UserHeader: React.FC<UserHeaderProps> = ({ showSocialCredit = true }) => {
  const { username, socialCredit, achievements } = useUser();

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardBody className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
            className="user-avatar"
            size="lg"
          />
          <h2 className="text-xl font-bold">{username}</h2>
        </div>
        
        {showSocialCredit && (
          <div className="text-right">
            <div className="font-bold text-xl">{socialCredit} pts.</div>
            <div className="text-gray-500">#{achievements}</div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default UserHeader;
