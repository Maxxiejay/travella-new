<template>
    <div class="relative text-primary mr-2 cursor-pointer" @click="goTo('/')">
        <span class="absolute -top-2 -right-4 font-bold text-[10px] border-2 border-orange-200 px-1 rounded-xl">More</span>
        <img src="../assets/travella.png" class="w-[90px]" alt="Travella Logo">
    </div>
</template>

<script setup>
 import { useRouter } from 'vue-router';

const router = useRouter();

const goTo = (route) => {
  router.push(route);
};
</script>

<style lang="scss" scoped></style>