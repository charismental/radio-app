<template>
  <div class="donate">
    <div class="donate-header">
      <div class="divider"><hr></div>
      <span class="donate-title">Donate</span>
      <div class="divider"><hr></div>
      <div class="donate-body">
        <p>GraceWay Radio is a one-of-a-kind station that is dedicated to the transmission of true worship and Spirit-inspired messages that will foster real spiritual growth in listeners. We are completely non-profit, and do not air advertisements--our station is completely faith-based and listener-supported.</p>
        <p>Thank you for your interest in supporting our mission, please check in again at a later time to see other donation options.</p>
      </div>
    </div>
  </div>
</template>

<style>
.donate {
  position: absolute;
  display: flex;
  text-align: center;
  top: 151px;
  width: 100vw;
}
.donate-header {
  width: inherit;
  position: fixed;
}
.donate-title {
  font-weight: 500;
  font-size: 32px;
}
.donate hr  {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
.donate-body {
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
  .donate-header {
    width: 320px;
  }
  .donate-body {
    width: 290px;
  }
} */
@media only screen and (min-width: 768px) {
  .donate {
    width: 480px;
  }
}
</style>
