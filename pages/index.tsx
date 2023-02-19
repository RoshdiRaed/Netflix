import React, { useCallback, useState } from 'react';

import Navbar from '../components/navbar';
import Billboard from '../components/billboard';
import MovieList from '../components/movie-list';
import Modal from '../components/modal';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import useMovies from '@/hooks/useMovies';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home = () => {
  const { data = [] } = useMovies();

  const [showModal, setShowModal] = useState(false);
  const openModal = useCallback(() => setShowModal(true), []);

  return (
    <>
      <Modal visible={showModal} onClose={() => setShowModal(false)} />
      <Navbar />
      <Billboard openModal={openModal} />
      <MovieList data={data} openModal={openModal} />
    </>
  )
}

export default Home;
