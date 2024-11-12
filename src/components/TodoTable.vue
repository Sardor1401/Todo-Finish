<script setup lang="ts">
  import type { Todo } from "@/models/todo"
  import todosService from "@/service/private/todos-service"

  const todos = ref<Todo[]>([])
  const shown = ref<boolean>(false)

  function close() {
    shown.value = false
  }

  async function getTodos() {
    try {
      const { data } = await todosService.getTodos()
      todos.value = data
    }
    catch (error: any) {
      console.error(error)
    }
  }

  function onDelete(id: string) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  onMounted(getTodos)
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">
          Todos
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, country
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto" @click="shown = true">
          Add todo
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full max-w-sm py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Player Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Player Country
                  </th>
                  <th scope="col" class="relative text-right py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only text-sm font-semibold text-gray-900">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <TodoTableItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete="onDelete(todo.id)" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <FesModal
    v-model="shown"
  >
    <div class="w-[44rem]">
      <AddTodo
        @submit="close"
      />
    </div>
    <template #actions />
  </FesModal>
</template>
