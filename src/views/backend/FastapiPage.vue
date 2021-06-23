<template>
  <div class="bg-green-500 w-screen h-full">
    <div class="flex justify-center mx-auto py-3">
      <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" style="width:500px" class="bg-white rounded-full">
    </div>
    <div class="flex justify-center mx-auto">
      <vs-button
          dark
          animation-type="scale"
          href='https://fastapi.tiangolo.com'
        >
          Documentação
          <template #animate >
            <i class='bx bx-file bx-sm'></i>
          </template>
        </vs-button>
        <vs-button
          dark
          animation-type="scale"
          href='https://github.com/tiangolo/fastapi'
        >
          <i class='bx bxl-github'></i>
          <template #animate >
            <i class='bx bxl-github'></i>
          </template>
        </vs-button>
    </div>
    <div class="grid grid-cols-2 justify-center flex mx-96 h-40">
        <div class="card mx-2.5">
          <div class="card-title">O que é?</div>
          <div class="card-text">FastAPI é uma estrutura da web moderna e rápida
            (de alto desempenho) para a
            construção de APIs com Python 3.6+ com base em Python padrão.</div>
        </div>
        <div class="card mx-2.5">
          <div class="card-title">Principais funcionalidades</div>
          <div class="card-text">Rápido para codificar, desempenho muito alto,
            Intuitivo, menos bugs, fácil e código curto</div>
        </div>
    </div>

    <div class="max-w-lg justify-center flex mx-auto py-12">
      <code-hightlight language="python">
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
import 'prismjs/components/prism-python';

export default {
  name: 'FastapiPage',

  components: {
    CodeHightlight,
  },
  data: () => ({
    FastAPICode: `
      from typing import Optional

      from fastapi import FastAPI

      app = FastAPI()


      @app.get("/")
      def read_root():
        return {"Hello": "World"}


      @app.get("/items/{item_id}")
      def read_item(item_id: int, q: Optional[str] = None):
        return {"item_id": item_id, "q": q}

      if __name__ == "__main__":
        uvicorn.run(
          "main:app",
          host='localhost',
          reload=False,
          port=8000,
        )
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
