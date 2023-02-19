import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

const PlusButton = () => {
  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <PlusIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  )
}

export default PlusButton;
