<template>
  <div class="bg-green-500 w-screen h-full">
    <div class="flex justify-center mx-auto py-3">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsnipcart.com%2Fmedia%2F171913%2Fnode-express.png&f=1&nofb=1" style="width:500px" class="bg-white rounded-3xl">
    </div>
    <div class="flex justify-center mx-auto">
      <vs-button
          dark
          animation-type="scale"
          href='https://expressjs.com/pt-br/guide/routing.html'
        >
          Documentação
          <template #animate >
            <i class='bx bx-file bx-sm'></i>
          </template>
        </vs-button>
        <vs-button
          dark
          animation-type="scale"
          href='https://github.com/expressjs/express'
        >
          <i class='bx bxl-github'></i>
          <template #animate >
            <i class='bx bxl-github'></i>
          </template>
        </vs-button>
    </div>
    <div class="grid grid-cols-3 justify-center flex mx-96 h-40">
        <div class="card mx-2.5">
          <div class="card-title">O que é?</div>
          <div class="card-text">Framework web rápido, flexível e minimalista para Node.js</div>
        </div>
        <div class="card mx-2.5">
          <div class="card-title">Desempenho</div>
          <div class="card-text">O Express fornece uma camada fina de recursos
            fundamentais para aplicativos da web, sem obscurecer os recursos do Node.js</div>
        </div>
        <div class="card mx-2.5">
          <div class="card-title">APIs</div>
          <div class="card-text">Com uma miríade de métodos utilitários HTTP
            e middleware a seu dispor, criar uma API robusta é rápido e fácil.</div>
        </div>
    </div>

    <div class="max-w-lg justify-center flex mx-auto py-12">
      <code-hightlight class="language-js">
        <pre>
          {{ExpressCode}}
        </pre>
      </code-hightlight>
    </div>

  </div>
</template>

<script>
import CodeHightlight from 'vue-code-highlight/src/CodeHighlight.vue';
import 'vue-code-highlight/themes/prism-tomorrow.css';
import 'vue-code-highlight/themes/window.css';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-python';

export default {
  name: 'ExpressPage.vue',
  components: {
    CodeHightlight,
  },
  data: () => ({
    ExpressCode: `
      var express = require('express');
      var app = express();

      // respond with "hello world" when a GET request is made to the homepage
      app.get('/', function(req, res) {
      res.send('hello world');
      });

      app.listen(3001, () => {
        console.log('Running on http://localhost:3001/');
      });
    `,
  }),
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
