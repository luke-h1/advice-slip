import { GetServerSideProps } from 'next';
import adviceService, {
  Advice as TAdvice,
} from '../../../services/adviceService';

interface Props {
  advice: TAdvice;
}

const UpdateAdvicePage = ({ advice }: Props) => {
  return <div>{JSON.stringify(advice, null, 2)}</div>;
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

export default UpdateAdvicePage;
