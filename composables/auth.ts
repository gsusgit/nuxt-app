import { ref } from 'vue'

export const useAuth = () => {
  const userIsAuthenticated = ref(true)

  if (process.client) {
    if (localStorage.getItem('loggedIn') === 'true') {
      userIsAuthenticated.value = true
    } else {
      userIsAuthenticated.value = false
    }
  }

  return {
    userIsAuthenticated
  }
}
