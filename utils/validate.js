// /**
//  * Created by jiachenpan on 16/11/18.
//  */
export const usernameReg = /^[a-zA-Z0-9]{2,16}$/
// 真实姓名校验
export const isrealNamePattern = /^[\u4E00-\u9FA5]{1,16}(·[\u4E00-\u9FA5]{1,16})*$/
// 邮箱正则
export const emailPattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
// 手机号正则
export const phonePattern = /^1[3|4|5|6|7|8|9][0-9]{9}$/
// 中文正则
export const chinesePattern = /[\u4E00-\u9FA5]/
// 时间正则 2018-01-01
export const timerPattern = /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/
// 身份证正则
export const idCardPattern = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
// 密码正则
export const passwordPattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
// 只含有汉字、数字、字母：
export const namePattern = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/
// 包含汉子 字母
export const leverCardNamePattern = /^[a-zA-Z\u4e00-\u9fa5]+$/
// 正数 两位小数
export const fixed2Pattern = /^(?!(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/
// 正数 一位小数
export const fixed1Pattern = /^(?!(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,1})?$/
// 正整数
export const integerPattern = /^[0-9]*[1-9][0-9]*$/

// export const validateInteger = (rule, value, callback) => {
// 	if (value !== '' && value !== null && !integerPattern.test(value)) {
// 		callback(new Error('请输入正整数'))
// 	} else {
// 		callback()
// 	}
// }

// export const validateFixed1 = (rule, value, callback) => {
// 	if (value !== '' && value !== null && !fixed1Pattern.test(value)) {
// 		callback(new Error('请输入正数，最多保留1位小数'))
// 	} else {
// 		callback()
// 	}
// }

// export const validateFixed2 = (rule, value, callback) => {
// 	if (value !== '' && value !== null && !fixed2Pattern.test(value)) {
// 		callback(new Error('请输入正数，最多保留两位小数'))
// 	} else {
// 		callback()
// 	}
// }

// export const validateLeverCardName = (rule, value, callback) => {
// 	if (value && !leverCardNamePattern.test(value)) {
// 		callback(new Error('请输入中文或字母'))
// 	} else {
// 		callback()
// 	}
// }

// export const validateName = (rule, value, callback) => {
// 	if (value && !namePattern.test(value)) {
// 		callback(new Error('请输入中英文及数字'))
// 	} else {
// 		callback()
// 	}
// }
// export const validatePassword = (rule, value, callback) => {
// 	if (value && !passwordPattern.test(value)) {
// 		callback(new Error('请输入6-20位字母和数字组成的密码'))
// 	} else {
// 		callback()
// 	}
// }
// // 校验是否是中文
// export const validateChinese = (rule, value, callback) => {
// 	if (!chinesePattern.test(value)) {
// 		callback(new Error('请输入中文'))
// 	} else {
// 		callback()
// 	}
// }

// export const validateIdCard = (rule, value, callback) => {
// 	if (value && !idCardPattern.test(value)) {
// 		callback(new Error('请输入正确的身份证号码'))
// 	} else {
// 		callback()
// 	}
// }

// export const validateUserName = (rule, value, callback) => {
// 	if (!usernameReg.test(value)) {
// 		callback(new Error('请输入2-16位字母或数字'))
// 	} else {
// 		callback()
// 	}
// }
// export const validatePhone = (rule, value, callback) => {
// 	if (value && !phonePattern.test(value)) {
// 		callback(new Error('请输入正确的手机号'))
// 	} else {
// 		callback()
// 	}
// }
// export const validateNoMustEmail = (rule, value, callback) => {
// 	if (value && !emailPattern.test(value)) {
// 		callback(new Error('请输入正确的邮箱'))
// 	} else {
// 		callback()
// 	}
// }
// /* 合法uri */
// export function validateURL(textval) {
// 	const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
// 	return urlregex.test(textval)
// }

// /* 小写字母 */
// export function validateLowerCase(str) {
// 	const reg = /^[a-z]+$/
// 	return reg.test(str)
// }

// /* 大写字母 */
// export function validateUpperCase(str) {
// 	const reg = /^[A-Z]+$/
// 	return reg.test(str)
// }

// /* 大小写字母 */
// export function validatAlphabets(str) {
// 	const reg = /^[A-Za-z]+$/
// 	return reg.test(str)
// }
// /**
//  * 判断是否为空
//  */
export function validatenull(val) {
	if (typeof val === 'boolean') {
		return false
	}
	if (val instanceof Array) {
		if (val.length === 0) return true
	} else if (val instanceof Object) {
		if (JSON.stringify(val) === '{}') return true
	} else {
		if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true
		return false
	}
	return false
}
