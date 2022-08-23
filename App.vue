<script>
import Vue from 'vue'

export default {
  onLaunch: function (options) {
    // #ifdef MP
    this.checkUpdate()
    // #endif
    console.log("app onLaunch options: ", options)
    uni.getSystemInfo({
      success: function (e) {
        // #ifndef MP
        Vue.prototype.StatusBar = e.statusBarHeight
        if (e.platform == 'android') {
          Vue.prototype.CustomBar = e.statusBarHeight + 50
        } else {
          Vue.prototype.CustomBar = e.statusBarHeight + 45
        }
        // #endif

        // #ifdef MP-WEIXIN
        Vue.prototype.StatusBar = e.statusBarHeight
        let custom = wx.getMenuButtonBoundingClientRect()
        Vue.prototype.Custom = custom
        Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight
        // #endif		

        // #ifdef MP-ALIPAY
        Vue.prototype.StatusBar = e.statusBarHeight
        Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight
        // #endif
      }
    })
  },
  onShow: function (option) {
    console.log(uni.$u.os())
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {
    //小程序是否为最新版本
    checkUpdate() {
      let um = uni.getUpdateManager()
      um.onCheckForUpdate(res => {
        console.log("新版本返回值：", res)
        if (res.hasUpdate) {
          um.onUpdateReady(() => {
            uni.showModal({
              content: "新版本已准备好，是否需要重启应用",
              success: res => {
                if (res.confirm) {
                  um.applyUpdate()
                }
              }
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
// uView 基础样式
@import "@/uni_modules/uview-ui/index.scss";
</style>
