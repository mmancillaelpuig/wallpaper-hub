<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
          <h2>DO YOU WANNA SAVE YOUR<br>WALLPAPER?</h2>
          <div class="modal-buttons">
            <ion-button router-link="/home" @click="showModal = false">YES</ion-button>
            <ion-button router-link="/home" @click="showModal = false">NO</ion-button>
            <ion-button router-link="/make" @click="showModal = false">CONTINUE EDITING</ion-button>
          </div>
        </div>
      </div>


      <div class="lienzo">
        
        <div class="buttons-container">
          <ion-button class="exit" fill="clear" router-link="/home">
            <img src="/X.png" alt="exit">
          </ion-button>
          
          <ion-button class="back" fill="clear" router-link="">
            <img src="/flechaizq.png" alt="Back">
          </ion-button>

          <ion-button class="continue" fill="clear" @click="showModal = true">
            <img src="/flechader.png" alt="Continue">
          </ion-button>
          
        </div>
      </div>


      <div class="tools">

        <ion-button fill="clear" class="draw">
          <img src="/draw.png" alt="draw">
        </ion-button>

        <ion-button fill="clear" class="write">
          <img src="/write.png" alt="write">
        </ion-button>

        <ion-button fill="clear" class="basura">
          <img src="/basura.png" alt="basura">
        </ion-button>

        <ion-button fill="clear" class="foto">
          <img src="/foto.png" alt="foto">
        </ion-button>

        <ion-button fill="clear" class="camera">
          <img src="/camera.png" alt="camera">
        </ion-button>
      </div>
      


    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonPage, IonButton } from '@ionic/vue';

const showModal = ref(false);
</script>

<style scoped>
ion-content {
  --background: #908E8E;
  position: relative;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.modal-content h2 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.modal-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.modal-buttons ion-button {
  --background: #908E8E;
  --color: white;
  --border-radius: 8px;
  flex: 1;
}

.tools{
  position: absolute;
  bottom: 30px;
  left: 45px;
  width: 100%;
  height: 60px;
}


.continue {
  position: absolute;
  top: 14px;          
  left: 297px;         
  min-height: auto;
  min-width: auto;
}


.exit {
  position: absolute;
  top: 14px;          
  left: 17px;         
  min-height: auto;
  min-width: auto;
}

.button-container {
  position: relative;
  height: 100%;
}

.back {
  position: absolute;
  top: 12px;          
  left: 67px; 
  width: 55px;        
  min-height: auto;
  min-width: auto;
}

.lienzo{
  position: absolute;
  top: 40px;
  left: 20px;
  width: 370px;
  height: 770px;
  background: #D9D9D9;
  border-radius: 15px;
}
</style>