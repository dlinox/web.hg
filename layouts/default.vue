<template>
  <Header />

  <slot />
  <Footer />

  <button
    class="fixed bottom-2 right-2 p-3 rounded-lg bg-primary text-white "
    @click="scrollToTop"
  >
    
  <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>
<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");

</style>
