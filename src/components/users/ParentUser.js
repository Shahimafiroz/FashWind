import React from "react";
import Fashwind from "../../Assets/FashwindNew.png";

function ParentUser() {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <div>
          <img
            style={{
              height: "650px",
              padding: "15px",
              width: "1000px",
              paddingTop: "15px",
            }}
            src={Fashwind}
          ></img>
        </div>
        <div style={{ padding: "50px", backgroundColor: "#ede0d0" }}>
          <div style={{}}>
            <h1>Shahima </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentUser;
