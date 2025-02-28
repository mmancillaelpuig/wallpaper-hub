<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="button-container">
        <ion-button class="back" fill="clear" router-link="/profile">
          <img src="/flechaizq.png" alt="Back">
        </ion-button>
      </div>

      <h1>SETTINGS</h1>

      <div class="display">
        <h2>DISPLAY</h2>
        <ion-button fill="clear">
          <img src="/flechabaj.png" alt="abajo">
        </ion-button>
      </div>

      <div class="network">
        <h2>NETWORK</h2>
        <ion-button fill="clear">
          <img src="/flechabaj.png" alt="abajo">
        </ion-button>
      </div>

      <div class="report">
        <h2>REPORT</h2>
        <ion-button fill="clear">
          <img src="/flechabaj.png" alt="abajo">
        </ion-button>
      </div>

      <div class="account">
        <div class="account-header">
          <h2>ACCOUNT</h2>
          <ion-button fill="clear" @click="toggleAccount">
            <img
              :src="accountExpanded ? '/flechaarr.png' : '/flechabaj.png'"
              :alt="accountExpanded ? 'Collapse' : 'Expand'"
            />
          </ion-button>
        </div>

        <transition name="expand">
          <div v-if="accountExpanded" class="account-content">
            
            <ion-button fill="clear" class="settings-item" router-link="/signup">
              CREATE NEW ACCOUNT
            </ion-button>

            <ion-button fill="clear" class="settings-item" router-link="/deleteaccount">
              DELETE ACCOUNT
            </ion-button>

            <ion-button fill="clear" class="settings-item" router-link="/login">
              LOG OUT
            </ion-button>
          </div>
        </transition>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonPage, IonButton } from '@ionic/vue';

const accountExpanded = ref(false);

function toggleAccount() {
  accountExpanded.value = !accountExpanded.value;
}
</script>

<style scoped>
ion-content {
  --background: white;
  position: relative;
}

.button-container {
  position: relative;
  height: 100%;
}

.back {
  position: absolute;
  top: 104px;          
  left: 57px;         
  min-height: auto;
  min-width: auto;
}

h1 {
  position: absolute;
  top: 150px;
  left: 57px;
  color: black;
  font-family: 'Khand';
  font-size: 48px;
  font-weight: 700;
}

.display {
  position: absolute;
  top: 255px;
  left: 44px;
  width: 320px;
  height: 50px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.display h2 {
  position: relative;
  left: 13px;
  top: -5px;
  width: 60px;
  height: 40px;
  color: black;
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
}

.display ion-button {
  position: absolute;
  left: 260px;
  top: 45%;
  transform: translateY(-50%);
  min-height: auto;
  min-width: auto;
}

.network {
  position: absolute;
  top: 315px;
  left: 44px;
  width: 320px;
  height: 50px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.network h2 {
  position: relative;
  left: 13px;
  top: -5px;
  width: 70px;
  height: 40px;
  color: black;
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
}

.network ion-button {
  position: absolute;
  left: 260px;
  top: 45%;
  transform: translateY(-50%);
  min-height: auto;
  min-width: auto;
}

.report {
  position: absolute;
  top: 375px;
  left: 44px;
  width: 320px;
  height: 50px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

.report h2 {
  position: relative;
  left: 13px;
  top: -5px;
  width: 70px;
  height: 40px;
  color: black;
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
}

.report ion-button {
  position: absolute;
  left: 260px;
  top: 45%;
  transform: translateY(-50%);
  min-height: auto;
  min-width: auto;
}

.account {
  position: absolute;
  top: 435px;
  left: 44px;
  width: 320px;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  overflow: hidden;
}

.account-header {
  display: flex;
  align-items: center;
  height: 50px;
  position: relative;
}

.account-header h2 {
  position: relative;
  left: 13px;
  color: black;
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
}

.account-header ion-button {
  position: absolute;
  left: 260px;
  top: 50%;
  transform: translateY(-50%);
  min-height: auto;
  min-width: auto;
}

.account-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}


ion-button.settings-item {
  width: 280px;
  height: 45px;
  margin: 0 auto;
  border: 1px solid black;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25) inset;
  
  font-family: 'Khand';
  font-size: 20px;
  font-weight: 500;
  color: black;
  text-transform: none;
  
  display: flex;
  align-items: center;
  padding-left: 13px;
}

.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from, .expand-leave-to {
  opacity: 0;
  max-height: 0;
  padding: 0;
}
</style>
