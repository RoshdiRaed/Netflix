import React, { useCallback, useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import PlayButton from './play-button';
import PlusButton from './plus-button';

interface ModalProps {
  visible?: boolean;
  onClose: any;
}

const Modal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div className={`${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>

          <div className="relative">
            <video poster="/images/poster.png" autoPlay muted loop src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" className="w-full brightness-[60%]" alt="Hero" />
            <div onClick={handleClose} className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
              <XMarkIcon className="text-white w-6" />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                Big Buck Bunny
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId="" />
                <PlusButton />
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <div className="flex flex-row items-center gap-2 mb-8">
              <p className="text-green-400 font-semibold text-lg">
                New
              </p>
              <p className="text-white text-lg">
                2023
              </p>
              <div className="border-[1px] border-slate-300 p-1 text-[8px] lg:text-xs text-gray-300">
                13+
              </div>
              <p className="text-white text-lg">
                6 episodes
              </p>
              <div className="border-[1px] border-slate-300 p-1 text-[6px] lg:text-[8px] text-gray-300">
                HD
              </div>
            </div>
            <p className="text-white text-lg">
              Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Modal;
