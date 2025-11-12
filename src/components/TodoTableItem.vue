<script setup lang="ts">
  import type { Todo } from "@/models/todo"
  import todosService from "@/service/private/todos-service"

  defineProps<{
    todo: Todo
  }>()

  const emits = defineEmits<{
    (event: "delete"): void
  }>()

  const shown = ref<boolean>(false)

  function close() {
    shown.value = false
  }

  async function editTodo(_todo: Todo) {
    shown.value = true
  }

  async function deleteTodo(id: string) {
    try {
      await todosService.deleteTodo(id)
      emits("delete")
    }
    catch (error) {
      console.error(error)
    }
  }
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
      <h1>{{ todo.title }}</h1>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <h1>{{ todo.description }}</h1>
    </td>
    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
      <a href="#" class="text-indigo-600 hover:text-indigo-900" @click.prevent="editTodo(todo)">Edit</a>
      <a href="#" class="text-red-600 ml-2 hover:text-red-900" @click.prevent="deleteTodo(todo.id)">Delete</a>
    </td>
  </tr>

  <FesModal
    v-model="shown"
  >
    <div class="w-[44rem]">
      <TodoUpdate
        :todo="todo"
        @submit="close"
      />
    </div>
    <template #actions />
  </FesModal>
</template>
