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
      <h1 class="text-5xl mb-3 text-primary">Convocatorias</h1>

      <ul class="inline-flex gap-4">
        <li>Inicio</li>
        <li>Información y publicaciones</li>
      </ul>
    </div>
  </section>

  <section class="relative items-center w-full py-12 lg:py-32">
    <div class="container">
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-lg"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-4 px-6">Convocatoria</th>
            <th scope="col" class="py-4 px-6">Documentos</th>
            <th scope="col" class="py-4 px-6">Fecha de publicación</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in items"
            :key="item.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="py-4 px-6">
              <div class="flex-row">
                <div class="font-semibold text-xl">
                  {{ item.title }}
                </div>

                <div class="mt-3">
                  <p>
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </td>
            <td class="py-8 px-6">
              <div  class="flex-row gap-9">
                <div v-for="doc in item.documents" class="mb-3">
                  <div class="font-semibold text-sm">
                    {{ doc.name }}
                  </div>

                  <div class="mt-2">
                    <a
                      :href="doc.file_url"
                      target="_blank"
                      class="px-4 py-2 uppercase bg-red-600 text-white"
                    >
                      ver
                    </a>
                  </div>
                </div>
              </div>
            </td>
            <td class="py-4 px-6">
              {{ item.date_published }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const items = ref([]);

const init = async () => {
  console.log("init");

  let servicesRes = await fetch(
    "https://goyeneche.linox.net.pe/api/convocatorias"
  );
  let servicesData = await servicesRes.json();
  items.value = servicesData;
  console.log(items.value);
};

init();
</script>
