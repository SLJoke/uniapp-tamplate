import store from '@/store'
import { baseApiUrl } from './config.js'
import { clearStorage, getTokenStorage } from '../service/storage.js'

class Request {
  constructor(parms) {
    this.withBaseURL = parms.withBaseURL
    this.baseURL = parms.baseURL
  }
  get(url, data) {
    return this.request('GET', url, data)
  }
  post(url, data) {
    return this.request('POST', url, data)
  }
  put(url, data) {
    return this.request('PUT', url, data)
  }
  async request(method, url, data) {
    uni.showLoading({ title: '加载中' })
    const vm = this
    try {
      const token = getTokenStorage() || ''
      const [error, res] = await uni.request({
        url: vm.withBaseURL ? vm.baseURL + url : url,
        data,
        method,
        header: {
          // 'content-type': 'application/x-www-form-urlencoded',
          // 'Cookie': `token=${token};${getJsessionId()}`
        }
      })
      // if (res && res.header['Set-Cookie']) {
      //     const cookie = res.header['Set-Cookie']
      //     setJsessionId(cookie.split(';')[0] || '')
      // }
      if (!error && (res.statusCode === 200 || res.statusCode === 204 || res.statusCode === 201)) {
        uni.hideLoading()
        return [null, res.data]
      } else {
        uni.hideLoading()
        console.log(url, error)
        handleError(error.statusCode, url)
        return [error, undefined]
      }
    } catch (error) {
      uni.hideLoading()
      return [error, undefined]
    }
  }
}

const errText = {
  403: "请先登录",
  401: "请先登录!",
  404: "请求的资源不存在!",
  500: "系统出现异常，请稍后再试!"
}

function handleError(errno, url) {
  // if (url === "/login/login") {
  //     uni.showToast({
  //         title: "系统繁忙，请稍后再试!",
  //         icon: 'none'
  //     })
  //     return;
  // }
  // if (errno in errText) {
  //     uni.showToast({
  //         title: errText[errno],
  //         icon: 'none'
  //     })
  // } else {
  //     uni.showToast({
  //         title: '系统繁忙，请稍后再试!',
  //         icon: 'none'
  //     })
  // }

  if (errno === 401) {
    // 先清除本地缓存
    clearStorage()
    store.commit('setToken', '')
    store.commit('setUserInfo', {})
    // setTimeout(() => {
    //     uni.navigateTo({
    //         url: '/pages/login/index'
    //     })
    // }, 500)
  }
}

const request = new Request({
  baseURL: baseApiUrl,
  withBaseURL: true
})

export default request
