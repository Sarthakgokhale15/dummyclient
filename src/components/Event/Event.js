import React,{useEffect,useState} from 'react';
import Header from '../Header/Header'
import './Event.css'
import AlertModal from './AlertModal'
import EventCarousalBottom from './EventCarousalBottom.js'

import Timer from '../Clock/Timer/Timer'
import About from './About';
function Event() {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        setOpenModal(true);

    }, [])
    

    
  return (
    <div>

        <Header />
        <Timer />
        <div className='bgImgContainer'>
            <AlertModal 
                open={openModal} 
                onClose={() => setOpenModal(false)} 
            />
            <About />
        </div>
        <EventCarousalBottom />
        
    </div>
  )
}

export default Event