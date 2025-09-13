import React from 'react';
import { Card, CardBody } from '@heroui/react';
import DonaterItem from '../UI/DonaterItem';

const Donaters: React.FC = () => {
  const donaters = [
    { username: '@тег_в_телеге', amount: '1000 руб.' },
    { username: '@тег_в_телеге', amount: '1000 руб.' },
    { username: '@тег_в_телеге', amount: '1000 руб.' },
    { username: '@тег_в_телеге', amount: '1000 руб.' },
    { username: '@тег_в_телеге', amount: '1000 руб.' },
  ];

  return (
    <div className="p-4">
      <Card className="mb-4 bg-purple-light shadow-none">
        <CardBody className="p-4">
          <h1 className="text-2xl font-bold text-center mb-4">Донатеры</h1>
          <div className="mb-2">
            <span className="font-medium">Vladislav</span>
          </div>
        </CardBody>
      </Card>
      
      <Card className="shadow-sm">
        <CardBody className="p-4">
          <h3 className="mb-4">Последние донаты:</h3>
          {donaters.map((donater, index) => (
            <DonaterItem 
              key={index} 
              username={donater.username} 
              amount={donater.amount} 
            />
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default Donaters;
