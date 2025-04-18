<template>
  <section class="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
    <div data-aos="fade-up" class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Travella More?</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Our subscription plan provides predictable pricing and premium service for all your logistics needs.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Priority Delivery Card -->
        <div class="bg-white p-8 rounded-lg shadow-sm">
          <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Truck class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Priority Delivery</h3>
          <p class="text-gray-700">
            Your packages always get priority handling and guaranteed delivery windows.
          </p>
        </div>
        
        <!-- Discounted Package Rates Card -->
        <div class="bg-white p-8 rounded-lg shadow-sm">
          <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Package class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Discounted Package Rates</h3>
          <p class="text-gray-700">
            Send up to 15 packages per month at just ₦4,500 each (regular price: ₦7,500).
          </p>
        </div>
        
        <!-- Simple Cost Structure Card -->
        <div class="bg-white p-8 rounded-lg shadow-sm">
          <div class="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <RefreshCcw class="w-8 h-8 text-primary" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Simple Cost Structure</h3>
          <p class="text-gray-700">
            Pay ₦10,000 monthly and save up to ₦45,000 on your package deliveries.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Truck, Package, RefreshCcw } from 'lucide-vue-next';
</script>