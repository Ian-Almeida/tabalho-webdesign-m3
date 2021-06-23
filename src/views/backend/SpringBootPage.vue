<template>
  <div class="bg-white w-screen h-full">
    <div class="flex justify-center mx-auto py-3">
      <img src="https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg" style="width:500px" class="bg-white rounded-3xl">
    </div>
    <div class="flex justify-center mx-auto">
      <vs-button
          dark
          animation-type="scale"
          href='https://spring.io/projects/spring-boot'
        >
          Documentação
          <template #animate >
            <i class='bx bx-file bx-sm'></i>
          </template>
        </vs-button>
        <vs-button
          dark
          animation-type="scale"
          href='https://github.com/spring-projects/spring-framework'
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
          <div class="card-text">O Spring torna a programação em Java mais rápida, 
            fácil e segura para todos. 
            O foco do Spring em velocidade, simplicidade e produtividade o tornou o 
            framework Java mais popular do mundo.</div>
        </div>
        <div class="card mx-2.5">
          <div class="card-title">Compatibilidade</div>
          <div class="card-text">Por ser Java, tem uma ótima compatibilidade com 
            qualquer sistema</div>
        </div>
        <div class="card mx-2.5">
          <div class="card-title">APIs</div>
          <div class="card-text">APIs são facilmente criadas usando conceitos 
            orientado a objetos, 
            com toda a facilidade de uma aplicação Java.</div>
        </div>
    </div>
    
    <div class="max-w-lg justify-center flex mx-auto py-12">
      <code-hightlight class="language-java">
        <pre>
          {{SpringCode}}
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
  name: 'SpringBootPage',
  components: {
    CodeHightlight,
  },
  data: () => ({
    SpringCode: `
      package com.example.demo;

      import org.springframework.boot.SpringApplication;
      import org.springframework.boot.autoconfigure.SpringBootApplication;

      @SpringBootApplication
      @RestController
      public class DemoApplication {

        @GetMapping("/helloworld")
        public String hello() {
          return "Hello World!";
        }
      }
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
