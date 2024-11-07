<script setup lang="ts">
  import type { RegisterPayload } from "@/service/public/auth-service"
  import AuthService from "@/service/public/auth-service"

  const payload = reactive<RegisterPayload>({
    username: "",
    first_name: "",
    last_name: "",
    password: "",
  })

  async function onSubmit() {
    try {
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
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div class="ml-0">
            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
            <div class="mt-1">
              <input id="username" v-model="payload.username" name="username" placeholder="username" type="text" autocomplete="username" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="firstname" class="block text-sm font-medium text-gray-700">First Name</label>
            <div class="mt-1">
              <input id="firstname" v-model="payload.first_name" name="firstname" placeholder="first_name" type="text" autocomplete="firstname" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="lastname" class="block text-sm font-medium text-gray-700">Last Name</label>
            <div class="mt-1">
              <input id="lastname" v-model="payload.last_name" name="lastname" placeholder="last_name" type="text" autocomplete="lastname" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input id="password" v-model="payload.password" placeholder="password" name="password" type="password" autocomplete="current-password" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
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
      </div>
    </div>
  </div>
</template>
