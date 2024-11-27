export default defineNuxtRouteMiddleware((to, from) => {
  const { userIsAuthenticated } = useAuth()
  const { showAlert } = useAlert()

  if (to.path === '/products' && !userIsAuthenticated.value) {
    const title = 'Unauthorized'
    const message = 'You need to login to access this page'
    showAlert(title, message)
    return abortNavigation()
  }
})
