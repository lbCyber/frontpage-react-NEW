import React from 'react';

const NameTag = () => {
  return (
    <div className="headerMain">
      <div className="centerHeaderItems">
        {/* <div className="backgroundStyle"></div> */}
        <div className="myPicContainer">
          <img src="./assets/mePic-squareBW.png" alt="It's me, Paul. Hello!" />
        </div>
        <div className="headerText">
          <h2>Hi there!</h2>
          <h2>My name is</h2>
          <h1>Paul R.</h1>
        </div>
      </div>
      <h3>And I'm a coder // developer // designer</h3>
    </div>
  )
}

export default NameTag;