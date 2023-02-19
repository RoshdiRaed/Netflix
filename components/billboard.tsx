import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import PlayButton from './play-button';

interface BillboardProps {
  openModal: any
}

const Billboard: React.FC<BillboardProps> = ({ openModal }) => {
  return (
    <div className="relative h-[56.25vw]">
      <video poster="/images/poster.png" className="w-full h-[56.25vw] brightness-[60%] transition duration-500 absolute" autoPlay muted loop src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
      <div className="absolute top-[30%] md:top-[40%] ml-16">
        <p className="text-white text-3xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          Big Buck Bunny
        </p>
        <p className="text-white text-xs md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton />
          <button
            onClick={openModal}
            className="
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
            >
              <InformationCircleIcon className="w-4 md:w-7 mr-1" />
              More Info
          </button>
        </div>
      </div>
    </div>
  )
}
export default Billboard;
