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
        <div  v-for="item in servicesItems" class="col-span-2 md:col-span-1 rounded-lg overflow-hidden shadow-lg">
          <img
            class="w-full"
            :src="item.image_url"
            :alt="item.name"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2"> {{ item.name }} </div>
            <p class="text-gray-700 text-base">
              {{ item.description  }}
            </p>
          </div>
        </div>

        <!-- pagination-->
        <div class="col-span-2">
          <div class="flex justify-center">
            <div class="flex rounded-md mt-8">
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span class="sr-only">Previous</span>
                <!-- Heroicon name: solid/chevron-left -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.707 3.293a1 1 0 010 1.414L7.414
                    9H17a1 1 0 110 2H7.414l3.293 3.293a1 1 0
                    01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1
                    1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"
              >
                ...
              </span>
              <a
                href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >

                9
              </a>
              <a
                href="#" class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >

                <span class="sr-only">Next</span>
                <!-- Heroicon name: solid/chevron-right -->
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 16.707a1 1 0
                    010-1.414L12.586 11H3a1 1 0 010-2h9.586l-3.293
                    -3.293a1 1 0 011.414-1.414l5 5a1 1 0
                    010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>

              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<script setup>

import { ref } from 'vue';

const servicesItems = ref([]);

const init = async () => {
  console.log('init')

  let servicesRes  = await fetch('https://goyeneche.linox.net.pe/api/especialidades-medicas');
  let servicesData = await servicesRes.json();
  servicesItems.value = servicesData;
  console.log(servicesItems.value);
}

init();
</script>
