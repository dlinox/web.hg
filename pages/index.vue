<template>
  <SliderHero />

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
      <div class="container mb-6 items-center flex justify-between">
        <div>
          <span class="uppercase"> noticias</span>
          <h3 class="text-3xl font-bold z-10 relative">Ultimas noticias</h3>
          <ECG class="-mt-4 z-0 relative" width="250px" />
        </div>

        <div class="flex justify-end">
          <NuxtLink
            class="group text-lg font-semibold text-gray-700 hover:text-primary transition ease-in-out duration-200"
            to="/noticias"
          >
            Ver todas
            <i
              class="fas fa-arrow-right inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            ></i>
          </NuxtLink>
        </div>
      </div>

      <div class="container grid grid-cols-1 gap-6 md:grid-cols-2">
        <div
          v-for="(item, index) in newsItems"
          :key="index"
          class="flex font-sans bg-white shadow-md rounded-lg"
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
                {{ item.author.area.name }}
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
                  :to="`/noticias/${item.slug}`"
                >
                  Ver detalles
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gradient-to-tl from-gray-50 via-slate-100 to-slate-50">
    <div class="relative items-center w-full pt-12 lg:pt-32">
      <div class="container mb-6 flex justify-between">
        <div>
          <span class="uppercase"> especialidades</span>
          <h3 class="text-3xl font-bold z-10 relative">
            Nuestras especialidades
          </h3>
          <ECG class="-mt-4 z-0 relative" width="250px" />
        </div>

        <div class="flex justify-end">
          <NuxtLink
            class="group text-lg font-semibold text-gray-700 hover:text-primary transition ease-in-out duration-200"
            to="/especialidades-medicas"
          >
            Ver todas
            <i
              class="fas fa-arrow-right inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            ></i>
          </NuxtLink>
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 divide-x divide-gray-200"
      >
        <div
          v-for="(item, index) in servicesItems"
          :key="index"
          class="relative bg-primary group"
          style="width: 100%; height: 350px"
        >
          <!-- Imagen inicial oculta -->
          <div
            class="w-full h-full opacity-5 transition-opacity duration-1000 ease-in-out group-hover:opacity-70"
          >
            <img
              :src="item.image_url"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Contenido adicional o estilos adicionales si es necesario -->
          <div
            class="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-between p-4"
          >
            <div class="text-end text-gray-300">Especialidad</div>
            <div class="font-bold text-2xl text-white">{{ item.name }}</div>
            <!-- <div class="text-center text-gray-200">ver mas</div> -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="flex items-center"
    style="
      background-image: radial-gradient(
          circle at 29% 55%,
          hsla(0, 21%, 95%, 0.1) 0,
          hsla(0, 21%, 95%, 0.1) 4%,
          transparent 4%,
          transparent 44%,
          transparent 44%,
          transparent 100%
        ),
        radial-gradient(
          circle at 85% 89%,
          hsla(0, 21%, 95%, 0.1) 0,
          hsla(0, 21%, 95%, 0.1) 51%,
          transparent 51%,
          transparent 52%,
          transparent 52%,
          transparent 100%
        ),
        radial-gradient(
          circle at 6% 90%,
          hsla(0, 21%, 95%, 0.09) 0,
          hsla(0, 21%, 95%, 0.09) 53%,
          transparent 53%,
          transparent 64%,
          transparent 64%,
          transparent 100%
        ),
        radial-gradient(
          circle at 35% 75%,
          hsla(0, 21%, 95%, 0.06) 0,
          hsla(0, 21%, 95%, 0.06) 6%,
          transparent 6%,
          transparent 98%,
          transparent 98%,
          transparent 100%
        ),
        radial-gradient(
          circle at 56% 75%,
          hsla(0, 21%, 95%, 0.07) 0,
          hsla(0, 21%, 95%, 0.07) 16%,
          transparent 16%,
          transparent 23%,
          transparent 23%,
          transparent 100%
        ),
        radial-gradient(
          circle at 77% 21%,
          hsla(0, 21%, 95%, 0.06) 0,
          hsla(0, 21%, 95%, 0.08) 35%,
          transparent 35%,
          transparent 55%,
          transparent 55%,
          transparent 100%
        ),
        linear-gradient(45deg, #ffffff, #ebdede);
    "
  >
    <div class="relative items-center w-full py-12 lg:py-32">
      <div class="container mb-6 flex justify-between">
        <div>
          <span class="uppercase"> Medicos</span>
          <h3 class="text-3xl font-bold z-10 relative">
            Nuevo equipo de medicos
          </h3>
          <ECG class="-mt-4 z-0 relative" width="250px" />
        </div>

        <div class="flex justify-end">
          <NuxtLink
            class="group text-lg font-semibold text-gray-700 hover:text-primary transition ease-in-out duration-200"
            to="/medicos"
          >
            Ver todo
            <i
              class="fas fa-arrow-right inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            ></i>
          </NuxtLink>
        </div>
      </div>

      <div class="container">
        <CardDoctor :items="doctorsItems" />
      </div>
    </div>
  </section>

  <div
    v-if="showModal"
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
  >
    <div class="relative w-auto my-6 mx-auto max-w-6xl">
      <!--content-->
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
      >
        <!--header-->
        <!-- <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
       
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <i class="fas fa-times"></i>
            </button>
          </div> -->
        <!--body-->
        <div class="relative flex-auto">
          <button
            class="m-3 absolute top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            v-on:click="toggleModal()"
          >
            <i class="fas fa-times"></i>
          </button>

          <img
            :src="imgModal[0].image_url"
            :alt="imgModal[0].title"
            class="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <!--footer-->
        <!-- <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Save Changes
            </button>
          </div> -->
      </div>
    </div>
  </div>
  <div
    v-if="showModal"
    class="opacity-25 fixed inset-0 z-40 bg-black"
    @click="toggleModal()"
  ></div>


  
</template>

<script setup>
import { ref } from "vue";

const newsItems = ref([]);
const servicesItems = ref([]);
const doctorsItems = ref([]);

const showModal = ref(false);
const imgModal = ref(null);

const toggleModal = () => {
  console.log("toggleModal");
  showModal.value = !showModal.value;
};

const init = async () => {
  let newsRes = await fetch("https://goyeneche.linox.net.pe/api/news?limit=4");
  let newsData = await newsRes.json();
  newsItems.value = newsData.data;
  // filtart si is_featured es true
  imgModal.value = newsData.data.filter((item) => item.is_featured === true);

  if (imgModal.value.length > 0) {
    showModal.value = true;
  }

  let servicesRes = await fetch(
    "https://goyeneche.linox.net.pe/api/especialidades-medicas?limit=4"
  );
  let servicesData = await servicesRes.json();
  servicesItems.value = servicesData.data;
  

  let doctorsRes = await fetch("https://goyeneche.linox.net.pe/api/doctors?limit=4");
  let doctorsData = await doctorsRes.json();
  doctorsItems.value = doctorsData.data;
  console.log(doctorsItems.value);
};

init();
</script>
