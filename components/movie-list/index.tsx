import React from 'react';

import { MovieInterface } from '@/types';
import MovieCard from './card';

interface MovieListProps {
  openModal: any;
  data: MovieInterface[];
}

const MovieList: React.FC<MovieListProps> = ({ openModal, data }) => {
  return (
    <div className="px-12 mt-4 space-y-8 pb-32">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Continue watching for Antonio</p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} openModal={openModal} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
