<template>
  <div class="sticky top-0 z-40">
    <!-- Main Navbar -->
    <nav class="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm">
      <!-- Logo and Brand -->
      <logo />

      <!-- Subscribe Button (Desktop) -->
      <div class="hidden md:flex gap-8 items-center font-semibold">
        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- <router-link to="/" class="text-gray-800 hover:text-primary" active-class="text-primaryDark">Home</router-link> -->
          <!-- <router-link to="/about" class="text-gray-800 hover:text-primary" active-class="text-primaryDark">About</router-link> -->
          <!-- <router-link to="/services" class="text-gray-800 hover:text-primary" active-class="text-primaryDark">Services</router-link> -->
          <!-- <router-link to="/contact" class="text-gray-800 hover:text-primary" active-class="text-primaryDark">Contact</router-link> -->
        </div>
        <!-- Subscribe Button (Desktop) -->
         <div v-if="isAuth" class="hidden md:flex gap-8 items-center font-semibold">
        <button @click="goTo('/subscribe')"
          class="border-2 border-primary hover:bg-orange-50 hover:scale-105 text-primary font-medium py-2 px-4 rounded-md transition duration-300">
          Subscribe
        </button>
        <div class="h-[50px] w-[50px] text-primary bg-orange-100 rounded-full flex justify-center items-center text-center">MO</div>
          
      </div>
      
        <button v-else @click="goTo('/auth')"
          class="border-2 border-primary hover:bg-orange-50 hover:scale-105 text-primary font-medium py-2 px-4 rounded-md transition duration-300">
          Sign Up/In
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="openMobileMenu" class="text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div v-if="mobileMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMobileMenu"></div>

    <!-- Mobile Menu Sidebar -->
    <div
      class="fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-lg"
      :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'">
      <!-- Mobile Menu Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <img src="../assets/favicon.ico" class="w-10" alt="Travella Logo">
        <button @click="closeMobileMenu" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-x">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Links -->
      <div class="flex flex-col py-4">
        <!-- <router-link to="/" class="px-6 py-3 text-gray-800 hover:text-primary" active-class="text-primaryDark">Home</router-link> -->
        <!-- <router-link to="/about" class="px-6 py-3 text-gray-800 hover:text-primary" active-class="text-primaryDark">About</router-link> -->
        <!-- <router-link to="/services" class="px-6 py-3 text-gray-800 hover:text-primary" active-class="text-primaryDark">Services</router-link> -->
        <!-- <router-link to="/contact" class="px-6 py-3 text-gray-800 hover:text-primary" active-class="text-primaryDark">Contact</router-link> -->
      </div>

      <!-- Mobile Subscribe Button -->
      <div class="absolute bottom-8 w-full px-6">
        <button @click="goTo('/auth')"
          class="border-2 border-primary hover:bg-orange-50 hover:scale-105 text-primary font-medium py-3 px-6 rounded-md transition duration-300 w-full">
          Signin/Up
        </button>
      </div>
    </div>
    <Banner v-if="$route.path !=='/auth'" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Logo from '@/components/Logo.vue';
import Banner from '@/components/Banner.vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

const isAuth = ref(!!localStorage.getItem('token'))

const goTo = (route) => {
  router.push(route);
};

const mobileMenuOpen = ref(false);

const openMobileMenu = () => {
  mobileMenuOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = ''; // Restore scrolling
};
</script>