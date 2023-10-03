import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Page = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>

        <div className="grid md:grid-cols-4">
            <div className="col-span-3">
               <h2 className="text-5xl">News Detail</h2>
            </div>
            <div>
               <RightSideNav></RightSideNav>
            </div>
        </div>
    </div>
  );
};

export default Page;