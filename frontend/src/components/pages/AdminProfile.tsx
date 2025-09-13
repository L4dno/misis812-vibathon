import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import UserHeader from '../UI/UserHeader';
import SocialCreditBadge from '../UI/SocialCreditBadge';
import QRCodeButton from '../UI/QRCodeButton';

const AdminProfile: React.FC = () => {
  return (
    <div className="p-4">
      <UserHeader showSocialCredit={false} />
      
      <div className="mb-4">
        <SocialCreditBadge 
          label="Текущее количество людей в коворке" 
          value="13ppl" 
        />
      </div>
      
      <QRCodeButton text="Отметить людей на определенное меро" />
      <QRCodeButton text="Сгенерировать QR для меро" />
      
      <Card className="mb-2 bg-purple-light shadow-none">
        <Button
          variant="flat"
          color="default"
          className="p-4 h-auto w-full text-left text-black"
        >
          Управление текущими посетителями
        </Button>
      </Card>
      
      <Card className="bg-purple-light shadow-none">
        <Button
          variant="flat"
          color="default"
          className="p-4 h-auto w-full text-left text-black"
        >
          Управление всеми посетителями
        </Button>
      </Card>
    </div>
  );
};

export default AdminProfile;
