<template>
  <section class="bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50
  after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50
  "
  style="
   background-image: url(/assets/images/bg/hea.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    backdrop-filter: blur(105px);

  "
  >
    <div class="relative container w-full py-8 lg:py-24 text-center z-40">
      <h1 class="text-5xl mb-3 text-primary">¿Quiénes somos?</h1>

      <ul class="inline-flex gap-4">
        <li>Inicio</li>
        <li>Nosotros</li>
      </ul>
    </div>
  </section>

  <section class="relative items-center w-full py-12 lg:py-32">
    <div class="container">
      <div class="grid grid-cols-2 gap-5">
        <div class="col-span-2 md:col-span-1">
          <img src="/assets/images/about_us/hg-img-1.jpg" alt="" />
        </div>
        <div class="col-span-2 md:col-span-1">
        
          <div class="container mb-6">
            <h3 class="text-3xl font-bold z-10 relative">Hospital Goyeneche</h3>
            <ECG class="-mt-4 z-0 relative" width="250px" />
          </div>

          <div v-html="about_us">

            

            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import { ref } from 'vue';

const items = ref([]);
const about_us = ref(null);

const init = async () => {
  console.log('init')

  let servicesRes  = await fetch('https://goyeneche.linox.net.pe/api/quienes-somos');
  let servicesData = await servicesRes.json();
  items.value = servicesData;
  about_us.value = items.value.about_us;
  console.log(items.value);
}

init();
</script>
