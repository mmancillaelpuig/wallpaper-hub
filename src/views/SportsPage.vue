<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="header">
        <ion-button fill="clear" class="titulo">SPORTS</ion-button>

        <div class="search-container">
          <ion-button
            class="search"
            fill="clear"
            @click="toggleSearch"
            :class="{ 'search-move': isSearching }"
          >
            SEARCH
          </ion-button>
          <input
            v-if="isSearching"
            type="text"
            class="search-input"
            placeholder="🔎"
          />
        </div>
      </div>

      <ion-button fill="clear" class="image1" router-link="sportswallpaper"></ion-button>

      <img src="/star.png" alt="star" class="star">

      <div class="image2"></div>
      <div class="image3"></div>
      <div class="image4"></div>
      <div class="image5"></div>
      <div class="image6"></div>
      <div class="image7"></div>
      <div class="image8"></div>
      <div class="image9"></div>
      <div class="image10"></div>
      <div class="image11"></div>


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
import { IonModal } from '@ionic/vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { ref } from "vue";

const isSearching = ref(false);
const showFakeModal = ref(false);


const openFakeFileModal = () => {
  showFakeModal.value = true;
};

const toggleSearch = () => {
  isSearching.value = !isSearching.value;
};

const showCreationModal = ref(false);

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

.star{
  position: absolute;
  left: 160px;
  top: 200px;
  width: 15px;
  height: 15px;
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

.titulo {
  font-family: 'Karantina';
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative;
}

.search {
  transition: transform 0.3s ease-in-out;
  font-family: 'Karantina';
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.search-move {
  transform: translateX(-100px);
}

.search-input {
  position: absolute;
  left: 10px;
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  outline: none;
  background: #EFECEC;
  color: black;
}

.image1{
  position: absolute;
  width: 164px;
  height: 148px;
  top: 192px;
  left: 16px;
  background-image:url('/sports1.png');
  border-radius: 10px;
}

.image2{
  position: absolute;
  width: 164px;
  height: 235px;
  top: 185px;
  left: 211px;
  background-image:url('/sports2.png');
  border-radius: 10px;
}

.image3{
  position: absolute;
  width: 144px;
  height: 49px;
  top: 364px;
  left: 28px;
  background-image:url('/sports3.png');
  border-radius: 10px;
}

.image4{
  position: absolute;
  width: 155px;
  height: 148px;
  top: 438px;
  left: 17px;
  background-image:url('/sports5.png');
  border-radius: 10px;
}

.image10{
  position: absolute;
  width: 155px;
  height: 48px;
  top: 438px;
  left: 211px;
  background-image:url('/sports6.png');
  border-radius: 10px;
}

.image11{
  position: absolute;
  width: 155px;
  height: 48px;
  top: 520px;
  left: 211px;
  background-image:url('/sports7.png');
  border-radius: 10px;
}

.image5{
  position: absolute;
  width: 164px;
  height: 148px;
  top: 634px;
  left: 16px;
  background-image:url('/sports8.png');
  border-radius: 10px;
}

.image6{
  position: absolute;
  width: 160px;
  height: 148px;
  top: 634px;
  left: 211px;
  background-image:url('/sports9.png');
  border-radius: 10px;
}

.image7{
  position: absolute;
  width: 162px;
  height: 145px;
  top: 862px;
  left: 17px;
  background-image:url('/sports10.png');
  border-radius: 10px;
}

.image8{
  position: absolute;
  width: 162px;
  height: 341px;
  top: 853px;
  left: 211px;
  background-image:url('/image8.png');
  border-radius: 10px;
}

.image9{
  position: absolute;
  width: 162px;
  height: 145px;
  top: 1049px;
  left: 21px;
  background-image:url('/sports11.png');
  border-radius: 10px;
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
