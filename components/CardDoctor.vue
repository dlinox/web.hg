<template>
  <div class="container__cards">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card transition-all duration-300 transform hover:scale-105"
    >
      <div class="cover">
        <img
          :src="item.photo_url"
          alt=""
          class="w-48 mx-auto relative top-10 z-10 filter drop-shadow-md transition-all duration-400 transform hover:top-0 hover:filter-none"
        />
        <div
          class="img__back bg-cover w-full h-48 absolute bottom-0 left-0 border-b-8 border-white rounded-b-lg transition-all duration-300 hover:bottom-8"
        ></div>
      </div>
      <div
        class="description bg-white shadow-lg mt-10 p-5 rounded-b-lg transition-all duration-300 hover:py-10"
      >
        <h2 class="mt-2 uppercase">
          {{ item.full_name }}
        </h2>
        <p>{{ item.specialty_name }}</p>
        <p>CMP: {{ item.registration_code }}</p>
        <a href="#" @click="toggle" class="inline-blockw-full">
          <button
            @click="showModalMedic(item)"
            class="py-2 px-4 mt-4 bg-red-700 text-white text-sm rounded-md transition-all duration-300 hover:bg-red-800 hover:shadow-md w-full"
          >
            Ver Detalles
          </button>
        </a>
      </div>
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
          href="#"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          8
        </a>
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          9
        </a>
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
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
        <div
          class="relative flex items-start justify-between p-2 border-b border-solid border-blueGray-200 rounded-t"
        >
          <div class="relative flex-auto">
            <button
              class="top-0 right-0 p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="toggleModal()"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <!--body-->

        <div class="p-5">
          <div class="flex font-sans">
            <div class="flex-none w-48 relative">
              <img
                :src="medic.photo_url"
                alt=""
                class="absolute inset-0 w-full h-full object-contain "
                loading="lazy"
              />
            </div>
            <form class="flex-auto p-6">
              <div class="flex flex-wrap">
                <h3 class="flex-auto text-lg font-semibold text-slate-900">
                  {{medic?.full_name}}
                </h3>
                <div class="text-lg font-semibold text-slate-500"> CMP:  {{ medic.registration_code }} </div>
                <div
                  class="w-full flex-none text-sm font-medium text-slate-700 mt-2"
                >
                  {{ medic?.specialty_name }}
                </div>
              </div>
              <div
                class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"
              >
               
              </div>
              <div class="flex space-x-4 mb-6 text-sm font-medium">
           
              </div>
              <p class="text-sm text-slate-700">
                {{ medic.description }}
              </p>
            </form>
          </div>
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
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const showModal = ref(false);

const medic = ref({});

const toggleModal = () => {
  showModal.value = !showModal.value;
};

const showModalMedic = (item) => {
  medic.value = item;
  toggleModal();
};
</script>

<style>
.container__cards {
  max-width: 1200px;
  margin: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 300px;
  margin: 10px;
  transition: all 300ms;
}

.card:hover {
  width: 350px;
}

.card .cover {
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
}

.card .cover img {
  width: 250px;
  display: block;
  margin: auto;
  position: relative;
  top: 40px;
  z-index: 1;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
  transition: all 400ms;
}

.card:hover .cover img {
  top: 0px;
  filter: none;
}

.card .img__back {
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: -80px;
  left: 0;
  background-size: cover;
  border-radius: 0.5rem;
  transition: all 300ms;
}

.card .img__back {
  background-image: url(/assets/images/bg/bg1.jpg);
}

.card:hover .img__back {
  bottom: -40px;
}

.card .description {
  background: white;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  margin-top: -10px;
  padding: 20px;
  border-radius: 0px 0px 0.5rem 0.5rem;
  transition: all 300ms;
}

.card:hover .description {
  padding: 40px;
}

.card .description h2 {
  margin-top: 10px;
}

.card .description p {
  margin-top: 10px;
}

.card .description input {
  padding: 10px 40px;
  margin-top: 20px;
  border: none;
  background: #990202;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: all 300ms;
}

.card .description input:hover {
  background: #167be3;
}
</style>
