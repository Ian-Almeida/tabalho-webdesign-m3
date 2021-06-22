<template>
  <div class="home">
    <div class="bg-gray-300 w-screen h-screen">
      <div class="grid grid-cols-1 space-y-28">
        <div class="flex justify-center p-2">

          <div class="font-bold text-2xl ml-10">Este SPA foi feito com o intuito de apresentar
            algumas tecnologias para o desenvolvimento web. Além da web, para contemplar-mos o
            curso de engenharia da computação tem uma seção específica para apresentar tecnologias
            de descrição de hardware
          </div>

        </div>

        <div class=" flex justify-center">
          <div class="grid grid-cols-2 gap-10">
            <div class="card p-2">
              <div class="card-title">
                Tecnologias utilizadas nessa aplicação
              </div>
              <div class="card-text flex justify-center">
                <div class="flex space-x-4">
                  <vs-tooltip left>
                    <a href="https://vuejs.org/v2/guide/">
                      <img src="../assets/logo.png" class="w-32 h-32" alt="vue"/>
                    </a>
                    <template #tooltip>VueJs</template>
                  </vs-tooltip>

                  <vs-tooltip right>
                    <a href="">
                      <img :src="require(`../assets/tailwindcss.svg`)"
                           class="w-32 h-32" alt="tailwindcss">
                    </a>
                    <template #tooltip>Tailwindcss</template>
                  </vs-tooltip>

                </div>
              </div>
            </div>
            <div class="card p-2">
              <div class="card-title">
                Bibliotecas e plugins utilizados
              </div>
              <div class="card-text">
                <div class="flex space-x-4 text-green-700 font-bold text-2xl justify-center
                  relative top-8">

                  <vs-tooltip bottom>
                    <a href="https://vuesax.com/docs/guide/#whats-is-vuesax">Vuesax</a>
                    <template #tooltip>
                      https://vuesax.com/docs/guide/#whats-is-vuesax
                    </template>
                  </vs-tooltip>

                  <vs-tooltip bottom>
                    <a href="https://router.vuejs.org/guide/">Vue Router</a>
                    <template #tooltip>
                      https://router.vuejs.org/guide/
                    </template>
                  </vs-tooltip>

                  <vs-tooltip bottom>
                    <a href="https://boxicons.com">Box Icons</a>
                    <template #tooltip>
                      https://boxicons.com
                    </template>
                  </vs-tooltip>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style scoped>
  .card {
    @apply bg-white rounded shadow-lg
  }
  .card .card-title {
    @apply font-bold text-2xl p-1
  }
  .card .card-text {
    @apply font-normal p-2 text-justify
  }
</style>
