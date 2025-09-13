import React from 'react';
import { Card, CardBody } from '@heroui/react';
import UserHeader from '../UI/UserHeader';
import SocialCreditBadge from '../UI/SocialCreditBadge';
import AchievementCircle from '../UI/AchievementCircle';

const Achievements: React.FC = () => {
  const achievementCategories = [
    { title: 'Звезда', achieved: true },
    { title: 'Любимка', achieved: true },
    { title: 'Топник', achieved: true },
    { title: 'Донатер', achieved: true },
    { title: 'Марафонец', achieved: true },
    { title: 'К чаечку', achieved: true },
    { title: 'Помощник', achieved: false },
    { title: 'Max', achieved: false },
  ];

  return (
    <div className="p-4">
      <UserHeader />
      
      <div className="mb-4">
        <SocialCreditBadge label="Социальный кредит" value="100 pts. #13" />
      </div>
      
      <Card className="mb-4 shadow-sm">
        <CardBody className="p-4">
          <h3 className="mb-4 font-medium">Достижения:</h3>
          <div className="grid grid-cols-4 gap-y-6">
            {achievementCategories.map((achievement, index) => (
              <AchievementCircle 
                key={index} 
                title={achievement.title} 
                achieved={achievement.achieved} 
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Achievements;
