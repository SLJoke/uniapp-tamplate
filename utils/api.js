import request from "./request.js"
import { baseApiUrl } from "./config.js"

// method默认get
const api = {
	login: {
		url: "/api/login/checkLogin"
	},
	bindWxInfo: {
		url: "/api/login/bandInfo"
	},
	phoneLogin: {
		url: "/api/login/codeLogin"
	},
	phoneCode: {
		url: "/api/pub/obtain"
	},
	getUser: {
		url: "/api/user/info"
	}
}

// export const uploadImg = `${baseApiUrl}${api.uploadImg.url}` // 上传图片完整地址

const ApiGloabal = {}
for (const key in api) {
	const _obj = api[key]
	ApiGloabal[key] = async (data, config) => {
		try {
			if (String(_obj.method).toUpperCase() === 'POST') {
				return request.post(api[key].url, data,key)
			} else {
				return request.get(api[key].url, data,key)
			}
		} catch (error) {
			console.error(error)
		}
	}
}

export default ApiGloabal