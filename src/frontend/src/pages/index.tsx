import { GetServerSideProps } from 'next';
import adviceService, { Advice } from '../services/adviceService';

interface Props {
  advices: Advice[];
}

const Home = ({ advices }: Props) => {
  return <div>{JSON.stringify(advices, null, 2)}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await adviceService.getAllAdvices();
  return {
    props: {
      advices: res,
    },
  };
};
export default Home;
