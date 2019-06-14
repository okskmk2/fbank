from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


# 유저모델 확장
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    credit_point = models.IntegerField()


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()


# 계좌 그 자체
class Account(models.Model):
    name = models.CharField(max_length=50)
    interest_rate = models.FloatField()
    withdraw_yn = models.BooleanField()  # 적금통장인 경우만 false이다.
    max_wtl = models.IntegerField()
    max_wdl = models.IntegerField()
    max_wml = models.IntegerField()
    delete_yn = models.BooleanField()
    reg_dttm = models.DateTimeField(auto_now_add=True)


# 유저가 갖고 있는 계좌
class UserAccount(models.Model):
    owner = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    account = models.ForeignKey(Account, on_delete=models.DO_NOTHING)
    delete_yn = models.BooleanField(default=False)
    wtl = models.IntegerField()
    wdl = models.IntegerField()
    wml = models.IntegerField()
    reg_dttm = models.DateTimeField(auto_now_add=True)
    upt_dttm = models.DateTimeField(auto_add=True)
    balance = models.IntegerField()
    last_trsct_dttm = models.DateTimeField(auto_add=True)


# 거래내역
class TransactionHistory(models.Model):
    owner = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING)
    trsct_name = models.CharField(max_length=40)
    reg_dttm = models.DateTimeField(auto_now_add=True)
    trsct_amt = models.IntegerField()
    balance = models.IntegerField()
    trsct_memo = models.CharField(max_length=70)
    trsct_subject = models.CharField(max_length=50)


# 비트와이즈 다용도 옵션
class Options(models.Model):
    group_name = models.CharField(max_length=30)
    option_value = models.IntegerField()
    option_name = models.CharField(max_length=30)


# 대출상품 그 자체
class Loan(models.Model):
    name = models.CharField(max_length=50)
    min_loan_interest_rate = models.FloatField()
    max_loan_interest_rate = models.FloatField()
    min_loan_period = models.DateTimeField()
    max_loan_period = models.DateTimeField()
    min_loan_amount = models.IntegerField()
    max_loan_amount = models.BigIntegerField()
    repayment_options = models.IntegerField()  # bitwise 상환종류
    collateral_options = models.IntegerField()  # bitwise 담보종류


# 담보물들
class Collateral(models.Model):
    collateral_options = models.IntegerField()
    loan_account = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING)
    comment = models.TextField()
    location = models.CharField(max_length=300)
    manager = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    reg_dttm = models.DateTimeField(auto_now_add=True)


# 유저가 구입한 대출상품
class LoanUserAccount(models.Model):
    debtor = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    loan_account = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING)
    loan_interest_rate = models.FloatField()
    loan_start_dttm = models.DateTimeField()
    loan_end_dttm = models.DateTimeField()
    loan_amount = models.IntegerField()
    repayment_options = models.IntegerField()  # bitwise 상환종류
    collateral_options = models.IntegerField()  # bitwise 담보종류
    loan_principal_balance = models.BigIntegerField()
    loan_interest_balance = models.BigIntegerField()  # 이자에 대한 이자율은 공통이다.
    reg_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    reg_dttm = models.DateTimeField(auto_now_add=True)
