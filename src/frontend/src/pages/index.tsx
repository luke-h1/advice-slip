import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

const Home: NextPage = () => {
  return <div>😉</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
export default Home;
