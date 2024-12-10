const state = reactive({
  title: '',
  message: '',
  show: false
})

export const useAlert = () => {
  const showAlert = (newTitle: string, newMessage: string) => {
    state.title = newTitle
    state.message = newMessage
    state.show = true
    setTimeout(() => {
      state.show = false
    }, 3000)
  }

  return {
    title: computed(() => state.title),
    message: computed(() => state.message),
    show: computed(() => state.show),
    showAlert
  }
}
