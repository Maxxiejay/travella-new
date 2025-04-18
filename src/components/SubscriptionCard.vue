<template>
    <div @click.self="$emit('close')" class="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div data-aos="zoom-in" class="bg-white rounded-xl shadow-lg max-w-md w-full py-6">
        <!-- Header -->
        <div class="flex justify-between items-center pb-3 px-6">
          <h2 class="text-lg font-bold">Complete Your Subscription</h2>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-800">
            <X class="w-5 h-5" />
          </button>
        </div>
  <hr>
        <!-- Body -->
        <div class="mt-4 space-y-6 px-6">
          <p class="text-lg text-gray-700">You're subscribing to:</p>
  
          <div class="bg-gray-50 border rounded-lg p-4">
            <p class="font-medium">Travella More Basic</p>
            <p class="text-sm text-gray-500">Monthly subscription</p>
            <p class="text-right font-bold text-lg mt-2">₦10,000</p>
          </div>
  
          <ul class="space-y-4 text-sm text-gray-700">
            <li class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5" />
              Unlimited package deliveries
            </li>
            <li class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5" />
              Priority handling and delivery
            </li>
            <li class="flex items-start gap-2">
              <CheckCircle class="w-4 h-4 text-green-500 mt-0.5" />
              Cancel anytime – no long-term commitment
            </li>
          </ul>
        </div>
  
        <!-- Footer -->
        <div class="mt-6 px-6 space-y-4">
          <button
            class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primaryDark text-white font-semibold py-2 px-4 rounded-lg"
          >
            <CreditCard class="w-4 h-4" />
            Pay ₦10,000 Now
          </button>
          <p class="text-xs text-gray-500 mt-2 text-center">
            Payments are securely processed by Paystack. By clicking “Pay Now”, you agree to our
            <a href="#" class="underline">Terms of Service</a> and
            <a href="#" class="underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { X, CheckCircle, CreditCard } from 'lucide-vue-next'
  </script>
  