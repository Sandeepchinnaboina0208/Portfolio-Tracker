import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-1 rounded-full text-blue-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
    >
      {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </button>
  );
}