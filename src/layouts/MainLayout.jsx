// import { Outlet } from 'react-router-dom'
// import Navbar from "../components/Navbar"
// import AnimatedFooter from '../components/AnimatedFooter'
// import { useSelectedSkip } from '../context/SelectedSkipContext';

// const MainLayout = () => {
//   const { selectedSkip } = useSelectedSkip();
//   return (
//     <>
//         <Navbar />
//         <Outlet />
//         <AnimatedFooter
//           skip={selectedSkip}
//           show={!!selectedSkip}
//           text={"You have selected a skip."}
//         />
//     </>
//   )
// }


import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnimatedFooter from '../components/AnimatedFooter';
import { useSelectedSkip } from '../context/SelectedSkipContext';

const MainLayout = () => {
  const { selectedSkip } = useSelectedSkip();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main content with bottom padding to prevent overlap */}
      <main className="flex-grow px-0 pb-20">
        <Outlet />
      </main>

      {/* Footer rendered after main */}
      <AnimatedFooter
        skip={selectedSkip}
        show={!!selectedSkip}
        text="You have selected a skip."
      />
    </div>
  );
};

export default MainLayout