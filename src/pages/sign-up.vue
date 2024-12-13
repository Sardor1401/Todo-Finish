<script setup lang="ts">
  import { ErrorMessage, Field, Form, useForm } from "vee-validate"
  import * as yup from "yup"
  import AuthService from "@/service/public/auth-service"
  import { INDEX } from "@/service/public/endpoints"

  const router = useRouter()

  const schema = yup.object().shape({
    username: yup.string().required("username is required"),
    first_name: yup.string().required("first_name is required"),
    last_name: yup.string().required("last_name is required"),
    password: yup.string().required().min(6, "password must be at least 6 characters"),
  })

  useForm({
    validationSchema: schema,
  })

  async function onSubmit(values: Record<string, any>) {
    try {
      const payload = {
        username: values.username,
        first_name: values.first_name,
        last_name: values.last_name,
        password: values.password,
      }
      router.push(INDEX)
      await AuthService.register(payload)
    }
    catch (error: any) {
      console.error(error)
    }
  }
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Sign in to create account
      </h2>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form v-slot="{ handleSubmit }" class="mt-8 space-y-6" :validation-schema="schema">
          <form class="space-y-6" @submit.prevent="handleSubmit($event, onSubmit)">
            <div class="ml-0">
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <div class="mt-1">
                <Field
                  id="username"
                  name="username"
                  placeholder="username"
                  type="text"
                  autocomplete="username"
                  required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="username" class="text-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label for="first_name" class="block text-sm font-medium text-gray-700">First Name</label>
              <div class="mt-1">
                <Field
                  id="first_name"
                  name="first_name"
                  placeholder="first_name"
                  type="text"
                  autocomplete="firstname"
                  required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="first_name" class="text-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label for="last_name" class="block text-sm font-medium text-gray-700">Last Name</label>
              <div class="mt-1">
                <Field
                  id="last_name"
                  name="last_name"
                  placeholder="last_name"
                  type="text"
                  autocomplete="last_name"
                  required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="last_name" class="text-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="mt-1">
                <Field
                  id="password"
                  placeholder="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="password" class="text-red-500 text-sm" />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>

              <div class="text-sm">
                <RouterLink to="/" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Login
                </RouterLink>
              </div>
            </div>

            <div>
              <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign up
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  </div>
</template>
