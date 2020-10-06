import React from 'react';

const dootAudio = new Audio("./assets/doot.mp3");

const Bio = () => {
  return (
    <section>
      <div class="avContainer paulAv" id="paulAv">
        <img src="./assets/meAvT.png" alt="Pixel-art illustration of myself" onMouseDown={()=>dootAudio.play()}/>
      </div>
      <div class="doot"></div>
    </section>
  )
}

export default Bio;