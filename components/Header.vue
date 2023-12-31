<template>
  <header class="w-full">
    <div class="container mx-auto items-center flex justify-between">
      <div class="p-1 h-32">
        <NuxtLink to="/">
          <img src="~/assets/logo.png" class="h-28 py-2" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-3 gap-3">
        <img
          class="my-auto hover:shadow-md hover:p-2 transition-all duration-300 ease-in-out"
          width="130px"
          src="/assets/images/icons/mesa_trans.png"
          alt=""
        />
        <img
          class="my-auto hover:shadow-md hover:p-2 transition-all duration-300 ease-in-out"
          width="120px"
          src="/assets/images/icons/trasn_trans.png"
          alt=""
        />
        <img
          class="my-auto hover:shadow-md hover:p-2 transition-all duration-300 ease-in-out"
          width="140px"
          src="/assets/images/icons/libro_trans.png"
          alt=""
        />
      </div>
    </div>

    <div
      class="bg-primary h-20"
      ref="target"
      :class="{ 'fixed top-0 left-0 w-full z-50': y > 128 }"
    >
      <nav class="container h-full flex justify-center">
        <ul class="h-full lg:inline-flex hidden">
          <li
            v-for="(item, index) in menu"
            :key="index"
            class="relative after:absolute group after:bg-gray-200 after:bottom-0 after:rounded-0 after:left-0 after:h-[5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            :class="{
              'relative before:absolute before:bg-gray-50 before:rounded-0 before:bottom-0 before:left-0 before:h-[5px] before:w-full before:origin-bottom-left before:scale-x-100 before:transition-transform before:ease-in-out after:duration-300':
                $route.path === item.path,
            }"
          >
            <nuxt-link
              class="h-full flex items-center px-3 text-white"
              :to="item.path"
            >
              <i :class="item.icon"></i>

              <span class="ml-1">
                {{ item.name }}
              </span>
            </nuxt-link>

            <ul
              class="group-hover:block hidden absolute -bottom-100 left-0 bg-gray-50 transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-5 group-hover:z-40 z-0"
            >
              <li
                v-for="(subItem, index) in item.group"
                :key="index"
                class="relative after:absolute group after:bg-gray-200 after:bottom-0 after:rounded-0 after:left-0 after:h-[5px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
                :class="{
                  'bg-gray-100 text-primary': $route.path === subItem.path,
                }"
              >
                <nuxt-link
                  :to="subItem.path"
                  class="h-full flex items-center px-5 py-3 text-gray-900 hover:text-primary"
                  :class="{
                    'text-primary': $route.path === subItem.path,
                  }"
                >
                  <span>
                    {{ subItem.name }}
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>

        <div class="lg:hidden flex items-center">
          <button
            class="focus:outline-none text-white hover:text-gray-200 transition-all duration-300 ease-in-out"
            @click="openMenu = !openMenu"
          >
            <i class="fa-solid fa-bars fa-2x"></i>
          </button>
        </div>
      </nav>
    </div>

    <div>
      <div
        class="fixed top-0 left-0 w-full h-screen bg-black/50 z-40"
        v-if="openMenu"
        @click="openMenu = false"
      ></div>
    </div>

    <div
      v-if="openMenu"
      class="fixed top-0 left-0 h-screen w-[320px] bg-primary z-40 flex flex-wrap justify-between transition-all duration-300 ease-in-out"
    >
      <nav class="w-full">
        <ul class="p-2 w-full">
          <li v-for="item in menu" class="group w-full">
            <nuxt-link
              :to="item.path"
              class="text-gray-100 text-sm px-3 py-2 group-hover:bg-black/5 w-full flex items-center"
            >
              <i :class="item.icon"></i>
              <span class="ml-3"> {{ item.name }} </span>
            </nuxt-link>

            <ul
              v-if="item.group"
              class="ml-5 h-0 bg-white/30 group-hover:h-auto overflow-hidden transition-all duration-300 ease-in-out"
            >
              <li
                v-for="(subItem, index) in item.group"
                :key="index"
                class="text-gray-100 text-sm px-3 py-2"
              >
                <nuxt-link :to="subItem.path">
                  <span class="ml-3"> {{ subItem.name }} </span>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="w-full flex items-end">
        <div class="grid grid-cols-1 gap-3 w-full px-3 pb-3">
          <div
            class="bg-white rounded-lg py-2 w-full mx-auto hover:shadow-md hover:scale-95 transition-all duration-300 ease-in-out"
          >
            <img
              class="mx-auto"
              width="130px"
              src="/assets/images/icons/mesa_trans.png"
              alt=""
            />
          </div>

          <div
            class="bg-white rounded-lg py-2 w-full mx-auto hover:shadow-md hover:scale-95 transition-all duration-300 ease-in-out"
          >
            <img
              class="mx-auto"
              width="120px"
              src="/assets/images/icons/trasn_trans.png"
              alt=""
            />
          </div>
          <div
            class="bg-white rounded-lg py-2 w-full mx-auto hover:scale-95 hover:p-2 transition-all duration-300 ease-in-out"
          >
            <img
              class="mx-auto"
              width="140px"
              src="/assets/images/icons/libro_trans.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { useWindowScroll } from "@vueuse/core";
import { useElementVisibility } from "@vueuse/core";

const { x, y } = useWindowScroll();

const target = ref(null);
const targetIsVisible = useElementVisibility(target);

const openMenu = ref(false);

const menu = [
  {
    name: "Inicio",
    path: "/",
    icon: "fa-solid fa-home",
  },
  {
    name: "Nosotros",
    path: "#",
    icon: "fa-solid fa-users",

    group: [
      {
        name: "¿Quiénes somos?",
        path: "/quienes-somos",
      },
      {
        name: "Misíon y visíon",
        path: "/mision-vision",
      },
      {
        name: "Organigrama",
        path: "/organigrama",
      },

      {
        name: "Objetivos",
        path: "/objetivos",
      },
      {
        name: "Autoridades",
        path: "/autoridades",
      },
    ],
  },
  {
    name: "Servicios",
    path: "#",
    icon: "fa-solid fa-hospital",
    group: [
      {
        name: "Especialidades médicas",
        path: "/especialidades-medicas",
      },
      {
        name: "Apoyo al diagnóstico",
        path: "/apoyo-al-diagnostico",
      },
      {
        name: "Oficinas administrativas",
        path: "/oficinas-administrativas",
      },
    ],
  },

  {
    name: "Medicos",
    path: "/medicos",
    icon: "fa-solid fa-user-md",
  },

  {
    name: "Información al usuario",
    path: "#",
    icon: "fa-solid fa-info-circle",
    group: [
      {
        name: "Cartera de servicios",
        path: "/cartera-de-servicios",
      },
      {
        name: "Circuitos de atención",
        path: "/cirtucitos-de-atencion",
      },

      {
        name: "Noticias",
        path: "/noticias",
      },
      {
        name: "Campañas y eventos",
        path: "/campanas-y-eventos",
      },
    ],
  },
  {
    name: "Informes y publicaciones",
    path: "#",
    icon: "fa-solid fa-file-alt",
    group: [
      {
        name: "Convocatorias",
        path: "/convocatorias",
      },
      {
        name: "Publicaciones",
        path: "/publicaciones",
      },
    ],
  },

  {
    name: "Contactanos",
    path: "#",
    icon: "fa-solid fa-phone",
    group: [
      {
        name: "Correo institucional",
        path: "#",
      },

      {
        name: "Aula virtual",
        path: "#",
      },
    ],
  },
];
</script>
<style></style>
