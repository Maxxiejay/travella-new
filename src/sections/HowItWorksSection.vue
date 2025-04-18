<template>
  <section class="py-16 px-4 md:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div data-aos="fade" class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Three simple steps to transform your logistics with our subscription service.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <!-- Step 1 -->
        <div data-aos="fade-up" data-aos-delay="0" class="flex flex-col items-center text-center">
          <div class="bg-primary border-8 border-orange-100 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
            1
          </div>
          <div class="text-primary mb-4">
            <Package class="w-10 h-10" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Subscribe to Our Plan</h3>
          <p class="text-gray-700">
            Pay ₦10,000/month for our Travella More Basic plan and enjoy discounted package rates.
          </p>
        </div>
        
        <!-- Step 2 -->
        <div data-aos="fade-up" data-aos-delay="100" class="flex flex-col items-center text-center">
          <div class="bg-primary border-8 border-orange-100 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
            2
          </div>
          <div class="text-primary mb-4">
            <Truck class="w-10 h-10" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Request Deliveries</h3>
          <p class="text-gray-700">
            Schedule pickups through our website or mobile app whenever you need to send packages.
          </p>
        </div>
        
        <!-- Step 3 -->
        <div data-aos="fade-up" data-aos-delay="200" class="flex flex-col items-center text-center">
          <div class="bg-primary border-8 border-orange-100 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
            3
          </div>
          <div class="text-primary mb-4">
            <CheckCircle class="w-10 h-10" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Save on Every Package</h3>
          <p class="text-gray-700">
            Pay just ₦4,500 per package instead of ₦7,500, saving ₦3,000 on every delivery (up to 15 packages).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Package, Truck, CheckCircle } from 'lucide-vue-next';
</script>