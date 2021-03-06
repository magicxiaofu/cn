import Axios from 'axios'
import API from './resources'

export default {
  // 登陆
  login (data) {
    return Axios.post(API.login, data)
  },
  // 注册
  register (data) {
    return Axios.post(API.register, data)
  },
  // 获取验证码
  getCaptcha (data) {
    return Axios.post(API.getCaptcha, data)
  },
  // 获取目录数据和count
  getDirs (data) {
    return Axios.post(API.getDirs, data)
  },
  // 更新目录到后台
  updateDirs (data) {
    return Axios.post(API.updateDirs, data)
  },
  // 增加文件
  addFile (data) {
    return Axios.post(API.addFile, data)
  },
  // 获取文件的内容
  getFileContent (data) {
    return Axios.post(API.getFileContent, data)
  },
  // 保存文件内容
  updataFile (data) {
    return Axios.post(API.updataFile, data)
  },
  // newpad
  newPad (data) {
    return Axios.post(API.newPad, data)
  },
  getPads (data) {
    return Axios.post(API.getPads, data)
  },
  // 获取分享链接
  getShareUrl (data) {
    return Axios.post(API.getShareUrl, data)
  },
  // getsharepage
  getSharePage (data) {
    return Axios.post(API.getSharePage, data)
  },
  // 举报
  complaint (data) {
    return Axios.post(API.complaint, data)
  },
  // deleltePad
  deleltePad (data) {
    return Axios.post(API.deletePad, data)
  }
}
