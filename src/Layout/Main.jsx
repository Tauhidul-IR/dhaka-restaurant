import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  };
  
  export default Main;







//   const Main = () => {
//     return (
//       <div>
//         <Outlet></Outlet>
//       </div>
//     );
//   };
  
//   export default Main;