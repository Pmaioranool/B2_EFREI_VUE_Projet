<template>
    <form @submit.prevent="handleSubmit">
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
    <router-link v-if="isLoginPage" to="/register">Vous n'avez pas de compte ? Inscrivez-vous ! </router-link>
</template>

<script lang="ts" setup>
import {reactive, computed} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import ButtonComponent from '../components/ButtonComponent.vue';
import FieldComponent from '../components/FieldComponent.vue';

const store = useAuthStore();

const router = useRouter();

const user = reactive({
  email: '',
  password: '',
}) as any;


const isLoginPage = computed(() => {return useRoute().path === '/login'})



const fields = [
{
    id:"email",
    type:"email",
    placeholder: "Entre votre Email",
},
{
    id:"password",
    type:"password",
    placeholder:"votre mot de passe",
}
]


const buttons = [
{
    id: "submit-button",
    type: "submit" as 'submit',
    textContent: "Se Connecter",
}

]

const handleSubmit = async (event:any) => {
    inputHandler(event);
    await store.login(user);
    router.push('/')

}

/*
    "email": "user1@example.com",
    "password": "Pass@1234"
*/


const inputHandler = (event:any) => {
    user[event.target.id]  == event.target.value
}


const isFormValid = computed(() =>{
    
    return user.username !== '' &&  user.password !=='';
    
});
</script >
<style>

</style>