import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Layout from '../components/shared/layout/Layout';
import { Task } from '../lib/models/task/task';
import Listing from '../components/listing/Listing';
import Header from '../components/header/Header';
import { ParsedUrlQuery } from 'querystring';
import { useUserState } from './_context/User.context';

interface HomeProps {
  tasks: Task[];
}

const Home: NextPage<HomeProps> = ({ tasks }) => (
  <Layout title="Home page">
    <Header />
    <Listing tasks={tasks} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch(`${process.env.API_URL}/tasks`);
  const tasks: Task[] = await res.json();
  return {
    props: {
      tasks: tasks ? tasks : [],
    },
  };
};

export default Home;
