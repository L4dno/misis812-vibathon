import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import TimeSlot from '../UI/TimeSlot';

const AdminCoworkingStatus: React.FC = () => {
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

  const handleEdit = (index: number) => {
    console.log(`Editing time slot ${index}`);
  };

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
            editable
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        <Button 
          isIconOnly
          variant="solid"
          color="primary"
          className="rounded-full"
        >
          <Icon icon="lucide:send" width={20} height={20} />
        </Button>
        <Button 
          isIconOnly
          variant="solid"
          color="default"
          className="rounded-full"
        >
          <Icon icon="lucide:hand" width={20} height={20} />
        </Button>
        <Button 
          isIconOnly
          variant="solid"
          color="default"
          className="rounded-full"
        >
          <Icon icon="lucide:message-circle" width={20} height={20} />
        </Button>
        <Button 
          variant="solid"
          color="primary"
        >
          Ask to edit
        </Button>
        <Button 
          isIconOnly
          variant="solid"
          color="default"
          className="rounded-full"
        >
          <Icon icon="lucide:scissors" width={20} height={20} />
        </Button>
        <Button 
          isIconOnly
          variant="solid"
          color="default"
          className="rounded-full"
        >
          <Icon icon="lucide:layout-grid" width={20} height={20} />
        </Button>
        <Button 
          isIconOnly
          variant="solid"
          color="default"
          className="rounded-full"
        >
          <Icon icon="lucide:code" width={20} height={20} />
        </Button>
      </div>
    </div>
  );
};

export default AdminCoworkingStatus;
