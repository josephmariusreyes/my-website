import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCvStore = defineStore('cvDetails', () => {
  const cvDetails = ref(null)

  function setCvDetails(data) {
    cvDetails.value = data
  }

  return { cvDetails, setCvDetails }
})
