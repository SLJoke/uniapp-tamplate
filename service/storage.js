const getStorage = function (key) {
    let ret = uni.getStorageSync(key)
    return ret ? JSON.parse(ret) : ""
}

const setStorage = function (key, data) {
    uni.setStorageSync(key, JSON.stringify(data))
}

const clearStorage = () => {
	uni.clearStorageSync()
}
const userInfoKey = 'userinfo'
const openIdKey = 'openid'
const tokenKey = 'token'
const sessionKey = 'sessionKey'
const jsessionid = 'jsessionid'
const setSessionKey = function (data) {
    setStorage(sessionKey, data)
}
const getSessionKey = function () {
    return getStorage(sessionKey)
}
const setTokenStorage = (token) => {
    setStorage(tokenKey, token)
}
const getTokenStorage = () => {
    return getStorage(tokenKey)
}
const setJsessionId = (data) => {
    setStorage(jsessionid, data)
}
const getJsessionId = () => {
    return getStorage(jsessionid)
}
const setUserInfoStorage = (data) => {
	setStorage(userInfoKey, data)
}
const getUserInfoStorage = () => {
	return getStorage(userInfoKey)
}
export {
	setUserInfoStorage,
	getUserInfoStorage,
    getStorage,
    setStorage,
    clearStorage,
    setSessionKey,
    getSessionKey,
    setTokenStorage,
    getTokenStorage,
    setJsessionId,
    getJsessionId
}