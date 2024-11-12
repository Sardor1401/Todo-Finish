import type { AbortablePromise } from "simple-abortable-promise"
import httpClient from "@/service/private/http-client"
import { ADDTODO, TODOS } from "@/service/public/endpoints"
import type { Todo } from "@/models/todo"

export interface TodosPayload {
  title: string
  description: string
  done: boolean
}

class TodosService {
  url: string
  constructor() {
    this.url = (ADDTODO.endsWith("/")) ? ADDTODO : `${ADDTODO}/`
  }

  createTodo(payload: TodosPayload): AbortablePromise<any> {
    return httpClient.post(ADDTODO, payload)
  }

  getTodos(): AbortablePromise<any> {
    return httpClient.get(TODOS)
  }

  deleteTodo(id: string): AbortablePromise<any> {
    return httpClient.delete(`${TODOS}${id}`)
  }

  updateTodo(id: string, updatedTodo: Todo): AbortablePromise<any> {
    return httpClient.patch(`${TODOS}${id}`, updatedTodo)
  }
}

export default new TodosService()
