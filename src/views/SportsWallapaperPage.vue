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

      <ion-button fill="clear" class="addtocart" @click="toggleCart">
        {{ isAddedToCart ? 'ADDED TO CART' : 'ADD TO CART' }}
      </ion-button>

      <div class="image1"></div>

      <img src="/star.png" alt="star" class="star">

      <ion-button fill="clear" class="like" @click="toggleLike">
        <img :src="isLiked ? '/corazonnegro.png' : '/corazon.png'" alt="corazon">
      </ion-button>

      <ion-button fill="clear" class="download" @click="toggleDownload">
        <img v-if="!isDownloaded" src="/descarga.png" alt="descargar">
        <span v-else class="saved-text">Saved</span>
      </ion-button>


      <ion-button fill="clear" class="fullscreen" router-link="/fullscreen">Open fullscreen</ion-button>

      <h3 class="owner">Owner:</h3>

      <ion-button fill="clear" class="profile" router-link="/profileowner">@nba342</ion-button>

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

const isAddedToCart = ref(false);
const isLiked = ref(false);

const toggleCart = () => {
  isAddedToCart.value = !isAddedToCart.value;
};

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

const isDownloaded = ref(false);

const toggleDownload = () => {
  isDownloaded.value = !isDownloaded.value;
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

.star{
  position: absolute;
  top: 260px;
  left: 330px;
}

.owner{
  position: absolute;
  left: 260px;
  top: 635px;
  width: 40px;
  height: 25px;
  color: black;
  font-size: 10px;
  font-weight: 500;
}

.profile{
  position: absolute;
  left: 295px;
  top: 635px;
  width: 50px;
  height: 20px;
  color: #6B6868;
  font-size: 10px;
  font-weight: 500;
}

.fullscreen{
  position: absolute;
  top: 635px;
  left: 155px;
  width: 95px;
  height: 20px;
  color: black;
  font-family: 'Khand';
  font-size: 10px;
  font-weight: 500;
}

.saved-text {
  font-family: 'Karantina';
  font-size: 16px;
  font-weight: 700;
  color: black;
  margin-left: 5px;
}


.like{
  position: absolute;
  top: 633px;
  left: 60px;
}

.download{
  position: absolute;
  top: 633px;
  left: 100px;
}

.addtocart{
  position: absolute;
  top: 190px;
  left: 10px;
  width: 180px;
  height: 30px;
  color: black;
  font-family: 'Karantina';
  font-size: 20px;
  font-weight: 700;
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
  width: 333px;
  height: 384px;
  top: 250px;
  left: 38px;
  background-image:url('/buyedgrande.png');
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
