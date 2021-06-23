<template>
  <div class="bg-gray-500 w-screen h-full">
    <div class="flex justify-center mx-auto py-3">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.y1vDZ0E4yelDiOunM4IGhAHaDt%26pid%3DApi&f=1" style="width:500px" class="bg-white rounded-full">
    </div>
    <div class="flex justify-center">
    <div class="flex justify-center mx-auto">
        <vs-button
          dark
          animation-type="scale"
          href='https://github.com/an-tao/drogon'
        >
          <i class='bx bxl-github'></i>
          <template #animate >
            <i class='bx bxl-github'></i>
          </template>
        </vs-button>
    </div>
  </div>
  <div class="grid grid-cols-4 justify-center flex h-40 mx-16">
        <div class="card mx-2.5">
          <div class="card-title">O que é?</div>
          <div class="card-text">Drogon é um framework baseado em HTTP. 
            Drogon pode ser utilizado para criar facilmente diversos tipos de API usando C++</div>
        </div>
        <div class="card mx-2.5">
          <div class="card-title">Principais funcionalidades</div>
          <div class="card-text">Disponível em todas as plataformas, Suporte para protocolos 
            HTTP e HTTPS 
            com solicitação e resposta em formato JSON.</div>
        </div>
        <div class="card mx-2.5">
          <div class="card-title">Curiosidade</div>
          <div class="card-text">Drogon é o nome de um dragão da série "Game of Thrones" 
            que o criador gostava muito</div>
        </div>
        <div class="card mx-2.5">
          <div class="card-title">Velocidade acima de tudo</div>
          <div class="card-text">Atualmente o framework mais rápido do mundo, 
            Drogon foi o primeiro colocado em testes com 105 frameworks, 
            dentre eles: Rails, Django, NestJS, Laravel e entre outros.</div>
        </div>
    </div>
    <div class="max-w-lg justify-center flex mx-auto py-24">
      <code-hightlight language="c"> 
        <pre>
          {{FastAPICode}}
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
import 'prismjs/components/prism-c';

export default {
  name: 'DrogonPage',
  components: {
    CodeHightlight,
  },
  data: () => ({
    FastAPICode: `
      #include <drogon/drogon.h>
      using namespace drogon;
      int main()
      {
        app().setLogPath("./")
            .setLogLevel(trantor::Logger::kWarn)
            .addListener("0.0.0.0", 80)
            .setThreadNum(16)
            .enableRunAsDaemon()
            .run();
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
