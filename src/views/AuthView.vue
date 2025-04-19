<template>
    <div class="min-h-screen flex flex-col md:flex-row">
      <!-- Left Side: Auth Form -->
      <div class="w-full md:w-1/2 flex items-center justify-center p-6">
        <div class="w-full max-w-md">
          <!-- Tabs -->
          <div class="flex items-center p-[5px] bg-gray-100 mb-6  rounded-md overflow-hidden">
            <button 
              @click="activeTab = 'signin'" 
              :class="[
                'flex-1 py-1 rounded-md text-center transition-colors duration-300 font-semibold',
                activeTab === 'signin' 
                  ? 'bg-white text-gray-900 font-medium shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50'
              ]"
            >
              Sign In
            </button>
            <button 
              @click="activeTab = 'signup'" 
              :class="[
                'flex-1 py-1 rounded-md text-center transition-colors duration-300 font-semibold',
                activeTab === 'signup' 
                  ? 'bg-white text-gray-900 font-medium shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50'
              ]"
            >
              Sign Up
            </button>
          </div>
          
          <!-- Form Container with Animation -->
          <div class="relative">
            <!-- Sign In Form -->
            <transition
              enter-active-class="transition-opacity duration-300 ease-out"
              leave-active-class="transition-opacity duration-300 ease-out"
              enter-from-class="opacity-0"
              leave-to-class="opacity-0"
            >
              <div v-if="activeTab === 'signin'" class="bg-white p-6 rounded-lg border">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Sign In to Your Account</h2>
                <p class="text-gray-500 mb-6">Enter your credentials to access your account</p>
                
                <form @submit.prevent="handleSignIn">
                  <div class="mb-4">
                    <label for="email" class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input 
                      id="email" 
                      v-model="signinForm.email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div class="mb-6">
                    <label for="password" class="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                    <input 
                      id="password" 
                      v-model="signinForm.password" 
                      type="password" 
                      placeholder="••••••••" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    class="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-300"
                  >
                    Sign In
                  </button>
                </form>
                
                <div class="mt-4 text-center text-sm">
                  Don't have an account? 
                  <a @click.prevent="activeTab = 'signup'" href="#" class="text-primary hover:text-orange-600">Sign up</a>
                </div>
              </div>
            </transition>
            
            <!-- Sign Up Form -->
            <transition
              enter-active-class="transition-opacity duration-300 ease-out"
              leave-active-class="transition-opacity duration-300 ease-out"
              enter-from-class="opacity-0"
              leave-to-class="opacity-0"
            >
              <div v-if="activeTab === 'signup'" class="bg-white p-6 rounded-lg border">
                <h2 class="text-2xl font-bold text-gray-900 mb-2">Create an Account</h2>
                <p class="text-gray-500 mb-6">Register to start sending packages with Travella More</p>
                
                <form @submit.prevent="handleSignUp">
                  <div class="mb-4">
                    <label for="username" class="block text-sm font-semibold text-gray-700 mb-1">Username</label>
                    <input 
                      id="username" 
                      v-model="signupForm.username" 
                      type="text" 
                      placeholder="yourusername" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div class="mb-4">
                    <label for="signup-email" class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input 
                      id="signup-email" 
                      v-model="signupForm.email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div class="mb-4">
                    <label for="signup-password" class="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                    <input 
                      id="signup-password" 
                      v-model="signupForm.password" 
                      type="password" 
                      placeholder="••••••••" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                    <p class="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
                  </div>
                  
                  <div class="mb-4">
                    <label for="fullname" class="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                    <input 
                      id="fullname" 
                      v-model="signupForm.fullName" 
                      type="text" 
                      placeholder="John Doe" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div class="mb-4">
                    <label for="mobile" class="block text-sm font-semibold text-gray-700 mb-1">Mobile Contact</label>
                    <input 
                      id="mobile" 
                      v-model="signupForm.mobile" 
                      type="tel" 
                      placeholder="+234..." 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div class="mb-4">
                    <label for="business-name" class="block text-sm font-semibold text-gray-700 mb-1">Business Name</label>
                    <input 
                      id="business-name" 
                      v-model="signupForm.businessName" 
                      type="text" 
                      placeholder="Your Company Ltd" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div class="mb-6">
                    <label for="business-location" class="block text-sm font-semibold text-gray-700 mb-1">Business Location</label>
                    <input 
                      id="business-location" 
                      v-model="signupForm.businessLocation" 
                      type="text" 
                      placeholder="Lagos, Nigeria" 
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    class="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition duration-300"
                  >
                    Create Account
                  </button>
                </form>
                
                <div class="mt-4 text-center text-sm">
                  Already have an account? 
                  <a @click.prevent="activeTab = 'signin'" href="#" class="text-primary hover:text-orange-600">Sign in</a>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      
      <!-- Right Side: Orange Background with Info -->
      <div class="w-full md:w-1/2 bg-primary text-white p-4 md:p-12 flex items-start">
        <div class="max-w-lg mx-auto">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Travella More</h1>
          <h2 class="text-xl md:text-2xl font-medium mb-8">Logistics Made Simple for SMEs</h2>
          
          <div class="space-y-8">
            <!-- Feature 1 -->
            <div class="flex items-start">
              <div class="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                <Package class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-lg">First Package Discount</h3>
                <p>Send your first package at just ₦4,500</p>
              </div>
            </div> 
            
            <!-- Feature 2 -->
            <div class="flex items-start">
              <div class="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                <Truck class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-lg">Monthly Subscription</h3>
                <p>₦10,000/month for up to 15 discounted packages</p>
              </div>
            </div>
            
            <!-- Feature 3 -->
            <div class="flex items-start">
              <div class="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                <Users class="w-6 h-6" />
              </div>
              <div>
                <h3 class="font-bold text-lg">Business Support</h3>
                <p>Dedicated service for small and medium enterprises</p>
              </div>
            </div>
          </div>
          
          <p class="mt-12 text-white text-opacity-90">
            Join hundreds of businesses that trust Travella More for reliable logistics services across Lagos, Ibadan, and Abuja.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Package, Truck, Users } from 'lucide-vue-next';
  
  // Active tab state (signin or signup)
  const activeTab = ref('signin');
  
  // Sign In form data
  const signinForm = ref({
    email: '',
    password: ''
  });
  
  // Sign Up form data
  const signupForm = ref({
    username: '',
    email: '',
    password: '',
    fullName: '',
    mobile: '',
    businessName: '',
    businessLocation: ''
  });
  
  // Handle Sign In submission
  const handleSignIn = () => {
    console.log('Sign In submitted:', signinForm.value);
    // Add your authentication logic here
  };
  
  // Handle Sign Up submission
  const handleSignUp = () => {
    console.log('Sign Up submitted:', signupForm.value);
    // Add your registration logic here
  };
  </script>