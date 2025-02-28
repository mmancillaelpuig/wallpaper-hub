<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="button-container">
        <ion-button class="back" fill="clear" router-link="/cart">
          <img src="/flechaizq.png" alt="Back">
        </ion-button>
      </div>

      <h2 class="payment">PAYMENT</h2>
      <h3>PAYMENT METHODS</h3>
      <h1>___________________________</h1>


      <div class="paymethod">
        <ion-button 
          fill="clear" 
          v-for="method in paymentMethods" 
          :key="method.id"
          @click="selectedMethod = method.id"
        >
          <div class="method-icon" :class="{ 'selected': selectedMethod === method.id }">
            <img :src="method.image" :alt="method.name">
          </div>
        </ion-button>
      </div>

      <h2 class="details">PAYMENT DETAILS</h2>
      <h2 class="cardholder">Cardholder:</h2>
      <div class="cardholderdiv">
        <input type="text" name="label" placeholder="Enter your cardholder">
      </div>

      <h2 class="cardnumber">Cardnumber:</h2>
      <div class="cardnumberdiv">
        <input type="text" name="label" placeholder="Enter your cardnumber">
      </div>

      <h2 class="expiration">Expiration date</h2>
      <div class="datediv">
        <input type="date" name="date" class="date">
      </div>

      <h2 class="cvv">CVV</h2>
      <div class="cvvdiv">
        <input type="text" name="cvv" placeholder="Enter your CVV">
      </div>

      <h1 class="final">___________________________</h1>

      <h2 class="total">Total amount:</h2>

      <h2 class="amount">2.99$</h2>

      <h3 class="savepay">Save payment details</h3>
      <input type="checkbox" name="savedetails" class="savedetails">


      <ion-button fill="clear" class="paybtn" @click="handlePayNow">PAY NOW </ion-button>

      <div 
        v-if="showPaymentAnimation" 
        class="payment-animation"
      >
        <div ref="paymentTextRef" class="payment-text">
          PAYMENT SUCCESSFUL
        </div>

        <div ref="paymentCheckRef" class="payment-check">
          <img src="/tick.png" alt="Check" />
        </div>
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
import { IonModal } from '@ionic/vue';
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import gsap from 'gsap';
import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';


const paymentMethods = [
  { id: 'visa', name: 'Visa', image: '/visa.png' },
  { id: 'mastercard', name: 'Mastercard', image: '/mastercard.png' },
  { id: 'paypal', name: 'PayPal', image: '/paypal.png' },
  { id: 'american', name: 'American Express', image: '/american.png' }
];

const selectedMethod = ref<string | null>(null);

const showCreationModal = ref(false);

const showFakeModal = ref(false);

const showPaymentAnimation = ref(false);

const router = useRouter();

const paymentTextRef = ref<HTMLElement | null>(null);
const paymentCheckRef = ref<HTMLElement | null>(null);


const openFakeFileModal = () => {
  showFakeModal.value = true;
};

const openFilePicker = () => {
  console.log('Abrir selector de archivos');
};

const redirectToGallery = () => {
  console.log('Ir a galería de plantillas');
};

function handlePayNow() {
  showPaymentAnimation.value = true;

  nextTick(() => {
    const tl = gsap.timeline();

    tl.set(paymentTextRef.value, { opacity: 0 });
    tl.set(paymentCheckRef.value, { opacity: 0 });

    tl.to(paymentTextRef.value, {
      duration: 1,
      opacity: 1,
    })
    .to(paymentTextRef.value, {
      duration: 1,
      opacity: 0,
    })
    .to(paymentCheckRef.value, {
      duration: 1,
      opacity: 1,
    })
    .call(() => {
      setTimeout(() => {
        router.push('/home');
      }, 1000);
    });
  });
}
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

.savepay{
  position: absolute;
  left: 235px;
  top: 662px;
  color: black;
  font-family: 'Khand';
  font-size: 12px;
  font-weight: 500;
}

.savedetails{
  position: absolute;
  left: 210px;
  top: 675px;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  background: #FFF;
}

.cvvdiv{
  position: absolute;
  top: 590px;
  left: 240px;
  height: 40px;
  width: 80px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.cvvdiv input{
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 8px;
  background: transparent;
  color: black;
  text-align: center;
}

.datediv{
  position: absolute;
  top: 590px;
  left: 65px;
  height: 40px;
  width: 80px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.datediv input{
  position: absolute;
  height: 100%;
  width: 100%;
  font-size: 8px;
  background: transparent;
  color: black;
  text-align: center;
}

.expiration{
  position: absolute;
  left: 70px;
  top: 550px;
  color: black;
  font-family: 'Khand';
  font-size: 12px;
  font-weight: 600;
  width: 80px;
  height: 30px;
}

.cvv{
  position: absolute;
  left: 270px;
  top: 550px;
  color: black;
  font-family: 'Khand';
  font-size: 12px;
  font-weight: 600;
  width: 80px;
  height: 30px;
}


.cardholderdiv{
  position: absolute;
  top: 400px;
  left: 50px;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.cardholderdiv input {
  height: 100%;
  width: 100%;
  background: transparent;
  color: black;
}


.cardnumberdiv{
  position: absolute;
  top: 500px;
  left: 50px;
  width: 300px;
  height: 40px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.cardnumberdiv input {
  height: 100%;
  width: 100%;
  background: transparent;
  color: black;
}

.details{
  position: absolute;
  top: 330px;
  left: 170px;
  width: 80px;
  height: 30px;
  color: black;
  font-family: 'Karantina';
  font-weight: 400;
  font-size: 15px;
}

.cardholder{
  position: absolute;
  left: 50px;
  top: 360px;
  color: black;
  font-family: 'Khand';
  font-size: 12px;
  font-weight: 600;
  width: 60px;
  height: 30px;
}

.total{
  position: absolute;
  left: 50px;
  top: 660px;
  color: black;
  font-family: 'Khand';
  font-size: 12px;
  font-weight: 600;
  width: 70px;
  height: 30px;
}

.amount{
  position: absolute;
  top: 680px;
  left: 50px;
  color: black;
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
}

.cardnumber{
  position: absolute;
  left: 50px;
  top: 460px;
  color: black;
  font-family: 'Khand';
  font-size: 12px;
  font-weight: 600;
  width: 60px;
  height: 30px;
}

.paymethod {
  display: flex;
  gap: 15px;
  padding: 0 20px;
  top: 250px;
  left: 25px;
  position: absolute;
}

.method-icon {
  padding: 3px;
  transition: background-color 0.2s;
}

.method-icon.selected {
  background-color: #908E8E;
}


.paymethod img {
  width: auto;
  height: auto;
}


.paybtn{
  position: absolute;
  left: 132px;
  top: 770px;
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



.payment{
  top: 140px;
  left: 55px;
  position: absolute;
  font-size: 36px;
  font-family: 'Karantina';
  font-weight: 700;
  color: black;
  font-weight: bold;
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

.final{
  position: absolute;
  color: black;
  top: 610px;
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

.payment-animation {
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100vw; 
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.payment-text {
  font-family: 'Karantina', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
}

.payment-check img {
  width: 60px;
  height: 60px;
}

</style>
