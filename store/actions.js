import { setUserInfoStorage } from '@/service/storage'
import httpReq from "@/utils/api"

let globalPromise = null

export default {
  async login(context, query = false) {
    let reFresh = false
    let openid = ''
    if (typeof query == 'boolean') {
      reFresh = query
    } else {
      reFresh = query.isrefresh
      openid = query.openid
    }
    if (reFresh) {
      globalPromise = null
    }
    if (globalPromise !== null) {
      console.log('vuex login has GlobalPromise')
      return globalPromise
    }
    console.log('vuex login start', openid)
    const fn = async () => {
      try {
        uni.showLoading({
          title: 'Loading'
        })
        console.log('vuex login GlobalPromise')
        const [error, res] = await uni.login({
          provider: 'weixin'
        })
        if (error) {
          uni.hideLoading()
          return
        }
        console.log('login code:', res.code)
        const [err, res1] = await httpReq.login({
          code: res.code,
          openid_x: openid
        })
        uni.hideLoading()
        if (err) return
        
        context.commit('setUserInfo', res1.data.userinfo)
        setUserInfoStorage(res1.data.userinfo)

        return res1.data.userinfo
      } catch (e) {
        uni.hideLoading()
        globalPromise = null
        return e
      }
    }
    globalPromise = fn()
    // 接口请求报错过后重置globalPromise 下次继续发送正常请求
    globalPromise.catch(() => {
      globalPromise = null
    })
    return globalPromise
  },
  async getUser({ commit }) {
    // 获取用户信息
    const [err, res] = await httpReq.getUser()
    if (err || (res && res.code !== 200)) return
    setUserInfoStorage(res.data)
    commit('setUserInfo', res.data)
  }
}