import { GetServerSidePropsContext } from 'next';

const index = () => {
  return (
    <div>
      <h1>Hello My Name Is Adi Munawar</h1>
      <h1></h1>
    </div>
  );
};

export default index;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();

  return {
    props: {
      services: data.services,
    },
  };
};
