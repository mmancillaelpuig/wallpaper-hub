<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="button-container">
        <ion-button class="back" fill="clear" router-link="/profile">
          <img src="/flechaizq.png" alt="Back">
        </ion-button>
      </div>

      <ion-button class="profile" fill="clear">
        <img :src="profileImage" alt="Profile">
      </ion-button>

      <ion-button fill="clear" class="changephoto" @click="showChangePhotoModal = true">
        Click to change photo
      </ion-button>

      <h2 class="profilename">MARKILLER</h2>
      <input type="text" placeholder="Click to change your username" class="changename">
      <h2 class="biography">ADD BIOGRAPHY</h2>
      <input type="text" placeholder="Click to add biography" class="changebio">



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



      <ion-modal 
        :is-open="showChangePhotoModal"
        @didDismiss="showChangePhotoModal = false"
        class="change-photo-modal"
      >
        <div class="change-photo-modal-content">
          <h2>Change Profile Photo</h2>
          <ion-button 
            class="menu-btn"
            fill="clear"
            @click="eliminatePhoto"
          >
            <span>Eliminate Photo</span>
          </ion-button>
          <ion-button 
            class="menu-btn"
            fill="clear"
            @click="showProfileUploadModal = true"
          >
            <span>Change Photo</span>
          </ion-button>
        </div>
      </ion-modal>

      <ion-modal
        :is-open="showProfileUploadModal"
        @didDismiss="showProfileUploadModal = false"
        class="fake-modal"
      >
        <div class="fake-modal-content">
          <div class="fake-modal-header">
            <ion-button fill="clear" @click="showProfileUploadModal = false" class="close-btn">
              <span style="color: white !important">X</span>
            </ion-button>
          </div>
          <div class="upload-container">
            <img src="/uploadblanco.png" alt="Upload icon" class="upload-icon-adjusted">
            <p>CLICK TO UPLOAD YOUR PROFILE PHOTO</p>
          </div>
        </div>
      </ion-modal>

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
const showChangePhotoModal = ref(false);
const showProfileUploadModal = ref(false);
const profileImage = ref('/perfil.jpg')

const eliminatePhoto = () => {
  profileImage.value = '/profile.png';
  showChangePhotoModal.value = false;
};

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

.change-photo-modal {
  --height: auto;
  --border-radius: 10px 10px 0 0;
}

ion-modal.change-photo-modal::part(content) {
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px 10px 0 0;
}

.change-photo-modal-content {
  padding: 20px;
  background: white;
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

.upload-icon-adjusted {
  margin: 20px 0 12px 0 !important; /* Ajusta el margen superior */
}

.upload-container p {
  font-family: 'Kameron';
  font-size: 14px;
  color: white;
  margin: 0;
  text-align: center;
}

.profile {
  position: absolute;
  top: 161px;
  left: 135px;
  width: 130px;
  height: 130px;
  --padding-start: 0;
  --padding-end: 0;
}

.profile img {
  border-radius: 100px;
  width: 130px;
  height: 130px;
  background: #EFECEC;
  object-fit: cover;
}

.profilename{
  top: 380px;
  left: 50px;
  position: absolute;
  font-size: 24px;
  font-family: 'Karantina';
  color: black;
  font-weight: bold;
}

.biography{
  top: 495px;
  left: 50px;
  position: absolute;
  font-size: 24px;
  font-family: 'Karantina';
  color: black;
  font-weight: bold;
}

.changephoto{
  position: absolute;
  top: 305px;
  left: 150px;
  width: 100px;
  height: 40px;
  color: black;
  font-family: 'Khand';
  font-size: 11px;
  font-weight: 500;
}

.changename{
  position: absolute;
  top: 430px;
  left: 50px;
  width: 150px;
  height: 30px;
  color: black;
  font-family: 'Khand';
  font-size: 11px;
  font-weight: 500;
  background: transparent;
  border: transparent;
}

.changebio{
  position: absolute;
  top: 545px;
  left: 50px;
  width: 100px;
  height: 30px;
  color: black;
  font-family: 'Khand';
  font-size: 11px;
  font-weight: 500;
  border: transparent;
  background: transparent;
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


</style>
