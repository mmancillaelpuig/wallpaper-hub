<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header">
        <h1 class="titulo">WALLPAPER HUB</h1>
        <img class="logo" src="/icono.png" alt="Logo">
        <ion-button class="basket" fill="clear" router-link="/cart">
          <img src="/Basket.png" alt="Basket">
        </ion-button>
      </div>

      <ion-button class="title1" fill="clear" router-link="/sports">Sports</ion-button>
      <div class="sports">
        <img class="wall1" src="/ronal.png" alt="ronal">
        <img class="wall2" src="/pogba.png" alt="pogba">
        <img class="wall3" src="/cristiano.png" alt="cristiano">

        <img class="movil1" src="/movil.png" alt="Movil">
        <img class="movil2" src="/movil.png" alt="Movil">
        <img class="movil3" src="/movil.png" alt="Movil">
      </div>

      <h2 class="title2">VIDEOGAMES</h2>
      <div class="videogames">
        <img class="wall1" src="/mario.png" alt="mario">
        <img class="wall2" src="/astronauta.png" alt="astro">
        <img class="wall3" src="/among.png" alt="among">

        <img class="movil1" src="/movil.png" alt="Movil">
        <img class="movil2" src="/movil.png" alt="Movil">
        <img class="movil3" src="/movil.png" alt="Movil">
      </div>

      <h2 class="title3">CARS</h2>
      <div class="cars">
        <img class="wall1" src="/mp12.png" alt="mp12">
        <img class="wall2" src="/artura.png" alt="artura">
        <img class="wall3" src="/gt3.png" alt="gt3">

        <img class="movil1" src="/movil.png" alt="Movil">
        <img class="movil2" src="/movil.png" alt="Movil">
        <img class="movil3" src="/movil.png" alt="Movil">
      </div>

      <h2 class="title4">MOTORBIKES</h2>
      <div class="motorbikes">
        <img class="wall1" src="/moto1.png" alt="moto1">
        <img class="wall2" src="/moto2.png" alt="moto2">
        <img class="wall3" src="/moto3.png" alt="moto3">

        <img class="movil1" src="/movil.png" alt="Movil">
        <img class="movil2" src="/movil.png" alt="Movil">
        <img class="movil3" src="/movil.png" alt="Movil">
      </div>

      <h2 class="title5">FILMS</h2>
      <div class="films">
        <img class="wall1" src="/film1.png" alt="ultima1">
        <img class="wall2" src="/film2.png" alt="ultima2">
        <img class="wall3" src="/film3.png" alt="ultima3">
        
        <img class="movil1" src="/movil.png" alt="Movil">
        <img class="movil2" src="/movil.png" alt="Movil">
        <img class="movil3" src="/movil.png" alt="Movil">
      </div>
      
    
      <ion-modal 
        :is-open="showCreationModal"
        @didDismiss="showCreationModal = false"
        class="bottom-modal"
      >
        <div class="modal-content">
          <h2>START CREATING</h2>
         
          <ion-button 
            class="menu-btn"
            fill="clear"
            @click="openFakeFileModal"
          >
            <img src="/upload.png" alt="subir">
            <span>Upload your wallpaper</span>
          </ion-button>
          
          <ion-button 
            class="menu-btn"
            fill="clear"
            router-link="/make"
          >
            <img src="/file.png" alt="elegir">
            <span>Create your wallpaper</span>
          </ion-button>
        </div>
      </ion-modal>
      
     
      <ion-modal
        :is-open="showFakeModal"
        @didDismiss="showFakeModal = false"
        class="fake-modal"
      >
        <div class="fake-modal-content">
        
          <div class="fake-modal-header">
            <ion-button fill="clear" @click="showFakeModal = false" class="close-btn">
              X
            </ion-button>
          </div>

         
          <div class="upload-container">
          
            <img src="/uploadblanco.png" alt="Upload icon" class="upload-icon">
            <p>CLICK TO UPLOAD YOUR WALLPAPER</p>
          </div>
        </div>
      </ion-modal>
      

      <div class="bottomnav">
        <ion-button fill="clear" router-link="/home">
          <img src="/Vector.png" alt="Inicio">
        </ion-button>
        <ion-button fill="clear" router-link="/search">
          <img src="/buscar.png" alt="Buscar">
        </ion-button>
        <ion-button 
          fill="clear" 
          @click="showCreationModal = true"
        >
          <img src="/crear.png" alt="crear">
        </ion-button>
        <ion-button fill="clear" router-link="/message">
          <img src="/chat.png" alt="Chat">
        </ion-button>
        <ion-button fill="clear" router-link="/profile">
          <img src="/profile.png" alt="Perfil">
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonModal, IonContent, IonPage, IonButton } from '@ionic/vue';

const showCreationModal = ref(false);
const showFakeModal = ref(false);


const openFakeFileModal = () => {
  showFakeModal.value = true;
};

const redirectToGallery = () => {
  console.log('Ir a galería de plantillas');
};
</script>

<style scoped>
ion-content {
  --background: white;
  position: relative;
}

.bottom-modal {
  --height: 200px;
  --border-radius: 20px 20px 0 0;
  align-items: flex-end;
}

.modal-content {
  background: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 -4px 15px rgba(0,0,0,0.1);
}

.modal-content h2 {
  font-family: 'Karantina';
  font-size: 24px;
  color: black;
  margin: 0 0 20px 0;
}

.menu-btn {
  width: 100%;
  height: 60px;
  --background: #EFECEC;
  --border-radius: 15px;
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  padding: 0 15px;
}

.menu-btn img {
  width: 25px;
  height: 25px;
  margin-right: 15px;
}

.menu-btn span {
  font-family: 'Khand';
  font-size: 16px;
  color: black;
  text-transform: none;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px 25px;
  position: absolute;
  top: 55px;
  width: 100%;
  justify-content: space-between;
}

.title1 {
  position: absolute;
  left: 10px;
  top: 152px;
  color: #000;
  font-family: 'Kameron';
  font-size: 14px;
  font-weight: 400;
}

.title2 {
  position: absolute;
  left: 26px;
  top: 360px;
  color: #000;
  font-family: 'Kameron';
  font-size: 14px;
  font-weight: 400;
}

.title3 {
  position: absolute;
  left: 26px;
  top: 595px;
  color: #000;
  font-family: 'Kameron';
  font-size: 14px;
  font-weight: 400;
}

.title4 {
  position: absolute;
  left: 26px;
  top: 820px;
  color: #000;
  font-family: 'Kameron';
  font-size: 14px;
  font-weight: 400;
}

.title5 {
  position: absolute;
  left: 26px;
  top: 1080px;
  color: #000;
  font-family: 'Kameron';
  font-size: 14px;
  font-weight: 400;
}

.titulo {
  font-family: 'Karantina';
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.movil1 {
  position: absolute;
  left: 25px;
  top: 24px;   
}

.movil2 {
  position: absolute;
  left: 123px;
  top: 24px;   
}

.movil3 {
  position: absolute;
  left: 221px;
  top: 24px;   
}

.wall1 {
  position: absolute;
  left: 55px;
  top: 32px;   
  z-index: 2;
}

.wall2 {
  position: absolute;
  left: 153px;
  top: 32px;   
  z-index: 2;
}

.wall3 {
  position: absolute;
  left: 251px;
  top: 32px;   
  z-index: 2;
}

.sports {
  position: absolute;
  width: 342px;
  height: 148px;
  background: #EFECEC;
  border-radius: 10px;
  left: 23px;
  top: 195px;
  right: 28px;
}

.videogames {
  position: absolute;
  width: 342px;
  height: 148px;
  background: #EFECEC;
  border-radius: 10px;
  left: 23px;
  top: 401px;
  right: 28px;
}

.cars {
  position: absolute;
  width: 342px;
  height: 148px;
  background: #EFECEC;
  border-radius: 10px;
  left: 23px;
  top: 634px;
  right: 28px;
}

.motorbikes {
  position: absolute;
  width: 342px;
  height: 148px;
  background: #EFECEC;
  border-radius: 10px;
  left: 23px;
  top: 863px;
  right: 28px;
}

.films {
  position: absolute;
  width: 342px;
  height: 148px;
  background: #EFECEC;
  border-radius: 10px;
  left: 23px;
  top: 1118px;
  right: 28px;
}

.logo {
  position: absolute;
  left: 155px;
  top: 30px;
  height: 30px;
  width: 30px;
}

.basket {
  position: absolute;
  right: 28px;
  top: 30px;
  z-index: 10;     
}

.basket img {
  height: 24px;
  width: 24px;
  display: block;
}

.bottomnav {
  position: fixed;
  bottom: -1px;
  height: 71px;
  background: #908E8E;
  border-radius: 5px;
  border: 2px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 2;
}

.fake-modal {
  --height: 50%;
  --border-radius: 10px;
}

ion-modal.fake-modal::part(content) {
  margin: 0 20px;
  border-radius: 10px;
}


.fake-modal-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #8f8f8f;
  position: relative;
  padding: 20px;
}

.fake-modal-header {
  position: absolute;
  display: flex;
  justify-content: flex-end;
}

.fake-modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.close-btn {
  font-size: 25px;
  color: white;
}

.upload-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.upload-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 12px;
}

.upload-container p {
  font-family: 'Kameron';
  font-size: 14px;
  color: white;
  margin: 0;
  text-align: center;
}
</style>
