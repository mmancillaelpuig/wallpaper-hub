<template>
  <ion-page>
    <ion-content :fullscreen="true">
      
      <h1>LOGIN NOW</h1>

      <h3 class="username">Username</h3>
      <input type="text" class="name" placeholder="Type your name">
      <img src="/profile.png" alt="profile" class="profile">

      <h2 class="linea1">______________________________________</h2>
      
      <h3 class="password">Password</h3>
      <input type="text" class="pass" placeholder="Type your password">
      <img src="/lock.png" alt="lock" class="lock">

      <h2 class="linea2">_______________________________________</h2>

      <ion-button fill="clear" class="login" router-link="/home">LOGIN</ion-button>
      <ion-button fill="clear" class="signup" router-link="/signup">Signup here</ion-button>

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

.signup{
  position: absolute;
  left: 135px;
  top: 640px;
  color: black;
  font-family: 'Kameron';
  font-size: 13px;
  font-weight: 400;
}

.linea1{
  position: absolute;
  top: 330px;
  left: 35px;
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.linea2{
  position: absolute;
  top: 480px;
  left: 35px;
  color: black;
  font-weight: bold;
  font-size: 20px;
}

.profile{
  position: absolute;
  left: 40px;
  top: 330px;
  width: 20px;
  height: 20px;
}

.username{
  position: absolute;
  left: 50px;
  top: 265px;
  color: black;
  font-size: 20px;
  font-family: 'Kameron';
  font-weight: 400;
}

.name{
  position: absolute;
  left: 90px;
  top: 330px;
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
  top: 480px;
  width: 20px;
  height: 20px;
}

.password{
  position: absolute;
  left: 50px;
  top: 410px;
  color: black;
  font-size: 20px;
  font-family: 'Kameron';
  font-weight: 400;
}

.pass{
  position: absolute;
  left: 90px;
  top: 480px;
  color: black;
  background: transparent;
  font-family: 'Kameron';
  font-size: 13px;
  font-weight: 400;
  border: transparent;
}

h1{
  position: absolute;
  top: 145px;
  left: 120px;
  width: 250px;
  height: 100px;
  color: black;
  font-family: 'Karantina';
  font-size: 48px;
  font-weight: 700;
}

img{
  position: absolute;
  width: 212px;
  height: 212px;
  left: 90px;
  top: 320px;
}

.login{
  position: absolute;
  left: 90px;
  top: 560px;
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