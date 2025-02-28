<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="button-container">
        <ion-button class="back" fill="clear" router-link="/sportswallpaper">
          <img src="/back2.png" alt="Back">
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
</script>

<style scoped>
ion-content {
  --background: url(/buyedgrande.png) no-repeat center center / cover;
  position: relative;
}

.button-container {
  position: relative;
  height: 100%;
}

.back {
  position: absolute;
  top: 20px;          
  left: 10px;         
  min-height: auto;
  min-width: auto;
}
</style>