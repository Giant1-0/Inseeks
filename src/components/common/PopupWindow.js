// PopupWindow.js

import React from 'react';
import './PopupWindow.css';

const PopupWindow = ({ onClose, children }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">

        {children}
              <h4>Top 3 Performers...</h4>
              <table>
                <tr>
                  <td><img className="popup-img" src="\images\my.jpg" alt="" /></td>
                  <td><p>Ritik Dwivedi</p></td>
                  <td><p className="star">5</p></td>
                </tr>
                <tr>
                  <td><img className="popup-img" src="\images\kamal.jpg" alt="" /></td>
                  <td><p>Kamallochan</p></td>
                  <td><p className="star">4</p></td>
                </tr>
                <tr>
                  <td><img className="popup-img" src="\images\nepo.jpg" alt="" /></td>
                  <td><p>Nepolian</p></td>
                  <td><p className="star">2</p></td>
                </tr>
              </table>

{/*         
              <ul>
                <li>
                  <img className="popup-img" src="\images\my.jpg" alt="" /><p>Ritik Dwivedi</p>
                  <img className="popup-img" src="\images\my.jpg" alt="" /><p>Ritik Dwivedi</p>
                </li>
              </ul>  */}

        

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupWindow;
