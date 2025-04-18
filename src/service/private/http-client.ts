import type { AxiosInstance, AxiosRequestConfig } from "axios"
import axios from "axios"
import { AbortablePromise } from "simple-abortable-promise"

const baseURL = import.meta.env.VITE_API_BASE_URL

class HttpClient {
  private client: AxiosInstance
  private refreshToken: string | null = null

  constructor() {
    this.client = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })

    this.client.interceptors.request.use(this.setAuthHeader)

    this.client.interceptors.response.use(
      response => response,
      this.handleResponseError,
    )
  }

  setTokens(accessToken: string, refreshToken: string) {
    localStorage.setItem("token", accessToken)
    localStorage.setItem("refreshToken", refreshToken)
  }

  clearTokens() {
    this.refreshToken = null
  }

  private setAuthHeader = (config: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem("token")
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
    return config
  }

  private handleResponseError = async (error: any) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && this.refreshToken && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const response = await this.refreshAccessToken()
        if (response) {
          return this.client(originalRequest)
        }
      }
      catch (err) {
        this.clearTokens()
        throw err
      }
    }
    return Promise.reject(error)
  }

  private async refreshAccessToken() {
    const response = await axios.post(`${baseURL}auth/token/refresh`, {
      refreshToken: this.refreshToken,
    })
    return response.data
  }

  post(url: string, data?: any, config?: any): AbortablePromise<any> {
    return new AbortablePromise<any>((resolve, reject, abortSignal) => {
      this.client.post(url, data, { signal: abortSignal, ...config })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  get(url: string, params?: any, config?: any): AbortablePromise<any> {
    return new AbortablePromise<any>((resolve, reject, abortSignal) => {
      this.client.get(url, { params, signal: abortSignal, ...config })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  patch(url: string, data?: any): AbortablePromise<any> {
    return new AbortablePromise<any>((resolve, reject, abortSignal) => {
      this.client.patch(url, data, { signal: abortSignal })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }

  put(url: string, data?: any, params?: any): AbortablePromise<any> {
    return new AbortablePromise<any>((resolve, reject, abortSignal) => {
      this.client.put(url, data, { params, signal: abortSignal })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }

  head(url: string, params?: any): AbortablePromise<any> {
    return new AbortablePromise<any>((resolve, reject, abortSignal) => {
      this.client.head(url, { params, signal: abortSignal })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }

  delete(url: string, config?: any): AbortablePromise<any> {
    return new AbortablePromise<any>((resolve, reject, abortSignal) => {
      this.client.delete(url, { ...config, signal: abortSignal })
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }
}

export default new HttpClient()
