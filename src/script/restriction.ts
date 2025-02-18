import { useAuthStore } from "../stores/auth.ts";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

if (authStore.isLogin === false) {
  authStore.loginError = "connecter vous";
  router.push("/");
}