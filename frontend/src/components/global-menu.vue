<template>
  <nav>
    <router-link to="/Inquire">
      <span>{{$t('Inquire')}}</span>
    </router-link>
    <router-link to="/Transfer">
      <span>{{$t('Transfer')}}</span>
    </router-link>
    <router-link to="/Loan">
      <span>{{$t('Loan')}}</span>
    </router-link>
    <router-link to="/Insurance">
      <span>{{$t('Insurance')}}</span>
    </router-link>
    <router-link to="/Fund">
      <span>{{$t('Fund')}}</span>
    </router-link>
  </nav>
</template>

<i18n>
ko:
  Inquire: 조회
  Transfer: 이체
  Loan: 대출
  Insurance: 보험
  Fund: 펀드
en:
  Inquire: Inquire
  Transfer: Transfer
  Loan: Loan
  Insurance: Insurance
  Fund: Fund 
</i18n>