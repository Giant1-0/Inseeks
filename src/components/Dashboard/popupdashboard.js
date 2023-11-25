// PopupWindow.js

import React from 'react';

const PopupWindow = () => {
  return (
    <div className="popup-container">
      <div className="popup-content">

              <h4>Top 3 Performers...</h4>
              <table>
                <tr>
                  <td><img className="popup-img" src="/images/user-image.png" alt="" /></td>
                  <td><p>Ritik Dwivedi</p></td>
                  <td><p className="star">5</p></td>
                </tr>
                <tr>
                  <td><img className="popup-img" src="/images/user-image.png" alt="" /></td>
                  <td><p>Kamal</p></td>
                  <td><p className="star">4</p></td>
                </tr>
                <tr>
                  <td><img className="popup-img" src="/images/user-image.png" alt="" /></td>
                  <td><p>Nepolian</p></td>
                  <td><p className="star">2</p></td>
                </tr>
              </table>

      </div>
    </div>
  );
};

export default PopupWindow;