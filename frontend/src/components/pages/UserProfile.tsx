import React from 'react';
import { Card, CardBody } from '@heroui/react';
import UserHeader from '../UI/UserHeader';
import SocialCreditBadge from '../UI/SocialCreditBadge';
import QRCodeButton from '../UI/QRCodeButton';
import AchievementCircle from '../UI/AchievementCircle';

const UserProfile: React.FC = () => {
  return (
    <div className="p-4">
      <UserHeader />
      
      <div className="mb-4">
        <SocialCreditBadge label="Социальный кредит" value="100 pts. #13" />
      </div>
      
      <Card className="mb-4 shadow-sm">
        <CardBody className="p-4">
          <h3 className="mb-4 font-medium">Достижения:</h3>
          <div className="grid grid-cols-4 gap-4">
            {Array(12).fill(0).map((_, i) => (
              <AchievementCircle key={i} title="" />
            ))}
          </div>
        </CardBody>
      </Card>
      
      <QRCodeButton text="Отметиться с помощью QR-code" />
      <QRCodeButton text="Отправить обратную связь" />
    </div>
  );
};

export default UserProfile;
