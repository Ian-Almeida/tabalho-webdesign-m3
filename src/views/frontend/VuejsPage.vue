<template>
  <div class="w-screen h-screen h-full bg-gradient-to-b from-green-300 to-green-700
  font-sans space-y-10 p-2">
    <div id="header" class="grid grid-cols-1 space-y-2">
      <div class="flex justify-center">
        <img :src="require(`../../assets/logo.png`)" class="w-20 h-20" alt="vue">
        <div class="text-black font-bold text-4xl p-3">Vue.js</div>
      </div>
      <div class="flex space-x-4 justify-center">
        <vs-button
          dark
          animation-type="scale"
          @click="newTab('https://vuejs.org/v2/guide/')"
        >
          Documentação
          <template #animate >
            <i class='bx bx-file bx-sm'></i>
          </template>
        </vs-button>

        <vs-button
          dark
          animation-type="scale"
          @click="newTab('https://github.com/vuejs/vue')"
        >
          GitHub
          <template #animate >
            <i class='bx bxl-github bx-sm'></i>
          </template>
        </vs-button>
      </div>
      <div class="font-bold text-2xl text-black">Um framework JavaScript progressivo</div>
    </div>

    <div class="grid grid-cols-2 gap-4 ml-12 mr-3">

      <div id="left-content" class="card">
        <div id="left-content-title" class="card-title">
          O que é?
        </div>
        <div id="left-content-text" class="card-text">
          Vue.JS é um framework Javascript open source, lançado em Fevereiro de 2014 por Evan You,
          Desenvolvedor que atuava em um dos projetos do Google Creative Labs, em 2014.
          <br>
          Vue.js é muito utilizado para criar aplicações single page (página única) e também para
          desenvolver vários tipos de interfaces
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          Arquitetura do Vue.js
        </div>
        <div class="card-text">
          Aplicações que utilizam Vue são constituídas de componentes criados
          com a sintaxe <b>HTML</b>,
          <b>CSS</b> e <b>Javascript</b> em um único arquivo <b>.vue</b>, que facilitam o
          isolamento e a manutenção de funcionalidades.
          <br>
          Cada componente constitui um escopo isolado dos demais, tanto em lógica quantos
          nos estilos.
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 ml-12 mr-3">
      <code-highlight language="jsx" class="">
          <pre class="text-bold">
            {{codeText}}
          </pre>
      </code-highlight>

      <div class="space-y-4 relative top-2">
        <div class="card p-2">
          Abaixo existe a aplicação do exemplo a esquerda. O que acontece é que utilizamos uma das
          funcionalidades mais importantes do <b>Vue</b>. O <b>v-model</b>, faz um link do valor
          do <b>input</b> com uma variável, então sempre que essa variável for alterada pelo input,
          ocorrerá a renderização da tela monstrando o valor atualizado.
        </div>
        <div class="card w-64 ml-36 p-2">
          <div class="flex">
            <label class="mr-4" for="m-p">message:</label>
            <p id="m-p">{{message}}</p>
          </div>
          <div class="flex">
            <label class="mr-4" for="i-m">input: </label>
            <input id="i-m" class="text-center rounded bg-gray-400 w-32" v-model="message">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue';
import 'vue-code-highlight/themes/prism-tomorrow.css';
import 'vue-code-highlight/themes/window.css';
import 'prismjs/components/prism-markup-templating';
// import 'prismjs/components/jsx';

export default {
  components: {
    CodeHighlight,
  },
  name: 'VuejsPage',
  data: () => ({
    message: 'Hello Vue!',
    codeText: `
    <div>
      <p>{{ message }}</p>
      <input v-model="message">
    </div>

    export default {
      name: 'Example',
      data: () => ({
        message: 'Hello Vue!',
      }),
    }
`,
  }),
  methods: {
    newTab(url) {
      window.open(url, '_blank');
    },
  },
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
