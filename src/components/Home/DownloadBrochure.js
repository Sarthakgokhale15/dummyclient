import React from 'react';
import './DownloadBrochure.css'
import { useNavigate } from 'react-router-dom';
const DownloadBrochure = () => {
  const navigate=useNavigate();
  return (
    <div className="download-brochure">
      <button onClick={()=>navigate("/PartnerWithUs")} className="download-brochure-btn">Intrested In Partnering with us</button>
    </div>
  );
};

export default DownloadBrochure;
