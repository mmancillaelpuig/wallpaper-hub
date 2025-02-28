<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h1>WALLPAPER HUB</h1>
      <img src="/icono.png" alt="icono">
      <ion-button fill="clear" router-link="/login">SEARCH NOW</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import anime from 'animejs';
import { IonContent, IonPage, IonButton } from '@ionic/vue';


onMounted(() => {
  anime.timeline({ easing: 'easeOutExpo', duration: 1000 })
    .add({
      targets: 'h1',
      opacity: [0, 1],
    })
    .add({
      targets: 'img',
      opacity: [0, 1],
    }, '+=500')
    .add({
      targets: 'ion-button',
      opacity: [0, 1],
    }, '+=500');
});
</script>

<style scoped>
ion-content {
  --background: white;
  position: relative;
}

h1 {
  position: absolute;
  top: 180px;
  left: 80px;
  width: 250px;
  height: 100px;
  color: black;
  font-family: 'Karantina';
  font-size: 48px;
  font-weight: 700;
  opacity: 0;
}

img {
  position: absolute;
  width: 212px;
  height: 212px;
  left: 90px;
  top: 320px;
  opacity: 0;
}

ion-button {
  position: absolute;
  left: 90px;
  top: 720px;
  width: 211px;
  height: 60px;
  border-radius: 50px;
  border: 3px solid black;
  background: #908E8E;
  color: black;
  font-family: 'Khand';
  font-size: 24px;
  font-weight: 700;
  opacity: 0;
}
</style>
