<template>
    <form>
        <section>
            <FieldComponent
            v-for="field in fields"
            :key="field.id"
            :data="field"
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
    <router-link v-if="!isLoginPage" to="/login">Vous avez déjà un compte ? Connectez-vous ! </router-link>
</template>

<script setup lang="ts">
import FieldComponent from '../components/FieldComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const isLoginPage = computed(() => {return useRoute().path === '/login'})


const fields = [
{
    id:"pseudo",
    type:"text",
    placeholder: "Entre votre Pseudo",
},
{
    id:"email",
    type:"email",
    placeholder: "Entre votre Email",
},
{
    id:"tel",
    type:"tel",
    placeholder: "+33...",
},
{
    id:"mdp",
    type:"password",
    placeholder: "Entre votre mot de passe",
},
{
    id:"verifmdp",
    type:"password",
    placeholder:"Entrer à nouveau votre mot de passe",
}
]

const buttons = [
    {
        id: "submit-button",
        type: "submit" as 'submit',
        textContent: "Se Connecter",
    }
]

</script>