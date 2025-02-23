// src/components/ui/Card.tsx
import React from 'react';

const Card: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white shadow rounded-lg">
      {children}
    </div>
  );
};

export default Card;
