// import {useState} from "react";
// import upPopstyle from "./upPopstyle.module.css";
// import Signup from "../Signup.jsx";

// const SignUpPopUp = (props) => {


//   return (props.trigger) ? (
//     <>
//       <div className={upPopstyle.popup}>
//         <div className={upPopstyle.popupinner}>
//           <div className={upPopstyle.closebtn} onClick={() => props.setCloseSignUp(false)}>
//             <img src="./close.png" alt="close" /></div>
//           <Signup />
//         </div>
//       </div>
//     </>
//   ) : null
// }
// export default SignUpPopUp;

import React, { useState } from "react";
import upPopstyle from "./upPopstyle.module.css";
import Signup from "../Signup.jsx";
import SignInPopUp from "./SignInPopUp.jsx";

const SignUpPopUp = (props) => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleClose = () => {
    props.setCloseSignUp(false);
  };

 

  return (
    <>
      {props.trigger && !showSignIn ? (
        <div className={upPopstyle.popup}>
          <div className={upPopstyle.popupinner}>
            <div className={upPopstyle.closebtn} onClick={handleClose}>
              <img src="./close.png" alt="close" />
            </div>
            <Signup />
          </div>
        </div>
      ) : null}
      {showSignIn && <SignInPopUp triggerin={showSignIn} setClose={setShowSignIn} />}
    </>
  );
};

export default SignUpPopUp;
