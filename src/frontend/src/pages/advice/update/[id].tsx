import { Box, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { InputField } from '../../../components/InputField';
import adviceService, {
  Advice as TAdvice,
} from '../../../services/adviceService';

interface Props {
  advice: TAdvice;
}

const UpdateAdvicePage = ({ advice }: Props) => {
  const router = useRouter();
  return (
    <Box mt={10}>
      <Formik
        initialValues={{ title: advice.title, content: advice.content }}
        onSubmit={async values => {
          const { title, content } = values;
          const res = await adviceService.updateAdvice(
            advice.id,
            title,
            content,
          );
          console.log(res);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              type="text"
              name="title"
              placeholder="title"
              label="title"
            />
            <InputField
              type="text"
              name="content"
              placeholder="content"
              label="content"
            />
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              onClick={() => {
                router.push('/');
              }}
            >
              update advice
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
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

export default UpdateAdvicePage;
