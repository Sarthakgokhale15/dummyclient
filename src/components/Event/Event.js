import React,{useEffect,useState} from 'react';
import Header from '../Header/Header'
import './Event.css'
import AlertModal from './AlertModal'
import EventCarousalBottom from './EventCarousalBottom.js'
// import EventFooter from './EventFooter';
import FAQ from '../FAQ/FAQ'

import Timer from '../Clock/Timer/Timer'
import About from './About';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
function Event() {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        setOpenModal(true);

    }, [])
    

    
  return (
    <div>

        <Header fixed={true}/>
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