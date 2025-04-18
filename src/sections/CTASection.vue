<template>
  <section class="bg-primaryDark py-16 px-4 md:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to transform your logistics?
      </h2>
      <p class="text-white text-lg mb-8 max-w-2xl mx-auto">
        Join Travella More today and start experiencing the benefits of subscription-based logistics.
      </p>
      <button 
        @click="handleSubscribe" 
        class="bg-white text-primary hover:bg-orange-50 font-medium px-8 py-3 rounded-md transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
      >
        Subscribe Now
      </button>
    </div>
  </section>
</template>

<script setup>
const handleSubscribe = () => {
  // Handle subscription action
  // This could navigate to a signup page or open a modal
  console.log('Subscribe button clicked');
};
</script>