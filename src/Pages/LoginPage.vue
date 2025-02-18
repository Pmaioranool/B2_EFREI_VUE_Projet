<template>
  <h1>Login page</h1>
  <main>
    <section>
      <form @submit.prevent="submitHandler">
        <section>
          <FieldComponent
            v-for="field in fields"
            :key="field.id"
            :data="field"
            v-model="field.vModel"
          />
        </section>
        <section>
          <ButtonComponent
            v-for="button in buttons"
            :key="button.id"
            :data="button"
          />
        </section>
      </form>
    </section>
  </main>
</template>
<script setup lang="ts">
import FieldComponent from "../components/FieldsComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import { reactive, watch, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const fields = [
  {
    id: "username",
    type: "text",
    placeholder: "username",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
  },
];

const buttons = [
  {
    id: "login",
    textContent: "Login",
    type: "submit" as "submit",
    disabled: false,
    class: "button is-dark",
  },
  {
    id: "reset",
    textContent: "Reset",
    type: "reset" as "reset",
    disabled: false,
    class: "button is-danger is-dark",
  },
];
</script>
