<!-- eslint-disable ts/no-use-before-define -->
<script setup lang="ts">
  import { ref } from "vue"
  import { Field, Form, useForm } from "vee-validate"
  import * as yup from "yup"
  import type { Todo } from "@/models/todo"
  import todosService from "@/service/private/todos-service"

  const props = defineProps<{
    todo: Todo
  }>()

  const emits = defineEmits<{
    (e: "submit"): void
  }>()
  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    done: yup.boolean().default(false),
  })

  useForm({
    validationSchema: schema,
  })

  const todos = ref<Todo[]>([])

  async function updateTodo(values: Record<string, any>) {
    const payload: Todo = {
      ...todoData.value,
      ...values,
    }
    try {
      const { data } = await todosService.updateTodo(payload.id, payload)
      const index = todos.value.findIndex(todo => todo.id === payload.id)
      if (index !== -1) {
        todos.value[index] = data
      }
      emits("submit")
    }

    catch (error) {
      console.error("Failed to update todo:", error)
    }
  }

  const todoData = ref<Todo>({
    id: props.todo.id,
    title: props.todo.title,
    description: props.todo.description,
    done: props.todo.done,
  })
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Update Todo for table
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form v-slot="{ handleSubmit }" class="mt-8 space-y-6" :validation-schema="schema">
          <form action="*" method="POST" @submit.prevent="handleSubmit($event, updateTodo)">
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700">Football player</label>
              <div class="mt-2">
                <Field
                  id="title"
                  v-model="todoData.title"
                  name="title"
                  placeholder="player name"
                  type="text"
                  autocomplete="title"
                  required
                  class="block w-full appearance-none rounded-md border border-gray-300
              px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500
              focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="description" class="block text-sm mt-1 font-medium text-gray-700">Player country</label>
              <div class="mt-2">
                <Field
                  id="description"
                  v-model="todoData.description"
                  placeholder="player country"
                  name="description"
                  type="text"
                  autocomplete="description"
                  required
                  class="block w-full appearance-none rounded-md border
              border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm
              focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="flex items-center mt-2">
              <Field
                id="done"
                v-model="todoData.done"
                name="done"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label for="done" class="ml-2 block text-sm text-gray-900">Submit</label>
            </div>

            <div>
              <button type="submit" class="flex mt-2 w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Update todo
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  </div>
</template>
