<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="button-container">
        <ion-button class="back" fill="clear" router-link="/home">
          <img src="/flechaizq.png" alt="Back">
        </ion-button>
      </div>

      <h2 class="cart">CART</h2>
      <h3>YOUR PRODUCTS</h3>
      <h1>___________________________</h1>


      <div class="products">
        <img class="movil" src="/movil.png" alt="Movil">
        <img class="buyed" src="/cartphoto.png" alt="Buyed">
        <p>NBA Wallpaper made by</p>
        <strong>@nba342</strong>
        <h4>2.99$</h4>
      </div>


      <ion-button fill="clear" class="buybtn" router-link="/buy">BUY</ion-button>
    

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
import { IonModal } from '@ionic/vue';
import { IonContent, IonPage, IonButton } from '@ionic/vue';

const showCreationModal = ref(false);

const showFakeModal = ref(false);


const openFakeFileModal = () => {
  showFakeModal.value = true;
};

const openFilePicker = () => {
  console.log('Abrir selector de archivos');
};

const redirectToGallery = () => {
  console.log('Ir a galería de plantillas');
};</script>

<style scoped>

ion-content{
  --background: white;
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

.movil{
  position: relative;
  left: 17px;
  top: 8px;
}

.buybtn{
  position: absolute;
  left: 50px;
  top: 700px;
  width: 140px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid black;
  background: #908E8E;
  color: black;
  font-family: 'Khand';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
}

.buyed{
  position: relative;
  top: 0px;
  left: -52px;
  width: 40px;
  height: 85px;
}

.cart{
  top: 140px;
  left: 55px;
  position: absolute;
  font-size: 36px;
  font-family: 'Karantina';
  font-weight: 700;
  color: black;
  font-weight: bold;
}

.products{
  position: absolute;
  top: 275px;
  left: 45px;
  width: 320px;
  height: 120px;
  border-radius: 15px;
  background: #EFECEC;
}

.products p{
  position: absolute;
  left: 105px;
  top: 30px;
  color: black;
  font-family: 'Khand';
  font-style: normal;
  font-size: 13px;
  font-weight: 400;
}

.products strong{
  position: absolute;
  top: 43px;
  left: 220px;
  color: #847878;
  font-family: 'Khand';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
}

.products h4{
  position: absolute;
  left: 260px;
  top: 70px;
  width: 40px;
  height: 20px;
  color: black;
  font-family: 'Khand';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
}

h3{
  top: 195px;
  left: 55px;
  position: absolute;
  font-size: 20px;
  font-family: 'Karantina';
  font-weight: 400;
  color: black;
}

h1{
  position: absolute;
  color: black;
  top: 200px;
  left: 40px;
  width: 350px;
}


.button-container {
  position: relative;
  height: 100%;
}

.back {
  position: absolute;
  top: 54px;          
  left: 57px;         
  min-height: auto;
  min-width: auto;
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
