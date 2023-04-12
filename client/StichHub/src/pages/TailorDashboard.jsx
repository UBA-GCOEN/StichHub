import React from 'react'
import LeftView from '../components/TailorDashboard/LeftView';
import TopDisplays from '../components/TailorDashboard/TopDisplays';
import Profile from '../components/TailorDashboard/Profile';
import NavBar from '../components/TailorDashboard/NaBar';

const TailorDashboard = () => {
  return (
    <div className='overflow-x-hidden'>
    <NavBar />
    <div className="flex justify-items-start text-5xl w-[100vw] mt-14 h-[100vh] text-center bg-primary">
     <LeftView>
     </LeftView>
     <TopDisplays>
     </TopDisplays>
    </div>
    </div>
  )
}

export default TailorDashboard;