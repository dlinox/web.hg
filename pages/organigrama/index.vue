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
      <h1 class="text-5xl mb-3 text-primary">Organigrama</h1>

      <ul class="inline-flex gap-4">
        <li>Inicio</li>
        <li>Nosotros</li>
      </ul>
    </div>
  </section>

  <section
    style="
      background-image: repeating-linear-gradient(
          90deg,
          hsla(0, 33%, 66%, 0.06) 0,
          hsla(196, 0%, 79%, 0.06) 1px,
          transparent 1px,
          transparent 96px
        ),
        repeating-linear-gradient(
          0deg,
          hsla(196, 0%, 79%, 0.06) 0,
          hsla(196, 0%, 79%, 0.06) 1px,
          transparent 1px,
          transparent 96px
        ),
        repeating-linear-gradient(
          0deg,
          hsla(196, 0%, 79%, 0.09) 0,
          hsla(196, 0%, 79%, 0.09) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          90deg,
          hsla(196, 0%, 79%, 0.09) 0,
          hsla(196, 0%, 79%, 0.09) 1px,
          transparent 1px,
          transparent 12px
        ),
        linear-gradient(90deg, #fff, #fff);
    "
  >
    <div class="relative items-center w-full py-12 lg:py-32">
      <div class="container  ">

        <img class="w-full rounded-lg shadow-lg" :src="items?.organigram_url" alt="">
      </div>

    </div>
  </section>
</template>


<script setup>

import { ref } from 'vue';

const items = ref(null);


const init = async () => {
  console.log('init')

  let servicesRes  = await fetch('https://goyeneche.linox.net.pe/api/organigrama');
  let servicesData = await servicesRes.json();
  items.value = servicesData;

  console.log(items.value);
}

init();
</script>