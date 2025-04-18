<template>
  <section class="py-16 px-4 md:px-6 lg:px-8">
    <div data-aos="fade" class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          Subscribe to Travella More and transform your logistics experience with our all-inclusive plan.
        </p>
      </div>
      
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <!-- Pricing Card Header -->
          <div class="bg-primary text-white p-6 text-center">
            <h3 class="text-2xl font-bold mb-1">Travella More Basic</h3>
            <p class="text-white text-opacity-90">Our premium logistics subscription plan</p>
          </div>
          
          <!-- Pricing Card Body -->
          <div class="p-8">
            <!-- Price -->
            <div class="text-center mb-8">
              <div class="flex items-center justify-center">
                <span class="text-4xl font-bold text-gray-900">₦10,000</span>
                <span class="text-gray-600 ml-2">/month</span>
              </div>
              <p class="text-gray-600 mt-1">Billed monthly</p>
            </div>
            
            <!-- Features List -->
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div class="ml-3">
                  <p class="text-gray-800"><span class="font-medium">Discounted Delivery Rate</span> - Send up to 15 packages at just ₦4,500 each</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div class="ml-3">
                  <p class="text-gray-800"><span class="font-medium">Significant Savings</span> - Save ₦3,000 per package compared to regular price (₦7,500)</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div class="ml-3">
                  <p class="text-gray-800"><span class="font-medium">Priority Service</span> - Your shipments always get priority handling</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div class="ml-3">
                  <p class="text-gray-800"><span class="font-medium">Real-time Tracking</span> - Know where your packages are at all times</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <CheckCircle class="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div class="ml-3">
                  <p class="text-gray-800"><span class="font-medium">Dedicated Support</span> - Direct line to our customer service team</p>
                </div>
              </div>
            </div>
            
            <!-- CTA Button -->
            <div class="text-center">
              <button @click="handleSubscribe" class="bg-primary hover:bg-primaryDark text-white font-medium py-3 px-8 rounded-md transition duration-300">
                Subscribe Now
              </button>
              <p class="text-sm text-gray-600 mt-4">No long-term contracts. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();
const handleSubscribe = () => {
  // Logic to handle subscription
  router.push('/subscribe');
};
</script>