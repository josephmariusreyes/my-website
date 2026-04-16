<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import cvService from '../services/cvService'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])

const closeDialog = () => emit('update:modelValue', false)

const schema = yup.object({
  name: yup.string().required('Name is required'),
  contactNumber: yup.string().required('Contact number is required'),
  email: yup.string().email('Must be a valid email').required('Email is required'),
  message: yup.string().required('Message is required'),
})

const { handleSubmit, resetForm } = useForm({ validationSchema: schema })

const { value: name, errorMessage: nameError } = useField('name')
const { value: contactNumber, errorMessage: contactNumberError } = useField('contactNumber')
const { value: email, errorMessage: emailError } = useField('email')
const { value: message, errorMessage: messageError } = useField('message')

const submitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(null)

const onSubmit = handleSubmit(async (values) => {
  submitting.value = true
  submitError.value = null
  try {
    await cvService.sendMessage(values)
    submitSuccess.value = true
    resetForm()
  } catch (err) {
    submitError.value = 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
})

const handleClose = () => {
  resetForm()
  submitSuccess.value = false
  submitError.value = null
  closeDialog()
}
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    max-width="520"
    scrollable
    @update:model-value="handleClose"
  >
    <v-card>
      <v-card-title class="dialog-title">
        Contact Me
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" size="small" @click="handleClose" />
      </v-card-title>

      <!-- Phone number -->
      <v-card-text class="contact-body">
        <p class="contact-label">Call or text me directly:</p>
        <a href="tel:+639673681493" class="phone-link">
          <v-icon size="18" class="mr-1">mdi-phone</v-icon>
          +63 967 368 1493
        </a>

        <v-divider class="my-4" />

        <!-- Success state -->
        <v-alert
          v-if="submitSuccess"
          type="success"
          variant="tonal"
          class="mb-4"
          title="Message sent!"
          text="Thanks for reaching out. I'll get back to you soon."
          closable
          @click:close="submitSuccess = false"
        />

        <!-- Error state -->
        <v-alert
          v-if="submitError"
          type="error"
          variant="tonal"
          class="mb-4"
          :text="submitError"
          closable
          @click:close="submitError = null"
        />

        <p class="contact-label">Or send me a message:</p>

        <form @submit.prevent="onSubmit">
          <v-text-field
            v-model="name"
            label="Name"
            variant="outlined"
            density="compact"
            class="mb-1"
            :error-messages="nameError"
          />

          <v-text-field
            v-model="contactNumber"
            label="Contact Number"
            variant="outlined"
            density="compact"
            class="mb-1"
            inputmode="tel"
            :error-messages="contactNumberError"
          />

          <v-text-field
            v-model="email"
            label="Email"
            variant="outlined"
            density="compact"
            class="mb-1"
            inputmode="email"
            :error-messages="emailError"
          />

          <v-textarea
            v-model="message"
            label="Message"
            variant="outlined"
            density="compact"
            rows="4"
            class="mb-1"
            :error-messages="messageError"
          />

          <v-btn
            type="submit"
            color="indigo"
            block
            :loading="submitting"
            class="mt-1"
          >
            Send Message
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.dialog-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 1.25rem 0.5rem;
}

.contact-body {
  padding: 0.5rem 1.25rem 1.25rem;
}

.contact-label {
  font-size: 0.875rem;
  color: var(--text-body, #6b7280);
  margin-bottom: 0.4rem;
}

.phone-link {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.05rem;
  font-weight: 600;
  color: #6366f1;
  text-decoration: none;
  gap: 0.25rem;
}

/* Fallback for browsers without gap support */
@supports not (gap: 0.25rem) {
  .phone-link > * + * {
    margin-left: 0.25rem;
  }
}

.phone-link:hover {
  text-decoration: underline;
}
</style>
