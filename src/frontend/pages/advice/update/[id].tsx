import { GetServerSideProps } from 'next';
import { getServerSideProps } from '../[id]';

const UpdateAdvicePage = () => {
  return <div>Update !</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default UpdateAdvicePage;
