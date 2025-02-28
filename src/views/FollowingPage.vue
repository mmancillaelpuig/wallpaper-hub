<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="button-container">
        <ion-button class="back" fill="clear" router-link="/profile">
          <img src="/flechaizq.png" alt="Back">
        </ion-button>
      </div>

      <h1>FOLLOWING</h1>

      <transition-group name="list" tag="div" class="followings-list">
        <div
          v-for="(following, index) in followings"
          :key="following.id"
          class="following"
        >
          <img :src="following.image" :alt="following.username" />
          <strong>{{ following.username }}</strong>
          <ion-button
            class="close-btn"
            fill="clear"
            @click="removeFollowing(index)"
          ></ion-button>
        </div>
      </transition-group>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonPage, IonButton } from '@ionic/vue';

interface Following {
  id: number;
  username: string;
  image: string;
}

const followings = ref<Following[]>([
  { id: 1, username: '@mariii20', image: '/following1.png' },
  { id: 2, username: '@haweleen', image: '/following2.png' },
  { id: 3, username: '@jaMorant', image: '/following3.png' },
  { id: 4, username: '@SunSetCreator', image: '/following4.png' },
  { id: 5, username: '@GirlGamer', image: '/following5.png' },
  { id: 6, username: '@PakiMan', image: '/following6.png' },
  { id: 7, username: '@Diselo43', image: '/following7.png' },
  { id: 8, username: '@Pidgi', image: '/following8.png' }
]);

const removeFollowing = (index: number) => {
  followings.value.splice(index, 1);
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

.followings-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 140px;
  margin-bottom: 20px;
}

.following {
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

.following img {
  width: 30px;
  height: 30px;
}

.following strong {
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
