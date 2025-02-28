<template>
  <ion-page>
    <ion-content :fullscreen="true">
     

      

      <div class="text">
        <h2>ARE YOU SURE YOU WANNA DELETE YOUR ACCOUNT</h2>
      </div>

      <div class="yes">
        <ion-button fill="clear" router-link="/signup">YES</ion-button>
      </div>

      <div class="no">
        <ion-button fill="clear" router-link="/config">NO</ion-button>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonPage, IonButton } from '@ionic/vue';
</script>

<style scoped>
ion-content {
  --background: white;
  position: relative;
}

.text {
  position: absolute;
  top: 255px;
  left: 44px;
  width: 320px;
  height: 75px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  text-align: center;
}

.text h2 {
  position: relative;
  left: 13px;
  top: -5px;
  width: 255px;
  height: 40px;
  color: black;
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
}


.yes {
  position: absolute;
  top: 350px;
  left: 84px;
  width: 80px;
  height: 50px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}


.yes ion-button {
  position: absolute;
  top: 5px;
  color: black;
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
}


.no {
  position: absolute;
  top: 350px;
  left: 234px;
  width: 80px;
  height: 50px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}


.no ion-button {
  position: absolute;
  top: 5px;
  left: 5px;
  color: black;
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
}

</style>
