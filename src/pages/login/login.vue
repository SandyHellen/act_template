<template>
<div class="w1190">
<header class="site-header clearfix">
    <div class="site-area">
        <div class="site-header-lt">
            <a class="site-index-link" href="/">
                <img class="site-logo" src="http://img.tqmall.com/tqmall_v4/logo.png?t=20180101">
            </a>
        </div>
        <div class="site-header-rt">
            <span class="site-hotline">
                <i class="tqmall-iconfont site-hotline__icon"></i>400-9937-288
            </span>
        </div>
    </div>
</header>
<div id="content" class="loginIndexContent">
        <div class="content-wrapper">
            <div class="mainbody cl">
                <div class="login-box">
                    <div class="login-box1">
                        <h3><p class="login-title">登录</p><p class="title-tips">全站无需注册，手机号即可登录</p></h3>
                        <form id="ajaxLoginForm">
                            <input type="hidden" name="act" value="mobile_login">
                            <input type="hidden" name="goto" value="">
                            <ul class="input-wrap">
                                <li>
                                    <input type="text" class="ipt1" maxlength="11" placeholder="手机号" v-model="mobile" />
                                </li>
                                <li>
                                  <div class="code" @click="refreshCode">
                                    <s-identify :identifyCode="identifyCode" :contentWidth="80" :contentHeight="38" @click="refreshCode"></s-identify>
                                    </div>
                                    <input type="text" class="ipt2" maxlength="4" placeholder="校验码" v-model="verifycode">
                                </li>
                                <li>
                                    <input name="login" type="button" class="btn2 button" value="登 录" @click="login">
                                </li>
                            </ul>
                            <input type="hidden" name="custom_referer" value="">
                        </form>
                        <a class="certificate" href="/Merchant/step1.html" id="cert-btn"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped lang='scss'>
  @font-face {
      font-family: 'iconfont'; /* project id 333382 */
      src: url('//at.alicdn.com/t/font_333382_iji1fsu9ov8cl3di.eot');
      src: url('//at.alicdn.com/t/font_333382_iji1fsu9ov8cl3di.eot?#iefix')
              format('embedded-opentype'),
          url('//at.alicdn.com/t/font_333382_iji1fsu9ov8cl3di.woff')
              format('woff'),
          url('//at.alicdn.com/t/font_333382_iji1fsu9ov8cl3di.ttf')
              format('truetype'),
          url('//at.alicdn.com/t/font_333382_iji1fsu9ov8cl3di.svg#iconfont')
              format('svg');
  }
  .tqmall-iconfont {
      font-family: 'iconfont' !important;
      font-size: 14px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
  }
  .clearfix {
      clear: both;
  }
  .clearfix:after {
      content: '';
      display: table;
      clear: both;
  }
  .code {
      width: 80px;
      height: 38px;
      display: inline-block;
  }
  .w1190 {
      min-width: 1190px;
      .content-wrapper {
          padding-bottom: 25px;
      }

      .w1190 .content-wrapper,
      .w1190 .fl-wrapper,
      .w1190 .header-wrapper,
      .w1190 .mn-wrapper,
      .w1190 .sn-container {
          width: 1207px;
          margin: 0 auto;
      }
  }
  .site-area {
      width: 1200px;
      margin: 0 auto;
  }
  .site-header-lt {
      float: left;
      width: 320px;
      height: 100px;
  }

  .site-header-rt {
      float: right;
      width: 330px;
      height: 100px;
      text-align: right;
  }

  .site-index-link {
      display: block;
      height: inherit;
  }

  .site-logo {
      height: 100%;
      margin-left: 30px;
  }

  .site-hotline {
      display: inline-block;
      font: 20px Arial, Helvetica Neue, 'Microsoft YaHei', SimHei, sans-serif;
      font-weight: bold;
      color: #333;
      margin: 28px 0 0 60px;
  }

  .site-hotline__icon {
      margin-right: 5px;
      font-size: 30px;
      font-weight: normal;
      vertical-align: middle;
      color: #5c6676;
  }
  .site-hotline__icon {
      margin-right: 5px;
      font-size: 30px;
      font-weight: normal;
      vertical-align: middle;
      color: #5c6676;
  }
  .loginIndexContent {
      width: 100%;
      height: 450px;
      background: url(//img.tqmall.com/tqmall_v4/activeImgIndex.jpg) center center
          no-repeat;
  }
  .mainbody {
      padding: 65px 0 35px;
  }

  #fancybox-loading-1,
  .banner-wrapper,
  .cert-success.w1190,
  .cl,
  .ofh {
      overflow: hidden;
  }
  .login-box1 {
      position: relative;
      width: 270px;
      background: #fff;
      padding: 22px 20px 50px;
      float: right;
      margin-right: 6px;
      font-size: 12px;
      color: #333;
      font: tahoma, arial, Hiragino Sans GB, \5b8b\4f53;
      .login-title {
          font-size: 16px;
          color: #333;
          font-weight: 900;
      }
      .title-tips {
          color: #333;
          padding: 10px 0 20px;
          font-weight: 600;
          font-size: 12px;
      }
      .input-wrap {
          li {
              width: 100%;
              height: 60px;
          }
          input {
              float: left;
          }
          .ipt1,
          .ipt2 {
              width: 228px;
              height: 38px;
              border: 1px solid #d5d5d5;
              padding: 0 20px;
              margin-right: 9px;
          }
          .ipt2 {
              width: 136px;
          }
          .btn1 {
              width: 82px;
              height: 40px;
              line-height: 40px;
              color: #333;
              background: #ffa101;
              font-size: 12px;
              font-weight: 600;
              cursor: pointer;
          }
          .btn2 {
              margin-top: 10px;
          }
          .button {
              width: 270px;
              height: 40px;
              border: 0;
              color: #fff;
              font-size: 18px;
              background: #fb4f4f;
              cursor: pointer;
          }
      }
  }
  #verifyCodeImg {
      width: 81px;
      height: 38px;
      border: 1px solid #dcdcdc;
  }
  .certificate {
      position: absolute;
      right: -26px;
      top: 10px;
      width: 111px;
      height: 46px;
      background: url(//img.tqmall.com/tqmall_v4/cert-btn.png) no-repeat;
  }
</style>
<script>
  import { UserInfo } from '@/service/activity/goodsApi'
  import { mapActions } from 'vuex'
  import SIdentify from '@/components/identify'
  export default {
      data() {
          return {
              mobile: '',
              verifycode: '',
              identifyCode: '',
              identifyCodes: '1234567890abcdefghijklmnopqrstuvwxyz'
          }
      },
      components: {
          SIdentify
      },
      mounted() {
          this.identifyCode = ''
          this.makeCode(this.identifyCodes, 4)
      },
      methods: {
          ...mapActions({
              getUserInfo: '_getUserInfo' // 将 `this._getUserInfo()` 映射为 `this.$store.dispatch('_getUserInfo')`
          }),
          login() {
              let reg = /^1[3|4|5|8][0-9]\d{4,8}$/
              if (!this.mobile) {
                  this.$layer.msg('请输入手机号')
                  return
              }
              if (!reg.test(this.mobile)) {
                  this.$layer.msg('请输入正确的手机号')
                  return
              }
              if (!this.verifycode) {
                  this.$layer.msg('请输入验证码')
                  return
              }
              if (
                  this.verifycode.toUpperCase() !==
                  this.identifyCode.toUpperCase()
              ) {
                  this.$layer.msg('请输入正确的图片验证码')
                  return
              }
              this.getUserInfo()
          },
          randomNum(min, max) {
              return Math.floor(Math.random() * (max - min) + min)
          },
          refreshCode() {
              this.identifyCode = ''
              this.makeCode(this.identifyCodes, 4)
          },
          makeCode(o, l) {
              for (let i = 0; i < l; i++) {
                  this.identifyCode += this.identifyCodes[
                      this.randomNum(0, this.identifyCodes.length)
                  ]
              }
          }
      }
  }
</script>
