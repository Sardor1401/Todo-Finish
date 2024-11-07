import type { AbortablePromise } from "simple-abortable-promise"
import httpClient from "@/service/public/http-client"
import { LOGIN, REGISTER } from "@/service/public/endpoints"

export interface RegisterPayload {
  username: string
  first_name: string
  last_name: string
  password: string
}
export type LoginPayload = Omit<RegisterPayload, "first_name" | "last_name">

class AuthService {
  url: string
  constructor() {
    this.url = (REGISTER.endsWith("/")) ? REGISTER : `${REGISTER}/`
  }

  register(payload: RegisterPayload): AbortablePromise<any> {
    return httpClient.post(REGISTER, {}, { params: payload })
  }

  login(payload: LoginPayload): AbortablePromise<any> {
    return httpClient.post(LOGIN, payload)
  }
}

export default new AuthService()
