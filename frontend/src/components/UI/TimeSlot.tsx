import React from 'react';
import { Card, CardBody, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

interface TimeSlotProps {
  time: string;
  status: 'ЗАБРОНИРОВАН' | 'СВОБОДЕН';
  editable?: boolean;
  onEdit?: () => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, status, editable = false, onEdit }) => {
  const isBooked = status === 'ЗАБРОНИРОВАН';
  
  return (
    <Card className={`mb-2 shadow-none ${isBooked ? 'bg-purple-light' : 'bg-white'} border border-gray-200`}>
      <CardBody className="p-0 flex">
        <div className="w-1/3 p-3 border-r border-gray-200">
          {time}
        </div>
        <div className={`flex-1 p-3 ${isBooked ? '' : ''}`}>
          {status}
        </div>
        {editable && (
          <Button
            isIconOnly
            variant="light"
            className="min-w-12"
            onPress={onEdit}
          >
            <Icon icon="lucide:edit" width={20} height={20} />
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default TimeSlot;
