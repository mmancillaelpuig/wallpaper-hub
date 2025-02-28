<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="button-container">
        <ion-button class="back" fill="clear" router-link="/login">
          <img src="/flechaizq.png" alt="Back">
        </ion-button>
      </div>
     
      
      <h1>SIGN UP</h1>

      <h3 class="username">Username</h3>
      <input type="text" class="name" placeholder="Type your name">
      <img src="/profile.png" alt="profile" class="profile">

      <h2 class="linea1">______________________________________</h2>
      
      <h3 class="password">Password</h3>
      <input type="text" class="pass" placeholder="Type your password">
      <img src="/lock.png" alt="lock" class="lock">

      <h2 class="linea2">_______________________________________</h2>

      <h3 class="email">Email</h3>
      <input type="text" class="ema" placeholder="Type your email">
      <img src="/emailimg.png" alt="email" class="emailimg">

      <h2 class="linea3">_______________________________________</h2>

      <h3 class="birth">Birth</h3>
      <input type="text" class="bir" placeholder="Day/Month/Year">
      <img src="/birthimg.png" alt="birth" class="birthimg">

      <h2 class="linea4">_______________________________________</h2>

  

      <ion-button fill="clear" class="signup" router-link="/home">SIGN UP</ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
</script>

<style scoped>
ion-content {
  --background: white;
  position: relative;
}

.button-container {
  position: relative;
  height: 100%;
}

.back {
  position: absolute;
  top: 34px;          
  left: 20px;         
  min-height: auto;
  min-width: auto;
}


.linea1{
  position: absolute;
  top: 230px;
  left: 35px;
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.linea2{
  position: absolute;
  top: 380px;
  left: 35px;
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.linea3{
  position: absolute;
  top: 520px;
  left: 35px;
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.linea4{
  position: absolute;
  top: 650px;
  left: 35px;
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.birthimg{
  position: absolute;
  left: 40px;
  top: 650px;
  width: 20px;
  height: 20px;
}

.birth{
  position: absolute;
  left: 50px;
  top: 580px;
  color: black;
  font-size: 20px;
  font-family: 'Kameron';
  font-weight: 400;
}

.bir{
  position: absolute;
  left: 90px;
  top: 650px;
  color: black;
  background: transparent;
  font-family: 'Kameron';
  font-size: 13px;
  font-weight: 400;
  border: transparent;
}

.emailimg{
  position: absolute;
  left: 40px;
  top: 520px;
  width: 20px;
  height: 20px;
}

.email{
  position: absolute;
  left: 50px;
  top: 445px;
  color: black;
  font-size: 20px;
  font-family: 'Kameron';
  font-weight: 400;
}

.ema{
  position: absolute;
  left: 90px;
  top: 520px;
  color: black;
  background: transparent;
  font-family: 'Kameron';
  font-size: 13px;
  font-weight: 400;
  border: transparent;
}

.profile{
  position: absolute;
  left: 40px;
  top: 230px;
  width: 20px;
  height: 20px;
}

.username{
  position: absolute;
  left: 50px;
  top: 165px;
  color: black;
  font-size: 20px;
  font-family: 'Kameron';
  font-weight: 400;
}

.name{
  position: absolute;
  left: 90px;
  top: 230px;
  color: black;
  background: transparent;
  font-family: 'Kameron';
  font-size: 13px;
  font-weight: 400;
  border: transparent;
}

.lock{
  position: absolute;
  left: 40px;
  top: 380px;
  width: 20px;
  height: 20px;
}

.password{
  position: absolute;
  left: 50px;
  top: 310px;
  color: black;
  font-size: 20px;
  font-family: 'Kameron';
  font-weight: 400;
}

.pass{
  position: absolute;
  left: 90px;
  top: 380px;
  color: black;
  background: transparent;
  font-family: 'Kameron';
  font-size: 13px;
  font-weight: 400;
  border: transparent;
}

h1{
  position: absolute;
  top: 40px;
  left: 150px;
  width: 250px;
  height: 100px;
  color: black;
  font-family: 'Karantina';
  font-size: 48px;
  font-weight: 700;
}



.signup{
  position: absolute;
  left: 90px;
  top: 760px;
  width: 211px;
  height: 60px;
  border-radius: 50px;
  border: 3px solid black;
  background: #908E8E;
  color: black;
  font-family: 'Khand';
  font-size: 24px;
  font-weight: 700;
}


</style>