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
      <h1 class="text-5xl mb-3 text-primary">Campañas y eventos</h1>

      <ul class="inline-flex gap-4">
        <li>Inicio</li>
        <li>Información al usuario</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="relative items-center w-full py-12 lg:py-32">
      <div class="container grid grid-cols-2 gap-8">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex font-sans bg-white shadow-md rounded-lg col-span-2 lg:col-span-1"
        >
          <div class="flex-none w-56 relative">
            <img
              :src="item.image_url"
              :alt="item.title"
              class="absolute inset-0 w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <h1 class="flex-auto font-medium text-slate-900">
                {{ item.date_published }}
              </h1>
              <div
                class="w-full flex-none mt-2 order-1 text-xl font-bold text-primary"
              >
                {{ item.title }}
              </div>
              <div class="text-sm font-medium text-slate-400">
                <!-- {{ item.author.area.name }} -->
              </div>
            </div>
            <div
              class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"
            >
              <div class="space-x-2 flex text-sm font-bold">
                <p class="text-sm text-slate-500">
                  {{ item.description }}
                </p>
              </div>
            </div>
            <div class="flex space-x-4 text-sm font-medium">
              <div class="flex-auto flex space-x-4">
                <NuxtLink
                  class="h-10 px-6 font-semibold rounded-full bg-primary w-full text-white items-center flex"
                  type="submit"
                  :to="`/campanas-y-eventos/${item.slug}`"
                >
                  Ver detalles
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

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

const url = "https://goyeneche.linox.net.pe/api/eventos";

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
