<template>
  <div id="app">
    <header>
      <div class='row jc-between'>
        <i18nChange></i18nChange>
        <span class='unb'>
          <router-link to='login'>{{$t('Login')}}</router-link>
          <router-link to='join'>{{$t('Join')}}</router-link>
        </span>
      </div>
      <div class='header-mid'>
        <span class='brand-text'>fbank</span>
        <input type="text" class='global-search'>
      </div>
      <globalMenu class='gnb'></globalMenu>
    </header>
    <router-view class="container" />
    <footer>
      <div class="container">
        <i class="fa fa-facebook-official fa-fw" aria-hidden="true"></i>
        <i class="fa fa-instagram fa-fw" aria-hidden="true"></i>
      </div>
    </footer>
  </div>
</template>

<i18n>
ko:
  Login: 로그인
  Join: 회원가입
en:
  Login: Login
  Join: Join
</i18n>

<script>
import i18nChange from "../components/i18n-change";
import globalMenu from "../components/global-menu";

export default {
  name: "app",
  data() {
    return {
      modalOpen: false
    };
  },
  components: { i18nChange, globalMenu }
}
</script>