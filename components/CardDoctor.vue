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
        <a href="#" @click="toggle" class="inline-block">
          <button
            class="py-2 px-4 mt-4 bg-red-700 text-white text-sm rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-700"
          >
            Ver Detalles
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
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
