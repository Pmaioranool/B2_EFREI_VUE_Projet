import { defineStore } from "pinia";
import { ref } from 'vue';

export const useAuthStore = defineStore(
    'auth', () => {
        const authUser = ref<{ email? : string, password? : string }>({}) // pas un ternaire
        const WelcomeMessage = ref('')
        const isLogin = ref<Boolean>(false)

        async function login(data:{email:string, password:string}) {
            const result = await fetch('/src/data.json');
            const users = await result.json();
            const user = users.find((user) => user.email == data.email) ;
            if (!user){
                return 'user non trouvé';
            }
            if (user.password != data.password) {
                return 'Mot de passe incorrect'
            }
            delete user.password
            authUser.value = { ...user } // ... sert a ouvrir un objet pour laisser le contenu
            WelcomeMessage.value = `Bienvenue ${authUser.value.email}`
            isLogin.value = true;
        }

        function logout() {
            isLogin.value = false;
            WelcomeMessage.value = ''
        }

        

        return { WelcomeMessage, isLogin, login, logout }
    }

)