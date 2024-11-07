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

    // So'rovga autentifikatsiya tokenini qo'shadigan interceptor
    this.client.interceptors.request.use(this.setAuthHeader)

    // Javobda xatolik bo'lsa, tokenni yangilaydigan interceptor
    this.client.interceptors.response.use(
      response => response,
      this.handleResponseError,
    )
  }

  // Access va refresh tokenlarini o'rnatish uchun metod
  setTokens(accessToken: string) {
    localStorage.setItem("token", accessToken)
  }

  // Tokenlarni tozalash uchun metod (masalan, chiqishda)
  clearTokens() {
    this.refreshToken = null
  }

  // Agar mavjud bo'lsa, headerga access token qo'shadi
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

  // 401 xatolarni tokenni yangilash orqali qayta ishlaydi
  private handleResponseError = async (error: any) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && this.refreshToken && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const response = await this.refreshAccessToken()
        if (response) {
          return this.client(originalRequest) // Yangi access token bilan so'rovni qayta yuboradi
        }
      }
      catch (err) {
        this.clearTokens()
        throw err // Bu yerda logout yoki boshqa usullarni qo'shishingiz mumkin
      }
    }
    return Promise.reject(error)
  }

  // Refresh token orqali access tokenni yangilaydi
  private async refreshAccessToken() {
    const response = await axios.post(`${baseURL}auth/token/refresh`, {
      refreshToken: this.refreshToken,
    })
    return response.data // Javob tarkibida { accessToken, refreshToken } mavjud deb qabul qilamiz
  }

  // HTTP metodlar: AbortablePromise bilan
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
  // Boshqa metodlarni ham xuddi shu tarzda AbortablePromise bilan qo'shing...
}

export default new HttpClient()
