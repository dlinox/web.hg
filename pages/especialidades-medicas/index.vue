<template>
  <section
    class="bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50 after:content-absolute after:inset-0 after:z-0 after:opacity-75 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-50 after:via-slate-100 after:to-slate-50"
    style="
      background-image: url(/assets/images/bg/hea.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      backdrop-filter: blur(105px);
    "
  >
    <div class="relative container w-full py-8 lg:py-24 text-center z-40">
      <h1 class="text-5xl mb-3 text-primary">Especialidades médicas</h1>

      <ul class="inline-flex gap-4">
        <li>Inicio</li>
        <li>Servicios</li>
      </ul>
    </div>
  </section>

  <section class="relative items-center w-full py-12 lg:py-32">
    <div class="container">
      <div class="grid grid-cols-2 gap-5">
        <div
          v-for="item in items"
          class="col-span-2 md:col-span-1 rounded-lg overflow-hidden shadow-lg"
        >
          <img class="w-full" :src="item.image_url" :alt="item.name" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ item.name }}</div>
            <p class="text-gray-700 text-base">
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- pagination-->
        <div class="col-span-2">
          <div class="flex justify-center">
            <div class="flex rounded-md mt-8">
              <button
                v-for="(link, index) in links"
                :key="index"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                :class="{
                  'bg-primary text-primary': link.active,
                }"
                v-html="link.label"
                @click="link.url ? getItems(link.url) : null"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

import { ref } from "vue";

const items = ref([]);

const links = ref([]);

const url = "https://goyeneche.linox.net.pe/api/especialidades-medicas";

const getItems = async (url) => {
  let servicesRes = await fetch(url);
  let servicesData = await servicesRes.json();
  items.value = servicesData.data;

  links.value = servicesData.links;
};

const init = async () => {
  console.log("init");
  await getItems(url);
};

init();

</script>
