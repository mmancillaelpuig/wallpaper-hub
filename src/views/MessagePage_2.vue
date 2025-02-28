<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <<div class="header">
        <ion-button class="message" fill="clear" router-link="/message">MESSAGE</ion-button>
        <h1>|</h1>
        <ion-button class="notifications" fill="clear" router-link="/message2">NOTIFICATIONS</ion-button>
      </div>
        
      <h1 class="title">YOUR NOTIFICATIONS</h1>

      <div class="message1">
        <h4>Today at 19:30</h4>
        <strong>@JuanAlberto22</strong>
        <p>has started following you!</p>
      </div>
      <div class="message2">
        <h4>Today at 19:45</h4>
        <strong>@Antony_234</strong>
        <p>has liked one of your wallpapers!</p>
      </div>
      <div class="message3">
        <h4>Today at 20:33</h4>
        <strong>@MikeCrack</strong>
        <p>has downloaded one of your wallpapers!</p>
      </div>
      <div class="message4">
        <h4>Today at 16:33</h4>
        <strong>@LacyPack</strong>
        <p>has started following you!</p>
      </div>
      <div class="message5">
        <h4>Today at 11:55</h4>
        <strong>@JuanAlberto22</strong>
        <p>has liked one of your wallpapers!</p>
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
};
</script>

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

.header {
  display: flex;
  align-items: center;
  padding: 10px 18px;
  position: absolute;
  top: 55px;
  width: 100%;
  justify-content: space-between;
}

.header h1{
  position: fixed;
  left: 190px;
  top: 8px;
  font-size: 60px;
  color: black;font-weight: lighter;
}

.message {
  position: fixed;
  left: 60px;
  font-family: 'Karantina';
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.message1{
  position: absolute;
  width: 291px;
  height: 64px;
  top: 220px;
  left: 55px;
  background: #EFECEC;
  border-radius: 15px;
}

.message1 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -10px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message1 strong{
  position: relative;
  width: 60px;
  height: 10px;
  left: 20px;
  top: -17px;
  font-family: 'Khand';
  color: #827878;;
  font-size: 13px;
}

.message1 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 103px;
  top: -50px;
  font-family: 'Khand';
  color: black;
  font-size: 13px;
}

.message2{
  position: absolute;
  width: 291px;
  height: 64px;
  top: 330px;
  left: 55px;
  background: #EFECEC;
  border-radius: 15px;
}

.message2 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -10px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message2 strong{
  position: relative;
  width: 60px;
  height: 10px;
  left: 20px;
  top: -17px;
  font-family: 'Khand';
  color: #827878;;
  font-size: 13px;
}

.message2 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 103px;
  top: -50px;
  font-family: 'Khand';
  color: black;
  font-size: 13px;
}

.message3{
  position: absolute;
  width: 291px;
  height: 64px;
  top: 440px;
  left: 55px;
  background: #EFECEC;
  border-radius: 15px;
}

.message3 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -10px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message3 strong{
  position: relative;
  width: 60px;
  height: 10px;
  left: 20px;
  top: -17px;
  font-family: 'Khand';
  color: #827878;;
  font-size: 13px;
}

.message3 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 103px;
  top: -50px;
  font-family: 'Khand';
  color: black;
  font-size: 13px;
}

.message4{
  position: absolute;
  width: 291px;
  height: 64px;
  top: 560px;
  left: 55px;
  background: #EFECEC;
  border-radius: 15px;
}

.message4 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -10px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message4 strong{
  position: relative;
  width: 60px;
  height: 10px;
  left: 20px;
  top: -17px;
  font-family: 'Khand';
  color: #827878;;
  font-size: 13px;
}

.message4 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 103px;
  top: -50px;
  font-family: 'Khand';
  color: black;
  font-size: 13px;
}

.message5{
  position: absolute;
  width: 291px;
  height: 64px;
  top: 680px;
  left: 55px;
  background: #EFECEC;
  border-radius: 15px;
}

.message5 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -10px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message5 strong{
  position: relative;
  width: 60px;
  height: 10px;
  left: 20px;
  top: -17px;
  font-family: 'Khand';
  color: #827878;;
  font-size: 13px;
}

.message5 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 103px;
  top: -50px;
  font-family: 'Khand';
  color: black;
  font-size: 13px;
}


.title{
  position: fixed;
  top: 155px;
  left: 152px;
  color: #000;
  font-family:'Khand';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}


.notifications {
  position: fixed;
  right: 60px;
  height: 30px;
  width: 130px;
  font-family: 'Karantina';
  font-size: 24px;
  font-weight: bold;
  color: black;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

.bottomnav {
  position: absolute;
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
