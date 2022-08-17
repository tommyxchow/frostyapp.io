import Layout from '../components/Layout';

const Custom404 = () => {
  return (
    <Layout title='404' description='Page not found'>
      <div className='flex min-h-screen w-full items-center justify-center text-neutral-400'>
        404 | Page not found
      </div>
    </Layout>
  );
};

export default Custom404;
