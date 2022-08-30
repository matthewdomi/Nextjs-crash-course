import React from 'react';
import headerStyles from "../styles/Header.module.css";


const Header = () => {

    // const x = 56
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Demak</span> Ventures
      </h1>
      <p className={headerStyles.description}>Your Satisfaction our Concern</p>




      {/* <style jsx>
        {`
        .title{
            color: ${x > 3 ? 'red' : "blue"};
        }
        `} */}
     {/* </style> */}



    </div>
  )
}

export default Header
