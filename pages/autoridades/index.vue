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
      <h1 class="text-5xl mb-3 text-primary">Autoridades</h1>

      <ul class="inline-flex gap-4">
        <li>Inicios</li>
        <li>Nostros</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="relative items-center w-full py-12 lg:py-32">
      <div class="container">
        <div class="grid grid-cols-1 gap-20">
          <div

          v-for="item in items"
            :key="item.id"

          style="
           background-image: url('/assets/images/bg/bg1.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

          "
            class="relative flex bg-clip-border rounded-xl  text-gray-700 shadow-md w-full max-w-[48rem] flex-row"
          >
            <div
              class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0"
            >
              <img
                :src="item.worker?.photo_url"
                alt="card-image"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="bg-white/60 m-4 p-4 rounded-lg backdrop-blur-xl">
              <h6
                class=" mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase"
              >
                {{ item.position }}
              </h6>
              <h4
                class=" mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
              >
                {{ item.worker?.full_name }}
              </h4>
              <p
                class=" mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700"
              >
                {{ item.worker?.description }}
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue';

const items = ref([]);


const init = async () => {
  console.log('init')

  let servicesRes  = await fetch('https://goyeneche.linox.net.pe/api/autoridades');
  let servicesData = await servicesRes.json();
  items.value = servicesData;

  console.log(items.value);
}

init();
</script>