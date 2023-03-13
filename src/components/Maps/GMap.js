import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import  './Gmap.css'
import EventImageCarousal from '../Event/EventImageCarousal';
function GMap() {
  return (
    
    <div className="map" style={{width:'100vw'}}>
      <iframe style={{height:"70vh",width:"70vw",paddingBottom:"25vh"}} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=736&amp;height=538&amp;hl=en&amp;q=Phoenix%20Marketcity,%20Mumbai%20Mumbai+(Phoenix%20Marketcity,%20Mumbai)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      
    </div>
  
  )
}

export default GMap