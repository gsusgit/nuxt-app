import { ref } from 'vue'

export const useAuth = () => {
  const userIsAuthenticated = ref(false)

  if (process.client) {
    if (localStorage.getItem('loggedIn') === 'true') {
      userIsAuthenticated.value = true
    }
  }

  return {
    userIsAuthenticated
  }
}
