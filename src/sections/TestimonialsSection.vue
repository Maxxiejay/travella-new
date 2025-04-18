<template>
  <section class="py-16 px-4 md:px-6 lg:px-8">
    <div data-aos="fade" class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Businesses across Nigeria trust Travella More for their logistics needs.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Testimonial 1 -->
        <div class="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <!-- Stars -->
          <div class="flex mb-4">
            <Star v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" />
          </div>
          
          <!-- Quote -->
          <p class="text-gray-700 mb-6">
            "Travella More has completely transformed how we handle our logistics. The subscription model saves us money and gives us peace of mind."
          </p>
          
          <!-- Customer Info -->
          <div>
            <h4 class="font-bold text-gray-900">Chioma Okafor</h4>
            <p class="text-gray-600 text-sm">Fashion Retailer, Lagos</p>
          </div>
        </div>
        
        <!-- Testimonial 2 -->
        <div class="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <!-- Stars -->
          <div class="flex mb-4">
            <Star v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" />
          </div>
          
          <!-- Quote -->
          <p class="text-gray-700 mb-6">
            "The priority service is a game-changer for our e-commerce business. Our customers get their orders faster, and we save on shipping costs."
          </p>
          
          <!-- Customer Info -->
          <div>
            <h4 class="font-bold text-gray-900">Emeka Johnson</h4>
            <p class="text-gray-600 text-sm">E-commerce CEO, Abuja</p>
          </div>
        </div>
        
        <!-- Testimonial 3 -->
        <div class="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <!-- Stars -->
          <div class="flex mb-4">
            <Star v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400 fill-current" />
          </div>
          
          <!-- Quote -->
          <p class="text-gray-700 mb-6">
            "As a small business owner, I appreciate the predictable costs. Travella More's subscription has made budgeting for shipping much easier."
          </p>
          
          <!-- Customer Info -->
          <div>
            <h4 class="font-bold text-gray-900">Aisha Mohammed</h4>
            <p class="text-gray-600 text-sm">Boutique Owner, Kano</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star } from 'lucide-vue-next';
</script>