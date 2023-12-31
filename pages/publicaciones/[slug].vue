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
      <h1 class="text-5xl mb-3 text-primary">Publicaciones </h1>

      <ul class="inline-flex gap-4">
        <li>Inicio</li>
        <li>Publicaciones</li>
      </ul>
    </div>
  </section>

  <section>
    <div class="relative items-center w-full py-12 lg:py-32">
 
      <div class="container mb-6 items-center">
        <div>
          <span class="uppercase"> {{ news?.author?.area.name }} </span>
          <h3 class="text-3xl font-bold z-10 relative mb-2">
            {{ news?.name }}
          </h3>
          <span class="text-gray-400">
            Fecha de publicación: {{ news?.date_publish }}
          </span>
        </div>

        <div class="grid gap-5 grid-cols-3">
          <div class="col-span-2">
            <div class="shadow my-4">
              <img class="w-full" :src="news?.image_url" alt="" />
            </div>

            <div v-html="news?.description"></div>
          </div>

          <div class="col-span-1">
            <h3 class="text-2xl font-bold z-10 relative  text-gray-500 mb-2">
              Publicaciones relacionadas
            </h3>
            <div v-for="item in relationNews" class="flex font-sans border">
              <div class="flex-none w-48 relative">
                <img
                  :src="item.image_url"
                  alt=""
                  class="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div class="flex-auto p-6">
                <div class="flex flex-wrap">
                  <h3 class="flex-auto text-lg font-semibold text-slate-900">
                    {{ item.title }}
                  </h3>

                  <div
                    class="w-full flex-none text-sm font-medium text-slate-700 mt-2"
                  >
                    {{ item.date_publish }}
                  </div>

                  <NuxtLink
                    :to="'/publicaciones/' + item.slug"
                    class="text-sm bg-primary font-medium text-slate-50 mt-2 w-full py-3 px-5 rounded-lg uppercase"
                  >
                    ver mas
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const route = useRoute();
const news = ref(null);
const relationNews = ref(null);

const init = async () => {
  console.log("init");

  let res = await fetch(
    "https://goyeneche.linox.net.pe/api/publicaciones/" + route.params.slug
  );
  let resJson = await res.json();

  console.log(resJson);

  news.value = resJson;

  let relationNewsRes = await fetch(
    "https://goyeneche.linox.net.pe/api/publicaciones/author-area/" +
      news.value.author.area.id
  );

  let relationNewsData = await relationNewsRes.json();
  relationNews.value = relationNewsData;
};

init();
</script>
