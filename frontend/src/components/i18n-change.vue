<template>
<span>
  <i class="fa fa-globe fa-fw" aria-hidden="true" style="font-size:21px;vertical-align: middle;"></i>
  <select v-model="i18n.locale">
    <option v-for="lang in support_langs" :key="lang">{{lang}}</option>
  </select>
</span>
</template>
<script>
import i18n from "../i18n";
export default {
  data() {
    return {
      i18n: i18n,
      support_langs: ["ko", "en", "ja", "zh"]
    };
  }
};
</script>