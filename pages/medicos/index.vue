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
      <h1 class="text-5xl mb-3 text-primary">
        Médicos
      </h1>

      <ul class="inline-flex gap-4">
        <li>Inicio</li>

      </ul>
    </div>
  </section>

  <section>
    <div class="container">

      <CardDoctor :items="items" />
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue';

const items = ref([]);

const init = async () => {
  console.log('init')

  let servicesRes  = await fetch('https://goyeneche.linox.net.pe/api/doctors');
  let servicesData = await servicesRes.json();
  items.value = servicesData.data;
  console.log(items.value);
}

init();
</script>
