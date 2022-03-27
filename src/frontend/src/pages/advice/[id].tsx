import { GetServerSideProps } from 'next';
import adviceService, { Advice as TAdvice } from '../../services/adviceService';

interface Props {
  advice: TAdvice;
}

const AdvicePage = ({ advice }: Props) => {
  return (
    <div>
      <h1>{JSON.stringify(advice, null, 2)}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  if (!ctx?.params?.id) {
    return {
      props: {},
    };
  }

  const res = await adviceService.getAdvice(
    parseInt(ctx.params.id as string, 10),
  );
  return {
    props: {
      advice: res,
    },
  };
};

export default AdvicePage;
