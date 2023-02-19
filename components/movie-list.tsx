import React from 'react';

import MovieItem from '../components/movie-item';

interface MovieListProps {
  openModal: any;
}

const MovieList: React.FC<MovieListProps> = ({ openModal }) => {
  return (
    <div className="px-12 mt-4 space-y-8 pb-32">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">Continue watching for Antonio</p>
        <div className="grid grid-cols-4 gap-2">
          <MovieItem openModal={openModal} img="/images/thumbnail.jpg" />
        </div>
      </div>
    </div>
  );
}

export default MovieList;
