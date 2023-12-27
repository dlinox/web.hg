<template>
  <swiper
    :modules="modules"
    @slideChange="handleSlideChange"
    @swiper="initSwiper"
    loop
    :autoplay="autoplay"
  >
    <swiper-slide v-for="(image, index) in items" :key="image.id">
      <div class="image-container">
        <img
          :src="`${image.image_url}`"
          :alt="image.title"
          :class="{ active: currentIndex === index }"
        />
      </div>
      <div v-if="image.title !== '' && image.title !== null   " class="slider-content">
        <div
          class="slide-text"
          :class="{ 'slide-text-visible': currentIndex === index }"
        >
          <h2>{{ image.title }}
            <ECG/>
          </h2>
          <p>{{ image.subtitle }}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="slider-nav">
      <button class="btn-nav-prev" @click="mySwiper.slidePrev()">
        <i class="fas fa-arrow-left mr-1"></i>
        <span> Ant.</span>
      </button>
      <button class="btn-nav-next" @click="mySwiper.slideNext()">
        <span> Sig.</span>
        <i class="fas fa-arrow-right ml-1"></i>
      </button>
    </div>
  </swiper>
</template>

<script setup>
import { ref } from "vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const modules = ref([Autoplay]);

const mySwiper = ref(null);


const items = ref([]);

const init = async () => {

  let res  =  await fetch('https://goyeneche.linox.net.pe/api/sliders');
  let data = await res.json();
  items.value = data;
  console.log(items.value);
  
}

init();


const images = ref([
  {
    id: 1,
    url: "/assets/images/sliders/image.jpg",
    title: "Innovación en la Cadena Láctea",
    subtitle:
      "Revolucionando el acopio y distribución de leche y productos lácteos para un mundo más saludable",
  },
  {
    id: 2,
    url: "/assets/images/sliders/image.jpg",
    title: "Impulsando el Crecimiento Local",
    subtitle:
      "Apostamos por las plantas productoras de lácteos locales, promoviendo economías sostenibles y productos de alta calidad.",
  },
  {
    id: 3,
    url: "/assets/images/sliders/image.jpg",
    title: "La Esencia del Campo en tu Hogar",
    subtitle:
      "Desde la leche fresca hasta el queso artesanal, traemos lo mejor de la granja directamente a tu mesa.",
  },
  // Agrega más imágenes según sea necesario
]);

const currentIndex = ref(0);

const autoplay = {
  delay: 5000,
  disableOnInteraction: false,
};

const initSwiper = (swiper) => {
  mySwiper.value = swiper;
};

const handleSlideChange = (e) => {
  currentIndex.value = e.realIndex;
};
</script>

<style lang="scss">
.swiper {
  position: relative;
  .slider-nav {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 100;
    button {
      border: none;
      padding: 1rem 2rem;

      &.btn-nav-next {
        background-color: $primary;
        color: white;
      }
      &.btn-nav-prev {
        background-color: white;
        color: $primary;
      }
    }
  }
}

.image-container {
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    transition: transform 15s;
    // &.active {
    //   transform: scale(1.5);
    // }
  }
}

.swiper-slide {
  display: flex;
  align-items: flex-end;
  position: relative;
}

.slider-content {
  background-color: rgba($color: #000, $alpha: 0.4);
  position: absolute;
  width: 100%;
  height: 100%;

  .slide-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    padding: 8rem;
    h2,
    p {
      position: absolute;
      bottom: -100%;
      opacity: 0;
      pointer-events: none;
    }

    h2 {
      font-size: 1.8rem;
      color: white;
      font-weight: 900;
      transition: all 1.4s;
      z-index: 1;
    }
    p {
      padding: 0.5rem;
      line-height: 1rem;
      background-color: rgba(255, 255, 255, 0.1);
      font-size: 1rem;
      color: white;
      transition: all 1s;
      z-index: 1;
    }
    &-visible h2 {
      bottom: 40%;
      opacity: 1;
      pointer-events: auto;
    }
    &-visible p {
      bottom: calc(35% + 8rem);
      opacity: 1;
      pointer-events: auto;
    }

  }
}
</style>
