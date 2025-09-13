import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';
import SocialCreditBadge from '../UI/SocialCreditBadge';

const AdminPanel: React.FC = () => {
  const users = [
    { username: '@тег_в_телеге', userId: 'user id' },
    { username: '@тег_в_телеге', userId: 'user id' },
    { username: '@тег_в_телеге', userId: 'user id' },
    { username: '@тег_в_телеге', userId: 'user id' },
    { username: '@тег_в_телеге', userId: 'user id' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Админ панель</h1>
      
      <div className="mb-4">
        <SocialCreditBadge 
          label="Текущее количество людей в коворке" 
          value="13 чел." 
        />
      </div>
      
      <Card className="mb-4 shadow-sm">
        <CardBody className="p-4">
          <h3 className="mb-4 font-medium">Управление посетителями</h3>
          
          <div className="space-y-3">
            {users.map((user, index) => (
              <Card key={index} className="shadow-none border border-gray-200">
                <CardBody className="p-3 flex items-center gap-3">
                  <Avatar
                    src="https://img.heroui.chat/image/avatar?w=200&h=200&u=3"
                    className="bg-purple-900"
                    size="md"
                  />
                  <div>
                    <div>{user.username}</div>
                    <div className="text-sm text-gray-500">{user.userId}</div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AdminPanel;
