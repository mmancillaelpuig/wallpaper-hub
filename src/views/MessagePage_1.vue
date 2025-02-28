<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <<div class="header">
        <ion-button class="message" fill="clear">MESSAGE</ion-button>
        <h1>|</h1>
        <ion-button class="notifications" fill="clear" router-link="/message2">NOTIFICATIONS</ion-button>
      </div>
        
      <h1 class="title">YOUR MESSAGES</h1>

      <div class="message1" :class="{ 'expanded': showFullMessage }">
        <h3>@Peterson2212</h3>
        <h4>Today at 19:30</h4>
        <p>{{ showFullMessage ? fullMessage : truncatedMessage }}</p>
        <ion-button fill="clear" @click="toggleMessage">
          <img :src="showFullMessage ? '/minimizar.png' : '/Plus.png'" 
             :alt="showFullMessage ? 'Minimize' : 'Expand'">
        </ion-button>
      </div>
      <div class="message2">
        <h3>@JasonDeRulo232</h3>
        <h4>Tuesdat at 11:22</h4>
        <p>Good Night, could you explain me how could I...</p>
        <ion-button fill="clear">
        <img src="/Plus.png" alt="plus">
        </ion-button>
      </div>
      <div class="message3">
        <h3>@TheManiac</h3>
        <h4>Mondat at 21:52</h4>
        <p>Please Marc, create a new wallpaper similar to...</p>
        <ion-button fill="clear">
        <img src="/Plus.png" alt="plus">
        </ion-button>
      </div>
      <div class="message4">
        <h3>@MM93</h3>
        <h4>Fridat at 14:12</h4>
        <p>Hey! Would you like to be my friend?</p>
      </div>

      

      <ion-button 
        class="sendmessage" 
        fill="clear"
        @click="showChatModal = true"
      >
        Send a message
      </ion-button>

      <ion-modal 
        :is-open="showChatModal"
        @didDismiss="showChatModal = false"
        class="custom-modal"
      >
        <div class="chat-container">
          <div class="chat-header">
            <ion-button fill="clear" @click="showChatModal = false">
              <img src="/flechaizq.png" alt="Back" class="back-arrow">
            </ion-button>
            <div class="user-info">
              <h2>Tot</h2>
              <p>@llestinatary</p>
            </div>
          </div>

          <div class="keyboard">
            <div class="input-container">
              <input 
                type="text" 
                placeholder="Type a message..."
                class="message-input"
              >
          <ion-button fill="clear" class="send-button"@click="handleSendMessage">
            <img src="/send_icon.png" alt="Send">
          </ion-button>
            </div>
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

      <div v-if="showSuccessAnimation" ref="successAnimationRef" class="success-animation">
  <img src="/tick.png" alt="Success">
</div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { useRouter } from 'vue-router';
import { ref, nextTick } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { IonModal } from '@ionic/vue';

const showChatModal = ref(false);
const showCreationModal = ref(false);
const router = useRouter();
const showSuccessAnimation = ref(false)
const successAnimationRef = ref<HTMLElement | null>(null)


const showFakeModal = ref(false);

const showFullMessage = ref(false);
const truncatedMessage = "Hi Marc, I saw your last wallpaper creation...";
const fullMessage = "Hi Marc, I saw your last wallpaper creation, and I absolutely loved it. Make more wallpapers like that one, it would be awesome!";


const motion = useMotion(successAnimationRef, {
  initial: { opacity: 0, scale: 0 },
  enter: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 20
    }
  }
})

const handleSendMessage = async () => {
  showChatModal.value = false;
  showSuccessAnimation.value = true;
  
  await nextTick();
  
  setTimeout(() => {
    showSuccessAnimation.value = false;
    router.push('/message1');
  }, 1500);
}

const toggleMessage = () => {
  showFullMessage.value = !showFullMessage.value;
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

.custom-modal {
  --width: 100%;
  --height: 90%;
  --border-radius: 20px 20px 0 0;
  --box-shadow: 0 -5px 15px rgba(0,0,0,0.1);
}

.chat-container {
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chat-header {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.back-arrow {
  width: 25px;
  height: 25px;
}

.user-info {
  margin-left: 15px;
}

.user-info h2 {
  margin: 0;
  font-family: 'Khand';
  color: #000;
}

.user-info p {
  margin: 0;
  color: #827878;
  font-size: 0.9em;
}


.received-message {
  background: #EFECEC;
  border-radius: 15px;
  padding: 10px 15px;
  max-width: 80%;
  margin-bottom: 15px;
}

.received-message p {
  margin: 0;
  color: #000;
}

.received-message span {
  display: block;
  text-align: right;
  font-size: 0.8em;
  color: #827878;
}

.keyboard {
  border-top: 1px solid #eee;
  padding: 15px;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.message-input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px 15px;
  font-family: 'Khand';
}

.send-button img {
  width: 25px;
  height: 25px;
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
  transition: all 0.3s ease;
  overflow: hidden;

}

.message1 ion-button {
  position: absolute;
  left: 239px;
  bottom: -8px;
  min-height: auto;
  min-width: auto;
}


.message1.expanded {
  height: 100px;
}

.message1.expanded ion-button {
  bottom: -10px;
  left: 235px;
}

.message1.expanded img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}



.message1 h3{
  position: relative;
  width: 90px;
  height: 30px;
  left: 11px;
  top: -10px;
  font-family: 'Khand';
  color: #827878;
  font-size: 10px;
}

.message1 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -55px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message1 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 33px;
  top: -60px;
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

.message2 ion-button {
  position: absolute;
  left: 239px;
  bottom: -8px;
  min-height: auto;
  min-width: auto;
}


.message2 h3{
  position: relative;
  width: 90px;
  height: 30px;
  left: 11px;
  top: -10px;
  font-family: 'Khand';
  color: #827878;
  font-size: 10px;
}

.message2 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -55px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message2 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 33px;
  top: -60px;
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

.message3 ion-button {
  position: absolute;
  left: 239px;
  bottom: -8px;
  min-height: auto;
  min-width: auto;
}


.message3 h3{
  position: relative;
  width: 90px;
  height: 30px;
  left: 11px;
  top: -10px;
  font-family: 'Khand';
  color: #827878;
  font-size: 10px;
}

.message3 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -55px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message3 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 33px;
  top: -60px;
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



.message4 h3{
  position: relative;
  width: 90px;
  height: 30px;
  left: 11px;
  top: -10px;
  font-family: 'Khand';
  color: #827878;
  font-size: 10px;
}

.message4 h4{
  position: relative;
  width: 60px;
  height: 10px;
  left: 221px;
  top: -55px;
  font-family: 'Khand';
  color: black;
  font-size: 10px;
}

.message4 p{
  position: relative;
  width: 234px;
  height: 30px;
  left: 33px;
  top: -60px;
  font-family: 'Khand';
  color: black;
  font-size: 13px;
}

.sendmessage{
  position: absolute;
  height: 45px;
  width: 140px;
  top: 661px;
  left: 57px;
  font-family: 'Khand';
  font-size: 15px;
  color: black;
  background: #908E8E;
  border-radius: 15px;
  border: 2px solid black;
  padding-top: 3px;
}

.title{
  position: fixed;
  top: 160px;
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

.success-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
}

.success-animation img {
  width: 100px;
  height: 100px;
  animation: tickAnimation 1.5s ease-out forwards;
}

@keyframes tickAnimation {
  0% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0); }
}
</style>
