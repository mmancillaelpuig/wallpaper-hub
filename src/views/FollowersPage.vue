<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="button-container">
        <ion-button class="back" fill="clear" router-link="/profile">
          <img src="/flechaizq.png" alt="Back">
        </ion-button>
      </div>

      <h1>FOLLOWERS</h1>

      
      <transition-group name="list" tag="div" class="followers-list">
        <div
          v-for="(follower, index) in followers"
          :key="follower.id"
          class="follower"
        >
          <img :src="follower.image" :alt="follower.username" />
          <strong>{{ follower.username }}</strong>
          <ion-button
            class="close-btn"
            fill="clear"
            @click="removeFollower(index)"
          ></ion-button>
        </div>
      </transition-group>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonPage, IonButton } from '@ionic/vue';

interface Follower {
  id: number;
  username: string;
  image: string;
}

const followers = ref<Follower[]>([
  { id: 1, username: '@Moha343', image: '/follower1.png' },
  { id: 2, username: '@Irene2003', image: '/follower2.png' },
  { id: 3, username: '@HomerKLK', image: '/follower3.png' },
  { id: 4, username: '@GanGsta90', image: '/follower4.png' },
  { id: 5, username: '@ReyKajs', image: '/follower5.png' },
  { id: 6, username: '@Otaku2', image: '/follower6.png' },
  { id: 7, username: '@SpiderVerso', image: '/follower7.png' },
  { id: 8, username: '@Francis', image: '/follower8.png' }
]);

const removeFollower = (index: number) => {
  followers.value.splice(index, 1);
};
</script>

<style scoped>
ion-content {
  --background: white;
  padding: 20px;
  position: relative;
}

.button-container {
  position: relative;
}

.back {
  position: absolute;
  top: 30px;
  left: 20px;
  min-height: auto;
  min-width: auto;
}


h1 {
  position: absolute;
  top: 72px;
  left: 57px;
  color: black;
  font-family: 'Karantina';
  font-size: 24px;
  font-weight: 700;
}


.followers-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 140px;
  margin-bottom: 20px;
}

.follower {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 230px;
  height: 50px;
  border-radius: 15px;
  background: #efecec;
  padding: 0 10px;
  margin: 0 auto;
}

.follower img {
  width: 30px;
  height: 30px;
}

.follower strong {
  margin-left: 10px;
  color: #827878;
  flex: 1;
}

.close-btn {
  width: 24px;
  height: 24px;
  --background: none;
  background: url("/X.png") no-repeat center/contain;
  margin: 0;
  padding: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
