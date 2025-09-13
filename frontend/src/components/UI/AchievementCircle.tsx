import React from 'react';

interface AchievementCircleProps {
  title: string;
  achieved?: boolean;
}

const AchievementCircle: React.FC<AchievementCircleProps> = ({ title, achieved = false }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`achievement-circle ${achieved ? 'bg-purple-dark' : 'bg-gray-200'}`}></div>
      <span className="text-xs text-center">{title}</span>
    </div>
  );
};

export default AchievementCircle;
