import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

const images = [
  '/images/default-blue.png',
  '/images/default-red.png',
  '/images/default-slate.png',
  '/images/default-green.png'
]

interface UserCardProps {
  index: number;
  name: string;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const UserCard: React.FC<UserCardProps> = ({ index, name }) => {
  const imgSrc = images[index];

  return (
    <div className="group flex-row w-44 mx-auto">
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
          <img draggable={false} className="w-max h-max object-cover" src={imgSrc} alt="" />
        </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{name}</div>
   </div>
  );
}

const App = () => {
  const router = useRouter();

  const selectProfile = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-6xl text-white text-center">Who's watching?</h1>
        <div className="block space-y-8 md:space-y-0 md:flex gap-8 mt-10">
          {["Antonio", "John", "Mark", "Justin"].map((name, i)  => (
            <div key={name} onClick={() => selectProfile()}>
              <UserCard index={i} name={name} />
            </div>
          ))}
        </div>
        <div className="text-xl hover:cursor-pointer hover:border-white hover:text-white border-2 border-gray-400 w-max px-8 py-2 text-gray-400 mt-20 self-center">
          Manage Profiles
        </div>
      </div>
    </div>
  );
}

export default App;
