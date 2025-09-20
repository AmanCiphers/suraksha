'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const MyButton = ({ name }) => {
  return (
    <button className="flex items-center cursor-pointer gap-2 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-2xl border-2 border-white bg-transparent text-white text-sm sm:text-base md:text-lg font-semibold transition-transform  hover:scale-105 hover:bg-indigo-600 active:scale-95 focus:outline-none">
      <span>{name}</span>
      
    </button>
  );
};

export default MyButton;
