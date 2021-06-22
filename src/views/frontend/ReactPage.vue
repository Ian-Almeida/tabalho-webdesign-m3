<template>
  <div class="w-screen max-w-max h-full bg-gradient-to-b from-blue-500 to-blue-900
  font-sans space-y-10 p-2">
    <div id="header" class="grid grid-cols-1 space-y-2">
      <div class="flex justify-center">
        <img :src="require(`../../assets/react-js.svg`)" class="w-20 h-20" alt="react">
        <div class="text-black font-bold text-4xl p-4">{{ titleText }}</div>
      </div>
      <div class="flex space-x-4 justify-center">
        <vs-button
          dark
          animation-type="scale"
          @click="newTab('https://pt-br.reactjs.org/docs/getting-started.html')"
        >
          Documentação
          <template #animate >
            <i class='bx bx-file bx-sm'></i>
          </template>
        </vs-button>

        <vs-button
          dark
          animation-type="scale"
          @click="newTab('https://github.com/facebook/react')"
        >
          GitHub
          <template #animate >
            <i class='bx bxl-github bx-sm'></i>
          </template>
        </vs-button>
      </div>

    </div>

    <div class="grid grid-cols-3 gap-4 ml-12 mr-3">

      <div id="left-content" class="card">
        <div id="left-content-title" class="card-title">
          O que é?
        </div>
        <div id="left-content-text" class="card-text">
          {{leftContentText}}
        </div>
      </div>

      <div id="middle-content" class="card">
        <div id="middle-content-title" class="card-title">
          Baseado em componentes
        </div>
        <div id="middle-content-text" class="card-text">
          {{middleContentText}}
        </div>
      </div>

      <div id="right-content" class="card">
        <div id="right-content-title" class="card-title">
          Reutilizável
        </div>
        <div id="right-content-text" class="card-text">
          {{rightContentText}}
        </div>
      </div>
      <div></div>

      <div class="flex justify-center items-center">
        <div class="card">
          <div class="card-title">
            Um Componente Simples
          </div>
          <div class="card-text">
            {{leftJSXContentText}}
          </div>
        </div>
      </div>

      <div></div>

      <div></div>

      <code-highlight language="jsx">
          <pre class="text-bold">
            {{jsxCodeText}}
          </pre>
      </code-highlight>

      <div></div>

    </div>

  </div>

</template>

<script>
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue';
import 'vue-code-highlight/themes/prism-tomorrow.css';
import 'vue-code-highlight/themes/window.css';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-jsx';

export default {
  components: {
    CodeHighlight,
  },
  name: 'ReactPage',
  data: () => ({
    titleText: 'React.js',
    contentText: 'React é uma biblioteca',
    isJs: false,
    jsxCodeText: `
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Olá, {this.props.name}!
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);`,
    leftContentText: 'React é uma biblioteca JavaScript que visa tornar a criação de UI mais amigável e fácil de fazer.\n'
      + 'React faz com que a View seja atualizada de forma dinâmica, renderizando novamente apenas as partes onde são utilizados os states.',
    middleContentText: 'React é baseado em componentes, com isso, é possível combinar vários componentes para construir UIs complexas. Com a lógica dos componentes escrita em JavaScript invés de templates, torna-se mais fácil a passagem de vários tipos de dados ao longo da aplicação.',
    rightContentText: 'React é baseado em componentes, com isso, é possível combinar vários componentes para construir UIs complexas. Com a lógica dos componentes escrita em JavaScript invés de templates, torna-se mais fácil a passagem de vários tipos de dados ao longo da aplicação.',
    leftJSXContentText: 'Os componentes do React implementam um método render() que recebe os dados de entrada e retornam o que deve ser exibido. Este exemplo usa uma sintaxe parecida com XML chamada JSX. \n'
      + '\n'
      + '\nVale lembrar que o JSX não é obrigatório para o React, é possível escrever em JavaScript puro também. Pois, o código JSX é convertido para JavaScript em etapa de compilação.',
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
