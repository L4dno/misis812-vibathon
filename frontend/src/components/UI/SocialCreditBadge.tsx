import React from 'react';
import { Card, CardBody } from '@heroui/react';

interface SocialCreditBadgeProps {
  label: string;
  value: string | number;
}

const SocialCreditBadge: React.FC<SocialCreditBadgeProps> = ({ label, value }) => {
  return (
    <Card className="border border-gray-200 shadow-none">
      <CardBody className="p-2 text-center">
        <div className="text-sm text-gray-600">{label}</div>
        <div className="font-bold">{value}</div>
      </CardBody>
    </Card>
  );
};

export default SocialCreditBadge;
