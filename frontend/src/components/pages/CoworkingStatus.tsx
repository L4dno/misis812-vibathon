import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import TimeSlot from '../UI/TimeSlot';

const CoworkingStatus: React.FC = () => {
  const timeSlots = [
    { time: '9:00-10:00', status: 'ЗАБРОНИРОВАН' as const },
    { time: '10:00-11:00', status: 'СВОБОДЕН' as const },
    { time: '11:00-12:00', status: 'ЗАБРОНИРОВАН' as const },
    { time: '12:00-13:00', status: 'ЗАБРОНИРОВАН' as const },
    { time: '13:00-14:00', status: 'СВОБОДЕН' as const },
    { time: '14:00-15:00', status: 'СВОБОДЕН' as const },
    { time: '15:00-16:00', status: 'СВОБОДЕН' as const },
    { time: '15:00-16:00', status: 'СВОБОДЕН' as const },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Статус Коворкинга</h1>
      
      <Card className="mb-4 shadow-sm">
        <CardBody className="p-4">
          <div className="mb-2">Кабинет: Г-513</div>
          <div>Сейчас в Коворкинге: 20 чел.</div>
        </CardBody>
      </Card>
      
      <div className="mb-4">
        {timeSlots.map((slot, index) => (
          <TimeSlot 
            key={index} 
            time={slot.time} 
            status={slot.status} 
          />
        ))}
      </div>
      
      <Button 
        className="w-full bg-purple-light text-black"
        variant="flat"
      >
        ЗАБРОНИРОВАТЬ
      </Button>
    </div>
  );
};

export default CoworkingStatus;
