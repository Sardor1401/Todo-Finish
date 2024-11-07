import type { AbortablePromise } from "simple-abortable-promise"
import httpClient from "@/service/private/http-client"
import { ADDTODO, TODOS } from "@/service/public/endpoints"

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
}

export default new TodosService()
