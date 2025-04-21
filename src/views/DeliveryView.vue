<template>
    <div class="max-w-5xl mx-auto p-4 md:p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">Provide Your Package Details</h1>

      <form @submit.prevent="submitForm">
        <!-- Pickup and Delivery Information (Two Columns) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <!-- Pickup Information -->
          <div class="border rounded-md p-4">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Pickup Information</h2>

            <div class="space-y-4">
              <div>
                <label for="pickup-address" class="block text-sm font-medium text-gray-700 mb-1">Pickup Address</label>
                <textarea 
                  id="pickup-address" 
                  v-model="form.pickup.address" 
                  rows="3" 
                  placeholder="Enter full pickup address" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>

              <div>
                <label for="pickup-contact" class="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input 
                  id="pickup-contact" 
                  v-model="form.pickup.contact" 
                  type="tel" 
                  placeholder="+234..." 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label for="pickup-country" class="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <div class="relative">
                  <select 
                    id="pickup-country" 
                    v-model="form.pickup.country" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none"
                    required
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                  </select>
                  <ChevronDown class="absolute right-3 top-3 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label for="pickup-state" class="block text-sm font-medium text-gray-700 mb-1">State</label>
                <div class="relative">
                  <select 
                    id="pickup-state" 
                    v-model="form.pickup.state" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none"
                    required
                  >
                    <option value="" disabled selected>Select state</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Ibadan">Ibadan</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                  </select>
                  <ChevronDown class="absolute right-3 top-3 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label for="pickup-city" class="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input 
                  id="pickup-city" 
                  v-model="form.pickup.city" 
                  type="text" 
                  placeholder="Enter city" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Delivery Information -->
          <div class="border rounded-md p-4">
            <h2 class="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h2>

            <div class="space-y-4">
              <div>
                <label for="delivery-address" class="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                <textarea 
                  id="delivery-address" 
                  v-model="form.delivery.address" 
                  rows="3" 
                  placeholder="Enter full delivery address" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>

              <div>
                <label for="delivery-contact" class="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input 
                  id="delivery-contact" 
                  v-model="form.delivery.contact" 
                  type="tel" 
                  placeholder="+234..." 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              <div>
                <label for="delivery-country" class="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <div class="relative">
                  <select 
                    id="delivery-country" 
                    v-model="form.delivery.country" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none"
                    required
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Kenya">Kenya</option>
                  </select>
                  <ChevronDown class="absolute right-3 top-3 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label for="delivery-state" class="block text-sm font-medium text-gray-700 mb-1">State</label>
                <div class="relative">
                  <select 
                    id="delivery-state" 
                    v-model="form.delivery.state" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none"
                    required
                  >
                    <option value="" disabled selected>Select state</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Ibadan">Ibadan</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                  </select>
                  <ChevronDown class="absolute right-3 top-3 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label for="delivery-city" class="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input 
                  id="delivery-city" 
                  v-model="form.delivery.city" 
                  type="text" 
                  placeholder="Enter city" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Package Details -->
        <div class="border rounded-md p-4 mb-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Package Details</h2>

          <div class="space-y-4">
            <div>
              <label for="package-description" class="block text-sm font-medium text-gray-700 mb-1">Package Description</label>
              <textarea 
                id="package-description" 
                v-model="form.package.description" 
                rows="4" 
                placeholder="Describe your package contents (Dimensions, special handling instructions, etc.)"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                required
              ></textarea>
            </div>

            <div>
              <label for="package-weight" class="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
              <input 
                id="package-weight" 
                v-model="form.package.weight" 
                type="number" 
                min="0.1" 
                step="0.1" 
                placeholder="Enter package weight" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                required
              />
              <p class="text-xs text-gray-500 mt-1">Enter the approximate weight in kilograms</p>
            </div>
          </div>
        </div>

        <!-- Pricing Information -->
        <div class="border rounded-md p-4 mb-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Pricing Information</h2>

          <div class="border border-primary rounded-md p-4 mb-4 bg-orange-50">
            <div class="flex items-start">
              <div class="mr-2 text-primary">
                <Tag class="h-5 w-5" />
              </div>
              <div>
                <h3 class="font-medium text-gray-900">First Package Discount</h3>
                <p class="text-sm text-gray-600">Send this package at our discounted rate of just ₦4,500</p>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            class="w-full bg-primary hover:bg-orange-600 text-white font-medium py-3 rounded-md transition duration-300"
          >
            Schedule Pickup
          </button>
        </div>
      </form>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';
  import { ChevronDown, Tag } from 'lucide-vue-next';
  import { usePackageStore } from '../stores/package.store';
  const packageStore = usePackageStore();

  const form = ref({
    pickup: {
      address: '',
      contact: '',
      country: 'Nigeria',
      state: '',
      city: ''
    },
    delivery: {
      address: '',
      contact: '',
      country: 'Nigeria',
      state: '',
      city: ''
    },
    package: {
      description: '',
      weight: ''
    }
  });

  const submitForm = async () => {
    try {
      const packageData = {
        pickupAddress: form.value.pickup.address,
        pickupContactNumber: form.value.pickup.contact,
        pickupCountry: form.value.pickup.country,
        pickupState: form.value.pickup.state,
        pickupCity: form.value.pickup.city,
        deliveryAddress: form.value.delivery.address,
        deliveryContactNumber: form.value.delivery.contact,
        deliveryCountry: form.value.delivery.country,
        deliveryState: form.value.delivery.state,
        deliveryCity: form.value.delivery.city,
        packageDescription: form.value.package.description,
        weightKg: parseFloat(form.value.package.weight),
        hasPackageDiscount: true
      };

      await packageStore.createPackage(packageData);
      alert('Package scheduled successfully!');
      form.value = {
        pickup: { address: '', contact: '', country: 'Nigeria', state: '', city: '' },
        delivery: { address: '', contact: '', country: 'Nigeria', state: '', city: '' },
        package: { description: '', weight: '' }
      };
    } catch (error) {
      console.error('Failed to schedule package:', error);
      alert('Failed to schedule package. Please try again.');
    }
  };
  </script>