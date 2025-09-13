import React from 'react';
import { Button, Card } from '@heroui/react';
import { Icon } from '@iconify/react';

interface QRCodeButtonProps {
  text: string;
  onPress?: () => void;
}

const QRCodeButton: React.FC<QRCodeButtonProps> = ({ text, onPress }) => {
  return (
    <Card className="bg-purple-light mb-2 shadow-none">
      <Button
        variant="flat"
        color="default"
        className="p-4 h-auto flex justify-between items-center"
        onPress={onPress}
      >
        <span className="text-left text-black">{text}</span>
        <div className="qr-code flex items-center justify-center">
          <Icon icon="lucide:qr-code" width={40} height={40} />
        </div>
      </Button>
    </Card>
  );
};

export default QRCodeButton;
