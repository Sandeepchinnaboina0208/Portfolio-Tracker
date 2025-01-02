import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className="animate-spin text-blue-500" size={24} />
      <span className="ml-2 text-gray-600">Updating prices...</span>
    </div>
  );
}