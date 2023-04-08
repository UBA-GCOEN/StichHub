import React from 'react'
import LeftView from '../components/TailorDashboard/LeftView';
import TopDisplays from '../components/TailorDashboard/TopDisplays';
import gradient from '../assets/TailorDashboard/gradient_blue.png';
import MainDisplay from '../components/TailorDashboard/MainDisplay';

const TailorDashboard = () => {
  return (
    <div className="grid grid-rows-3 grid-col-5 grid-flow-col text-5xl w-[100vw] h-[100vh] text-center select-none bg-primary">
     <LeftView>

     </LeftView>
     <TopDisplays>

     </TopDisplays>
     <img src={gradient} className=" z-0 w-[1257px] h-[708px] left-0 absolute">

     </img>
     <MainDisplay>
     
     </MainDisplay>
      

    </div>
  )
}

export default TailorDashboard;