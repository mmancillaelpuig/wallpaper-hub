import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import SearchPage from '../views/SearchPage.vue';
import ProfilePage from '@/views/ProfilePageLiked.vue';
import MessagePage_1 from '@/views/MessagePage_1.vue';
import MessagePage_2 from '@/views/MessagePage_2.vue';
import ProfilePageLiked from '@/views/ProfilePageLiked.vue';
import ProfilePageSaved from '@/views/ProfilePageSaved.vue';
import ProfilePageCreated from '@/views/ProfilePageCreated.vue';
import ProfilePageBuyed from '@/views/ProfilePageBuyed.vue';
import ConfigPage from '@/views/ConfigPage.vue';
import ProfileEditPage from '@/views/ProfileEditPage.vue';
import CartPage from '@/views/CartPage.vue';
import BuyPage from '@/views/BuyPage.vue';
import SportsPage from '@/views/SportsPage.vue';
import FullScreenPage from '@/views/FullScreenPage.vue';
import ProfileOwnerPage from '@/views/ProfileOwnerPage.vue';
import SportsWallapaperPage from '@/views/SportsWallapaperPage.vue';
import FollowersPage from '@/views/FollowersPage.vue';
import FollowingPage from '@/views/FollowingPage.vue';
import SplashScreen from '@/views/SplashScreen.vue';
import LogInPage from '@/views/LogInPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import MakePage from '@/views/MakePage.vue';
import DeleteAccountPage from '@/views/DeleteAccountPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/splash'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage
  },
  {
    path: '/message',
    name: 'Message',
    component: MessagePage_1
  },
  {
    path: '/message2',
    name: 'Message2',
    component: MessagePage_2
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePageLiked
  },
  {
    path: '/profilesaved',
    name: 'Profile Saved',
    component: ProfilePageSaved
  },
  {
    path: '/profilecreated',
    name: 'Profile Created',
    component: ProfilePageCreated
  },
  {
    path: '/profilebuyed',
    name: 'Profile Buyed',
    component: ProfilePageBuyed
  },
  {
    path: '/config',
    name: 'Config',
    component: ConfigPage
  },
  {
    path: '/editprofile',
    name: 'Edit Profile',
    component: ProfileEditPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path: '/buy',
    name: 'Buy',
    component: BuyPage
  },
  {
    path: '/sports',
    name: 'Sports',
    component: SportsPage
  },
  {
    path: '/sportswallpaper',
    name: 'Sports Wallpaper',
    component: SportsWallapaperPage
  },
  {
    path: '/fullscreen',
    name: 'Fullscreen',
    component: FullScreenPage
  },
  {
    path: '/profileowner',
    name: 'Profile Owner',
    component: ProfileOwnerPage
  },
  {
    path: '/followers',
    name: 'Followers',
    component: FollowersPage
  },
  {
    path: '/following',
    name: 'Following',
    component: FollowingPage
  },
  {
    path: '/splash',
    name: 'Splash Screen',
    component: SplashScreen
  },
  {
    path: '/login',
    name: 'Login',
    component: LogInPage
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUpPage
  },
  {
    path: '/make',
    name: 'Make',
    component: MakePage
  },
  {
    path: '/deleteaccount',
    name: 'Delete Account',
    component: DeleteAccountPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
