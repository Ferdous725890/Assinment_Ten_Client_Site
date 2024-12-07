import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CarouselSlider from "../Component/Navbar/Test";
import CenterMode from "../Component/Navbar/testone";
// import CarouselSlider from "../Component/Navbar/Test";
// import HighestGame from "../Component/Navbar/HighestGame";
// import CenterMode from "../Component/Navbar/Test";



const Home = () => {
  return (
    <div>
      <header className="container mx-auto w-11/12">
        <Navbar></Navbar>
        {/* <CarouselSlider></CarouselSlider> */}

        <CenterMode></CenterMode>
      </header >
      <main className="">
        <Outlet></Outlet>
        {/* <CarouselSlider></CarouselSlider> */}
        {/* <CenterMod></CenterMode> */}
        {/* <CenterMode></CenterMode> */}
    
      </main>

      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
