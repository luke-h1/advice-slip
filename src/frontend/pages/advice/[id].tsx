import { GetServerSideProps } from 'next';

const AdvicePage = () => {
  return (
    <div>
      <h1>Advice</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default AdvicePage;
