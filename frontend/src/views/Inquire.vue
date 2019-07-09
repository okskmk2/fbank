<i18n>
  en: 
    title: Inquire
  ko: 
    title: 조회
</i18n>

<template>
  <div>
    <h1>{{ $t('title') }}</h1>
    <div class="row">
      <InquireSubMenu></InquireSubMenu>
      <div class="content card">
        <h2>행복주택통장</h2>
        <div class='view-box'>
          <div>
            <i class="material-icons">view_list</i>
          </div>
          <div>
            <i class="material-icons">timeline</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InquireSubMenu from "../components/InquireSubMenu";

export default {
  components: { InquireSubMenu }
};
</script>

