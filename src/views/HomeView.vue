<template>
  <div class="home">
    <HeroSection />
    <WhyChooseSection />
    <HowItWorksSection />
    <PricingSection />
    <PackageDetailsForm />
    <TestimonialsSection />
    <CTASection />

  </div>
</template>

<script setup>
import HeroSection from '@/sections/HeroSection.vue';
import TestimonialsSection from '@/sections/TestimonialsSection.vue';
import CTASection from '@/sections/CTASection.vue';
import PricingSection from '@/sections/PricingSection.vue';
import HowItWorksSection from '@/sections/HowItWorksSection.vue';
import PackageDetailsForm from '@/sections/PackageDetailsForm.vue';
import WhyChooseSection from '@/sections/WhyChooseSection.vue';
</script>
