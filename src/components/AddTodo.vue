<script setup lang="ts">
  import { ErrorMessage, Field, Form, useForm } from "vee-validate"
  import * as yup from "yup"
  import TodosService from "@/service/private/todos-service"

  const emits = defineEmits<{
    (e: "submit"): void
  }>()

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    done: yup.boolean(),
  })

  useForm({
    validationSchema: schema,
  })

  async function onSubmit(values: Record<string, any>) {
    try {
      const payload = {
        title: values.title,
        description: values.description,
        done: values.done,
      }
      await TodosService.createTodo(payload)
      emits("submit")
      location.reload()
    }
    catch (error: any) {
      console.error(error)
    }
  }
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Add Todo for table
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form v-slot="{ handleSubmit }" class="mt-8 space-y-6" :validation-schema="schema">
          <form class="space-y-6" @submit.prevent="handleSubmit($event, onSubmit)">
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700">Football player</label>
              <div class="mt-1">
                <Field
                  id="title"
                  name="title"
                  placeholder="Player name"
                  type="text"
                  autocomplete="title"
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="title" class="text-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label for="description" class="block text-sm font-medium text-gray-700">Player country</label>
              <div class="mt-1">
                <Field
                  id="description"
                  name="description"
                  placeholder="Player country"
                  type="text"
                  autocomplete="description"
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage name="description" class="text-red-500 text-sm" />
              </div>
            </div>

            <div class="flex items-center">
              <Field
                id="done"
                name="done"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label for="done" class="ml-2 block text-sm text-gray-900">Done</label>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600
                py-2 px-4 text-sm font-medium text-white shadow-sm
                hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500
                focus:ring-offset-2"
              >
                Create todo
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  </div>
</template>
