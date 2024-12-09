<script setup lang="ts">
  import { EyeIcon, LockClosedIcon } from "@heroicons/vue/24/solid"
  import { ErrorMessage, Field, Form, useForm } from "vee-validate"
  import * as yup from "yup"
  import AuthService from "@/service/public/auth-service"
  import httpClient from "@/service/private/http-client"

  const router = useRouter()

  const isPasswordShown = ref<boolean>(false)

  function toggleEye() {
    isPasswordShown.value = !isPasswordShown.value
  }

  const schema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required().min(6, "password must be at least 6 characters"),
  })

  useForm({
    validationSchema: schema,
  })

  async function onSubmit(values: Record<string, any>) {
    try {
      const payload = {
        username: values.username,
        password: values.password,
      }
      const { data } = await AuthService.login(payload)
      const { access_token, refresh_token } = data
      httpClient.setTokens(access_token, refresh_token)
      router.push("/todos")
    }
    catch (error: any) {
      console.error(error)
    }
  }
</script>

<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Log in to your account
        </h2>
      </div>
      <Form v-slot="{ handleSubmit }" class="mt-8 space-y-6" :validation-schema="schema">
        <form @submit.prevent="handleSubmit($event, onSubmit)">
          <div class="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="username" class="sr-only">Username</label>
              <Field
                id="username"
                placeholder="username"
                name="username"
                type="text"
                autocomplete="username"
                required
                class="relative block w-full appearance-none rounded-none rounded-t-md
              border border-gray-300 px-3 py-2 text-gray-900
             placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
             focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="username" class="text-red-500 text-sm" />
            </div>

            <div>
              <label for="password" class="sr-only">Password</label>
              <div class="relative">
                <button class="absolute right-4 bottom-2 z-20" type="button" @click="toggleEye()">
                  <EyeIcon class="size-5" />
                </button>
                <Field
                  id="password"
                  name="password"
                  :type="isPasswordShown ? 'text' : 'password'"
                  autocomplete="current-password"
                  required
                  class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <ErrorMessage name="password" class="text-red-500 text-sm" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              >
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div class="text-sm p-2">
              <RouterLink to="/sign-up" class="font-medium text-indigo-600 hover:text-indigo-500">
                Registration
              </RouterLink>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Log in
            </button>
          </div>
        </form>
      </Form>
    </div>
  </div>
</template>
