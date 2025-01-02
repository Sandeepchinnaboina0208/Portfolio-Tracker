import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
      <div className="flex items-center">
        <AlertCircle className="text-red-400 mr-2" size={20} />
        <p className="text-red-700">{message}</p>
      </div>
    </div>
  );
}