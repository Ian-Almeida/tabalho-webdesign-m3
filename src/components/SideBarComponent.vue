<template>
  <div>
    <vs-sidebar
      absolute
      hover-expand
      reduce
      v-model="active"
      open
      fixed
    >
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home" to="/">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        Home
      </vs-sidebar-item>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bxs-user' ></i>
            </template>
            Ian
          </vs-sidebar-item>
        </template>

       <vs-sidebar-item id="ian-linkedin" href="https://www.linkedin.com/in/ian-pinto-de-almeida-02830a182/">
          <template #icon>
            <i class="bx bxl-linkedin-square" />
          </template>
          LinkedIn
        </vs-sidebar-item>

        <vs-sidebar-item id="ian-github" href="https://github.com/Ian-Almeida">
          <template #icon>
            <i class="bx bxl-github" />
          </template>
          GitHub
        </vs-sidebar-item>

        <vs-sidebar-item id="ian-facebook" href="https://www.facebook.com/ian.pintodealmeida/">
          <template #icon>
            <i class="bx bxl-facebook" />
          </template>
          Facebook
        </vs-sidebar-item>

      </vs-sidebar-group>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-user' ></i>
            </template>
            Jao
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="jao-linkedin" href="https://www.linkedin.com/in/joão-paulo-kraisch-458304182/">
          <template #icon>
            <i class="bx bxl-linkedin-square" />
          </template>
          LinkedIn
        </vs-sidebar-item>

        <vs-sidebar-item id="jao-github" href="https://github.com/Jp-K">
          <template #icon>
            <i class="bx bxl-github" />
          </template>
          GitHub
        </vs-sidebar-item>

        <vs-sidebar-item id="jao-facebook" href="https://www.facebook.com/joaopaulo.kraisch">
          <template #icon>
            <i class="bx bxl-facebook" />
          </template>
          Facebook
        </vs-sidebar-item>

      </vs-sidebar-group>

      <span class="block w-full border-t border-solid border-black"/>

      <vs-sidebar-item class="2xl:cursor-auto outline-none">
        <template #icon>T</template>
        Tecnologias
      </vs-sidebar-item>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-terminal' ></i>
            </template>
            BackEnd
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="backend-fastapi" to="/fastapi">
          <template #icon>
            <i class='bx bxl-python' ></i>
          </template>
          FastAPI
        </vs-sidebar-item>

        <vs-sidebar-item id="backend-springboot" to="/springboot">
          <template #icon>
            <i class='bx bxl-spring-boot' ></i>
          </template>
          Spring Boot
        </vs-sidebar-item>

        <vs-sidebar-item id="backend-drogon" to="/drogon">
          <template #icon>
            <img :src="require(`../../src/assets/drogon.svg`)" class="w-6" alt="drogon">
          </template>
          Drogon
        </vs-sidebar-item>

        <vs-sidebar-item id="backend-express" to="/express">
          <template #icon>
            <img :src="require(`../../src/assets/express.svg`)" class="w-6" alt="express">
          </template>
          Express
        </vs-sidebar-item>

      </vs-sidebar-group>

      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-code-alt'></i>
            </template>
            FrontEnd
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="frontend-vuejs" to="/vuejs">
          <template #icon>
            <i class='bx bxl-vuejs'></i>
          </template>
          Vue.js
        </vs-sidebar-item>

        <vs-sidebar-item id="frontend-react" to="/react">
          <template #icon>
            <i class='bx bxl-react'></i>
          </template>
          React
        </vs-sidebar-item>

        <vs-sidebar-item id="backend-tailwindcss" to="/tailwindcss">
          <template #icon>
            <img :src="require(`../../src/assets/tailwindcss.png`)" class="w-6" alt="tailwind">
          </template>
          Tailwindcss
        </vs-sidebar-item>

      </vs-sidebar-group>

<!--      <vs-sidebar-group>-->
<!--        <template #header>-->
<!--          <vs-sidebar-item arrow>-->
<!--            <template #icon>-->
<!--              <i class='bx bx-data'></i>-->
<!--            </template>-->
<!--            DataBase-->
<!--          </vs-sidebar-item>-->
<!--        </template>-->

<!--        <vs-sidebar-item id="database-mysql" to="/mysql">-->
<!--          <template #icon>-->
<!--            <img :src="require(`../../src/assets/mysql.svg`)" class="w-6" alt="mysql">-->
<!--          </template>-->
<!--          MySQL-->
<!--        </vs-sidebar-item>-->

<!--        <vs-sidebar-item id="database-postgres" to="/postgres">-->
<!--          <template #icon>-->
<!--           <img :src="require(`../../src/assets/postgres.svg`)" class="w-6" alt="postgresql">-->
<!--          </template>-->
<!--          PostgreSQL-->
<!--        </vs-sidebar-item>-->

<!--      </vs-sidebar-group>-->

<!--      <vs-sidebar-group>-->
<!--        <template #header>-->
<!--          <vs-sidebar-item arrow>-->
<!--            <template #icon>-->
<!--              <i class='bx bx-bug'></i>-->
<!--            </template>-->
<!--            Outros-->
<!--          </vs-sidebar-item>-->
<!--        </template>-->

<!--        <vs-sidebar-item id="others-cpp" to="/cplusplus">-->
<!--          <template #icon>-->
<!--            <i class="bx bxl-c-plus-plus"></i>-->
<!--          </template>-->
<!--          System-C-->
<!--        </vs-sidebar-item>-->

<!--        <vs-sidebar-item id="others-verilog" to="/verilog">-->
<!--          <template #icon>-->
<!--            <img :src="require(`../../src/assets/verilog.svg`)" class="w-6" alt="verilog">-->
<!--          </template>-->
<!--          Verilog-->
<!--        </vs-sidebar-item>-->

<!--        <vs-sidebar-item id="others-vhdl" to="/vhdl">-->
<!--          <template #icon>-->
<!--            <img :src="require(`../../src/assets/vhdl.svg`)" class="w-6" alt="vhdl">-->
<!--          </template>-->
<!--          VHDL-->
<!--        </vs-sidebar-item>-->

<!--      </vs-sidebar-group>-->

      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar badge-color="danger" badge-position="top-right" >
            <i class='bx bx-bell' ></i>

            <template #badge>
              28
            </template>
          </vs-avatar>

          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>

export default {
  name: 'SideBarComponent',
  data: () => ({
    active: 'home',
  }),
  methods: {
  },
};
</script>

<style scoped>

</style>
