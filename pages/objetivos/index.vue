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
      <h1 class="text-5xl mb-3 text-primary">Objetivos</h1>

      <ul class="inline-flex gap-4">
        <li>Inicios</li>
        <li>Nostros</li>
      </ul>
    </div>
  </section>

  <section
    class=""
    style="
       background-image: repeating-linear-gradient(
          90deg,
          hsla(0, 33%, 66%, 0.2) 0,
          hsla(196, 0%, 79%, 0.2) 1px,
          transparent 1px,
          transparent 96px
        ),
        repeating-linear-gradient(
          0deg,
          hsla(196, 0%, 79%, 0.2) 0,
          hsla(196, 0%, 79%, 0.2) 1px,
          transparent 1px,
          transparent 96px
        ),
        repeating-linear-gradient(
          0deg,
          hsla(196, 0%, 79%, 0.1) 0,
          hsla(196, 0%, 79%, 0.1) 1px,
          transparent 1px,
          transparent 12px
        ),
        repeating-linear-gradient(
          90deg,
          hsla(196, 0%, 79%, 0.1) 0,
          hsla(196, 0%, 79%, 0.1) 1px,
          transparent 1px,
          transparent 12px
        ),
        linear-gradient(90deg, #fff, #fff);
    
    "
  >


    <div class="container">
      <div
        class="grid grid-cols-1 gap-8 relative items-center w-full py-12 lg:py-32"
      >
        <div
          v-for="(item, index) in 4"
          class="shadow-md p-8 rounded-lg bg-white/10 backdrop-blur-sm rounded-br-[80px] z-10"
        >
          <div class="container mb-6">
            <span class="font-extrabold text-7xl text-black/10">
              {{ index + 1 }}
            </span>
            <h3 class="text-2xl font-bold z-10 relative my-3">
              Titulo del Objetivo
            </h3>
          </div>

          <div>
            <p class="font-light">
              El Hospital Goyeneche del Gobierno Regional de Arequipa, cumple un
              rol social contribuyendo a so
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup></script>
