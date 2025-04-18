<template>
    <div class="container mx-auto">
      <!-- Main Navbar -->
      <nav class="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <!-- Logo and Brand -->
          <div class="text-primary mr-2">
           <img src="../assets/travella.png" alt="">
          </div>
        
        
        <!-- Subscribe Button (Desktop) -->
        <div class="hidden md:flex gap-8 items-center font-semibold">
            <!-- Navigation Links (Desktop) -->
            <div class="hidden md:flex items-center space-x-8">
              <router-link to="/" class="text-gray-800 hover:text-primary" active-class="text-primaryDark">Home</router-link>
              <router-link to="/about" class="text-gray-800 hover:text-primary" active-class="text-primaryDark">About</router-link>
              <router-link to="/services" class="text-gray-800 hover:text-primary" active-class="text-primaryDark">Services</router-link>
              <router-link to="/contact" class="text-gray-800 hover:text-primary" active-class="text-primaryDark">Contact</router-link>
            </div>
          <button class="bg-primary hover:bg-primaryDark text-white font-medium py-2 px-6 rounded-md transition duration-300">
            Subscribe
          </button>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="openMobileMenu" class="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu">
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
        :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Mobile Menu Header -->
        <div class="flex items-center justify-between p-4 border-b">
          <div class="flex items-center">
            <div class="text-primary mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cube">
                <path d="m21 16-9 5-9-5V8l9-5 9 5v8z"></path>
                <path d="m3 8 9 5 9-5"></path>
                <path d="M12 3v10"></path>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-800">Travella</span>
          </div>
          <button @click="closeMobileMenu" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile Menu Links -->
        <div class="flex flex-col py-4">
          <router-link to="/" class="px-6 py-3 text-gray-800 hover:text-primary" active-class="text-primaryDark">Home</router-link>
          <router-link to="/about" class="px-6 py-3 text-gray-800 hover:text-primary" active-class="text-primaryDark">About</router-link>
          <router-link to="/services" class="px-6 py-3 text-gray-800 hover:text-primary" active-class="text-primaryDark">Services</router-link>
          <router-link to="/contact" class="px-6 py-3 text-gray-800 hover:text-primary" active-class="text-primaryDark">Contact</router-link>
        </div>
        
        <!-- Mobile Subscribe Button -->
        <div class="absolute bottom-8 w-full px-6">
          <button class="bg-primary hover:bg-primaryDark text-white font-medium py-3 px-6 rounded-md transition duration-300 w-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
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