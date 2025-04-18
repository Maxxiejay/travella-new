<template>
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand & Description -->
        <div>
          <div class="flex items-center mb-4 space-x-2">
            <img src="../assets/favicon.ico" alt="">
            <span class="text-xl font-semibold text-white">Travella</span>
          </div>
          <p class="text-gray-400 mb-4">
            Premium logistics services for businesses across Nigeria. Fast, reliable, and affordable.
          </p>
          <div class="flex space-x-4">
            <Facebook class="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram class="w-5 h-5 hover:text-white cursor-pointer" />
            <Twitter class="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>
  
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white">Home</a></li>
            <li><a href="#" class="hover:text-white">About Us</a></li>
            <li><a href="#" class="hover:text-white">Services</a></li>
            <li><a href="#" class="hover:text-white">Contact</a></li>
            <li><a href="#" class="hover:text-white">Subscribe</a></li>
          </ul>
        </div>
  
        <!-- Our Services -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white">Same-Day Delivery</a></li>
            <li><a href="#" class="hover:text-white">Express Delivery</a></li>
            <li><a href="#" class="hover:text-white">International Shipping</a></li>
            <li><a href="#" class="hover:text-white">Bulk Shipping</a></li>
            <li><a href="#" class="hover:text-white">Warehouse Services</a></li>
          </ul>
        </div>
  
        <!-- Contact Us -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul class="space-y-4 text-gray-400">
            <li class="flex items-start">
              <MapPin class="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              <span>123 Adetokunbo Ademola St, Victoria Island, Lagos, Nigeria</span>
            </li>
            <li class="flex items-center">
              <Phone class="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              <span>+234 812 345 6789</span>
            </li>
            <li class="flex items-center">
              <Mail class="w-5 h-5 text-primary mr-3 flex-shrink-0" />
              <span>info@travella.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-6">
        <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2023 Travella. All rights reserved.</p>
          <div class="space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-gray-300">Privacy Policy</a>
            <a href="#" class="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-vue-next';
  </script>
  