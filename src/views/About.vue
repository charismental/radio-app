<template>
  <div class="about">
    <div class="about-header">
      <div class="divider"><hr></div>
      <span class="about-title">About Us</span>
      <div class="divider"><hr></div>
      <div class="about-body">
        <p>Radio of the Master's Voice is a one-of-a-kind station that is dedicated to the transmission of true worship and Spirit-inspired messages that will foster real spiritual growth in listeners. We are completely non-profit, and do not air advertisements--our station is completely faith-based and listener-supported.</p>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  position: absolute;
  display: flex;
  text-align: center;
  top: 181px;
  width: 100vw;
}
.about-header {
  width: inherit;
  position: fixed;
}
.about-title {
  font-weight: 500;
  font-size: 32px;
}
.about hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.about-body {
  overflow: auto;
  max-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
}
/* @media only screen and (max-width: 359px) and (min-width: 320px) {
  .about-header {
    width: 320px;
  }
  .about-body {
    width: 290px;
  }
} */
</style>
