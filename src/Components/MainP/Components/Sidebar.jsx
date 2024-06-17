import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import Popup from './Popup';

const Sidebar = () => {
  return (
    <>
    <div className='sidebar'>
      <FontAwesomeIcon className="icon" icon={faPlus} style={{ fontSize: "24px", color: "#84c298", border: "2px solid #ccc", padding: "10px", borderRadius: "50%", cursor: "pointer" }} />
      <FontAwesomeIcon className="icon" icon={faGear} style={{ fontSize: "24px", color: "#84c298", border: "2px solid #ccc", padding: "10px", borderRadius: "50%", cursor: "pointer" }} />
      <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} style={{ fontSize: "24px", color: "#84c298", border: "2px solid #ccc", padding: "10px", borderRadius: "50%", cursor: "pointer", marginTop: "auto" }} />
    </div>
    <Popup />
    </>
  );
};

export default Sidebar;
