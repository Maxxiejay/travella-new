<template>
  <section class="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
    <div data-aos="fade" class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Give Your Package Details</h2>
        <p class="text-lg text-gray-700">
          Let us know where to pick up your package and we'll handle the rest.
        </p>
      </div>
      
      <div class="bg-white rounded-xl shadow-md p-8">
        <form @submit.prevent="submitForm" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Pickup Address -->
            <div class="space-y-2">
              <label for="pickup-address" class="block text-sm font-medium text-gray-700">
                Pickup Address
              </label>
              <div class="relative">
                <MapPin class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="pickup-address"
                  v-model="form.pickupAddress"
                  type="text"
                  placeholder="Enter pickup address"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
            
            <!-- Delivery Address -->
            <div class="space-y-2">
              <label for="delivery-address" class="block text-sm font-medium text-gray-700">
                Delivery Address
              </label>
              <div class="relative">
                <MapPin class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="delivery-address"
                  v-model="form.deliveryAddress"
                  type="text"
                  placeholder="Enter delivery address"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
            
            <!-- Package Details -->
            <div class="space-y-2">
              <label for="package-details" class="block text-sm font-medium text-gray-700">
                Package Details
              </label>
              <div class="relative">
                <Package class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <textarea
                  id="package-details"
                  v-model="form.packageDetails"
                  placeholder="Describe your package contents"
                  rows="4"
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-gray-900 placeholder-gray-400"
                ></textarea>
              </div>
            </div>
            
            <!-- Estimated Weight -->
            <div class="space-y-2">
              <label for="weight" class="block text-sm font-medium text-gray-700">
                Estimated Weight
              </label>
              <div class="relative">
                <Weight class="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  id="weight"
                  v-model="form.weight"
                  class="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors bg-white text-gray-900 appearance-none"
                >
                  <option value="" disabled selected>Select weight range</option>
                  <option value="0-1kg">0-1kg</option>
                  <option value="1-5kg">1-5kg</option>
                  <option value="5-10kg">5-10kg</option>
                  <option value="10-20kg">10-20kg</option>
                  <option value="20kg+">20kg+</option>
                </select>
                <ChevronDown class="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
          
          <!-- Submit Button -->
          <div class="flex justify-center mt-8">
            <button
              type="submit"
              class="px-8 py-3 bg-primary hover:bg-primaryDark text-white font-medium rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Submit Package
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { MapPin, Package, Weight, ChevronDown } from 'lucide-vue-next';

const form = ref({
  pickupAddress: '',
  deliveryAddress: '',
  packageDetails: '',
  weight: ''
});

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted:', form.value);
  // You would typically send this data to your backend here
  
  // Reset form after submission (optional)
  // form.value = {
  //   pickupAddress: '',
  //   deliveryAddress: '',
  //   packageDetails: '',
  //   weight: ''
  // };
};
</script>