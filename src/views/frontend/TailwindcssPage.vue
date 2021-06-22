<template>
  <div class="space-y-10 p-2">
    <div id="header" class="grid grid-cols-1 space-y-2 relative">
      <div class="flex justify-center">
        <img :src="require(`../../assets/tailwindcss.svg`)" class="w-20 h-20" alt="tailwindcss">
        <div class="text-black font-bold text-4xl p-4 relative top-2">{{ titleText }}</div>
      </div>

      <div class="flex space-x-4 justify-center">
        <vs-button
          class="bg-blue-500"
          animation-type="scale"
          @click="newTab('https://tailwindcss.com/docs')"
        >
          Documentação
          <template #animate >
            <i class='bx bx-file bx-sm'></i>
          </template>
        </vs-button>

        <vs-button
          class="bg-blue-500"
          animation-type="scale"
          @click="newTab('https://github.com/tailwindlabs/tailwindcss')"
        >
          GitHub
          <template #animate >
            <i class='bx bxl-github bx-sm'></i>
          </template>
        </vs-button>
      </div>

      <div class="flex items-center justify-center text-gray-500 text-2xl relative top-6">
        <div class="lg:max-w-4xl md:max-w-2xl sm:max-w-xs ">
          Um framework CSS com a idéia de utility-first, com classes como <b>flex</b>,
           <b>pt-4</b>, <b>text-center</b> e <b>rotate-90</b>, podem ser colocados juntos para criar
          qualquer tipo de design, diretamente no HTML.
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 ml-12 mr-3">
      <div class="card">
        <div class="card-title">Seja consistente em suas escolhas</div>
        <div class="card-text">
          As classes de utilidade ajudam no trabalho com escolhas constantes,
          sem depender de valores arbritários ou aproximados ao desejado. Tornam
          consistentes as esolhas de espaçamento, cores, sombras e todo o resto
          que o CSS padrão não ajuda.
        </div>
      </div>
      <div class="card">
        <div class="space-y-2">
          <ul class="flex space-x-4 justify-center p-2">
            <li>
              <button
                id="nav-largura"
                class="active-tab tab"
                @click="changeTab"
              >Largura</button>
            </li>
            <li>
              <button
                id="nav-cor"
                class="tab"
                @click="changeTab"
              >Cores</button>
            </li>
            <li>
              <button
                id="nav-sombra"
                class="tab"
                @click="changeTab"
              >Sombras</button>
            </li>
          </ul>
          <div id="p-largura" class="active-panel panel">
            <ul class="p-2 space-y-2 ml-8">
              <li class="flex space-x-2">
                <label for="ex8">w-96</label>
                <div id="ex8" class="w-96 h-5 bg-pink-500 rounded"></div>
              </li>
              <li class="flex space-x-2">
                <label for="ex7">w-80</label>
                <div id="ex7" class="w-80 h-5 bg-purple-500 rounded"></div>
              </li>
              <li class="flex space-x-2">
                <label for="ex6">w-72</label>
                <div id="ex6" class="w-72 h-5 bg-indigo-500 rounded"></div>
              </li>
              <li class="flex space-x-2">
                <label for="ex5">w-52</label>
                <div id="ex5" class="w-52 h-5 bg-blue-500 rounded"></div>
              </li>
              <li class="flex space-x-2">
                <label for="ex4">w-36</label>
                <div id="ex4" class="w-36 h-5 bg-green-500 rounded"></div>
              </li>
              <li class="flex space-x-2">
                <label for="ex3">w-24</label>
                <div id="ex3" class="w-24 h-5 bg-yellow-500 rounded"></div>
              </li>
              <li class="flex space-x-2">
                <label for="ex2">w-16</label>
                <div id="ex2" class="w-16 h-5 bg-red-500 rounded"></div>
              </li>
              <li class="flex space-x-2">
                <label for="ex1">w-12</label>
                <div id="ex1" class="w-12 h-5 bg-gray-500 rounded"></div>
              </li>
            </ul>
          </div>
          <div id="p-cor" class="panel">
            <ul class="space-y-2">
              <li>
                <div class="text-center text-xs p-2">
                  bg-red-50   →   bg-red-900
                  <ul class="grid grid-cols-10 h-7">
                    <li class="bg-red-50 rounded-l"></li>
                    <li class="bg-red-100"></li>
                    <li class="bg-red-200"></li>
                    <li class="bg-red-300"></li>
                    <li class="bg-red-400"></li>
                    <li class="bg-red-500"></li>
                    <li class="bg-red-600"></li>
                    <li class="bg-red-700"></li>
                    <li class="bg-red-800"></li>
                    <li class="bg-red-900 rounded-r"></li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="text-center text-xs p-2">
                  bg-green-50   →   bg-green-900
                  <ul class="grid grid-cols-10 h-7">
                    <li class="bg-green-50 rounded-l"></li>
                    <li class="bg-green-100"></li>
                    <li class="bg-green-200"></li>
                    <li class="bg-green-300"></li>
                    <li class="bg-green-400"></li>
                    <li class="bg-green-500"></li>
                    <li class="bg-green-600"></li>
                    <li class="bg-green-700"></li>
                    <li class="bg-green-800"></li>
                    <li class="bg-green-900 rounded-r"></li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="text-center text-xs p-2">
                  bg-blue-50   →   bg-blue-900
                  <ul class="grid grid-cols-10 h-7">
                    <li class="bg-blue-50 rounded-l"></li>
                    <li class="bg-blue-100"></li>
                    <li class="bg-blue-200"></li>
                    <li class="bg-blue-300"></li>
                    <li class="bg-blue-400"></li>
                    <li class="bg-blue-500"></li>
                    <li class="bg-blue-600"></li>
                    <li class="bg-blue-700"></li>
                    <li class="bg-blue-800"></li>
                    <li class="bg-blue-900 rounded-r"></li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="text-center text-xs p-2">
                  bg-yellow-50   →   bg-yellow-900
                  <ul class="grid grid-cols-10 h-7">
                    <li class="bg-yellow-50 rounded-l"></li>
                    <li class="bg-yellow-100"></li>
                    <li class="bg-yellow-200"></li>
                    <li class="bg-yellow-300"></li>
                    <li class="bg-yellow-400"></li>
                    <li class="bg-yellow-500"></li>
                    <li class="bg-yellow-600"></li>
                    <li class="bg-yellow-700"></li>
                    <li class="bg-yellow-800"></li>
                    <li class="bg-yellow-900 rounded-r"></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div id="p-sombra" class="panel">
            <div class="flex justify-center p-2">
              <div class="grid grid-cols-3 gap-4 space-x-4">
                <div>
                  <span>shadow-sm</span>
                  <div class="shadow-sm w-24 h-16 rounded"></div>
                </div>

                <div>
                  <span>shadow</span>
                  <div class="shadow w-24 h-16 rounded"></div>
                </div>

                <div>
                  <span>shadow-md</span>
                  <div class="shadow-md w-24 h-16 rounded"></div>
                </div>

                <div>
                  <span>shadow-lg</span>
                  <div class="shadow-lg w-24 h-16 rounded"></div>
                </div>

                <div>
                  <span>shadow-xl</span>
                  <div class="shadow-xl w-24 h-16 rounded"></div>
                </div>

                <div>
                  <span>shadow-2xl</span>
                  <div class="shadow-2xl w-24 h-16 rounded"></div>
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
  name: 'TailwindcssPage',
  data: () => ({
    titleText: 'Tailwindcss',
  }),
  methods: {
    newTab(url) {
      window.open(url, '_blank');
    },
    changeTab(ev) {
      /* eslint-disable */
      const activeT = document.querySelector('.active-tab');
      const activeP = document.querySelector('.active-panel');
      const pId = ev.target.id.split('-')[1];
      activeT.className = 'tab';
      activeP.className = 'panel';

      ev.target.className = 'active-tab';
      const panels = document.querySelectorAll('.panel');
      panels.forEach(item => {
        if(item.id === `p-${pId}`) {
          item.className = 'active-panel panel';
        }
      });
      /* eslint-enable */
    },
  },
};
</script>

<style scoped>
  .card {
    @apply bg-white rounded shadow
  }
  .card .card-title {
    @apply font-bold text-3xl p-1
  }
  .card .card-text {
    @apply text-lg p-2 text-justify
  }

  .tab {
    @apply p-2 text-gray-400 hover:text-black hover:bg-blue-100 rounded
  }

  .panel {
    @apply hidden
  }

  .active-panel {
    @apply block
  }

  .active-tab {
    @apply bg-blue-500 rounded text-white p-2
  }

</style>
