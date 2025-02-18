import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const authUser = ref<{ email?: string; password?: string; username?: string }>({});
  const WelcomeMessage = ref('');
  const isLogin = ref(false);
  const loginError = ref('');

  async function login(data: { email: string; password: string; }) {
      const result = await fetch('/data.json');
      const users = await result.json();
      const user = users.find((user: any) => user.email == data.email);
      if (!user) {
        loginError.value = 'Utilisateur non trouvé';
        return;
      }
      if (user.password != data.password) {
        loginError.value = 'Mot de passe incorrect';
        return;
      }
      delete user.password;
      authUser.value = { ...user };
      WelcomeMessage.value = `Bienvenue ${authUser.value.username}`;
      isLogin.value = true;
      loginError.value = '';
  }

  function logout() {
    isLogin.value = false;
    WelcomeMessage.value = '';
  }

  return { WelcomeMessage, isLogin, login, logout, loginError };
});