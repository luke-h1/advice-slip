import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import AdviceCard from '../components/AdviceCard';
import adviceService, { Advice } from '../services/adviceService';

interface Props {
  advices: Advice[];
}

const Home = ({ advices }: Props) => {
  return (
    <Box>
      {advices &&
        advices.map(advice => <AdviceCard advice={advice} key={advice.id} />)}
    </Box>
  );
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
