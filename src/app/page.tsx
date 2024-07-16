import Image from "next/image";
import Navbar from "./components/Navbar";
import CardsSection from "./components/CardsSection";
import Countries from "./components/Countries";
import Forms from "./components/Forms";
import VisaCategory from "./components/VisaCategory";
import ProcessOver from "./components/ProcessOver";
import MessageUs from "./components/MessageUs";
import Footer from "./components/Footer";
import bg from "../../Provided Images/img (1).png";
import bg1 from "../../Provided Images/img (2).png";
import bg2 from "../../Provided Images/img (3).png";
import bg3 from "../../Provided Images/img (5).png";
import bg4 from "../../Provided Images/img (6).png";
import bg5 from "../../Provided Images/img (7).png";
import bg17 from "../../Provided Images/img (17).png";

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    
    <div className="ball"></div>
    <div className="ball left-[50vw] -top-[20vh]"></div>
    <div className="ball left-[70vw] top-[60vh]"></div>
    <img src={bg17.src} className="absolute h-[20vh]" alt="" />
    <img src={bg17.src} className="absolute top-[60vh] rotate-180 left-[60vw] h-[20vh]" alt="" />
    
    <div  style={{
      backgroundImage:`url("")`
    }} className="px-10 middle-section   w-full h-[80vh]  flex items-center justify-evenly   mb-4 gap-8" >
      
    {/* <h1 className="text-md font-bold text-blue-500">Relax Travel</h1> */}
  
<div>

      <div className="backdrop-blur-md text-5xl flex flex-col gap-4 relative z-50  tracking-widest text-blue-500  rounded-lg font-bold text uppercase line-clamp-3">Visa immigration 
        For
        
        </div>
        <div className="backdrop-blur-md text-5xl flex flex-col mt-5 gap-4 relative z-50  tracking-widest text-blue-500  rounded-lg font-bold text uppercase line-clamp-3">
        
        brighter future</div>
</div>
<button className='bg-black absolute top-[65vh] right-[70vw] text-lg uppercase text-white p-5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg  font-bold'>Our Charters</button>
        <div className="flex ">
          

      <img className="h-56 z-50 rounded-2xl relative top-7 hover:scale-110 duration-300" src={bg.src} alt="" />
      <img className="h-56 z-50- rounded-2xl relative right-12 hover:scale-110 duration-300" src={bg1.src} alt="" />
        </div>
      <div className="2nd-image-div">

      </div>
      {/* <img className="h-56 w-40 rounded-2xl relative left-30  top-16" src={bg3.src} alt="" />
      <img className="h-56 w-36 rounded-2xl relative  right-72 bottom-10" src={bg4.src} alt="" /> */}
     
    </div>
    <div className="my-cards mt-5">
      <CardsSection></CardsSection>
      <Countries>

      </Countries>
      <div className="form-div w-full rounded-lg gap-5  flex justify-center flex-col items-center pt-7">
      <Forms></Forms>
      </div>
      <div className="visas w-full flex justify-center items-center mt-9 flex-col">

      <h1 className="text-3xl uppercase font-semibold tracking-wider">Visa Category</h1>
      <VisaCategory>

      </VisaCategory>
      </div>
      <ProcessOver></ProcessOver>
      <MessageUs>

      </MessageUs>
      <Footer></Footer>
    </div>
    </>
  );
}
