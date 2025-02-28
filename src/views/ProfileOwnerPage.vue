<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <ion-button class="profile" fill="clear">
        <img src="/owner.png" alt="Profile">
      </ion-button>

      <h2 class="profilename">NBA342</h2>

      <ion-button fill="clear" class="follower" @click="toggleFollow">
        <img :src="isFollowing ? '/follower-.png' : '/follower+.png'" alt="follower">
      </ion-button>

      <ion-button class="followersbtn" fill="clear">Followers</ion-button>
      <ion-button class="followingbtn" fill="clear">Following</ion-button>

      <h3 class="followers">{{ followersCount }}</h3>
      <h3 class="following">457</h3>
      
      <div class="sectionswallpapers">
        <ion-button class="creations" fill="clear">Creations</ion-button>
      </div>

      <div class="image1"></div>
      <div class="image2"></div>
      <div class="image3"></div>
      <div class="image4"></div>
      <div class="image5"></div>
      <div class="image6"></div>
      <div class="image7"></div>
      <div class="image8"></div>
      <div class="image9"></div>


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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

const followersCount = ref(1522);
const isFollowing = ref(false);

const showFakeModal = ref(false);


const openFakeFileModal = () => {
  showFakeModal.value = true;
};

const toggleFollow = () => {
  isFollowing.value = !isFollowing.value;
  followersCount.value += isFollowing.value ? 1 : -1;
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

.follower{
  position: absolute;
  left: 65px;
  top: 318px;
}

.options{
  position: absolute;
  top: 58px;
  right: 27px;
}


.profile {
  position: absolute;
  top: 121px;
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
  top: 266px;
  left: 175px;
  position: absolute;
  font-size: 24px;
  font-family: 'Karantina';
  color: black;
  font-weight: bold;
}

.followersbtn{
  position: absolute;
  top: 320px;
  left: 95px;
  width: 50px;
  height: 3px;
  color: black;
  font-family: 'Khand';
  font-size: 10px;
}

.followingbtn{
  position: absolute;
  top: 320px;
  left: 250px;
  width: 50px;
  height: 3px;
  color: black;
  font-family: 'Khand';
  font-size: 10px;
}

.followers{
  position: absolute;
  top: 318px;
  left: 155px;
  width: 20px;
  height: 8px;
  font-family: 'Khand';
  color: black;
  font-weight: bold;
  font-size: 10px;
}

.following{
  position: absolute;
  top: 318px;
  left: 310px;
  width: 20px;
  height: 8px;
  font-family: 'Khand';
  color: black;
  font-weight: bold;
  font-size: 10px;
}

.sectionswallpapers {
  position: absolute;
  top: 370px;
  left: 20px;
  right: 20px;
  gap: 20px;
  display: flex;
  justify-content: center;
}

.sectionswallpapers ion-button {
  width: 64px;
  height: 20px;
  margin: 0;
  --padding-start: 0;
  --padding-end: 0;
  font-size: 10px;
  border-radius: 15px;
  min-width: auto;
  font-family: 'Khand';
  color: black;
}

.creations{
  background: #EFECEC;
}


.image1{
  position: absolute;
  top: 450px;
  left: 60px;
  width: 290px;
  height: 91px;
  border-radius: 15px;
  background-image: url('/creations1.png');
}

.image3{
  position: absolute;
  top: 570px;
  left: 51px;
  width: 121px;
  height: 197px;
  border-radius: 15px;
  background-image: url('/creations3.png');
}

.image4{
  position: absolute;
  top: 570px;
  left: 240px;
  width: 121px;
  height: 91px;
  border-radius: 15px;
  background-image: url('/creations2.png');
}

.image5{
  position: absolute;
  top: 675px;
  left: 240px;
  width: 121px;
  height: 91px;
  border-radius: 15px;
  background-image: url('/creations4.png');
}

.image6{
  position: absolute;
  top: 790px;
  left: 51px;
  width: 121px;
  height: 91px;
  border-radius: 15px;
  background-image: url('/creations8.png');
}

.image7{
  position: absolute;
  top: 790px;
  left: 240px;
  width: 121px;
  height: 197px;
  border-radius: 15px;
  background-image: url('/creations10.png');
}

.image8{
  position: absolute;
  top: 900px;
  left: 51px;
  width: 121px;
  height: 197px;
  border-radius: 15px;
  background-image: url('/liked8.png');
}

.image9{
  position: absolute;
  top: 1000px;
  left: 240px;
  width: 121px;
  height: 91px;
  border-radius: 15px;
  background-image: url('/liked9.png');
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
