from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


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


class Account(models.Model):
    name = models.CharField(max_length=50)
    interest_rate = models.FloatField()
    max_wtl = models.IntegerField()
    max_wdl = models.IntegerField()
    max_wml = models.IntegerField()
    delete_yn = models.BooleanField()
    reg_dttm = models.DateTimeField(auto_now_add=True)


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


class TransactionHistory(models.Model):
    owner = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING)
    trsct_name = models.CharField(max_length=40)
    reg_dttm = models.DateTimeField(auto_now_add=True)
    trsct_amt = models.IntegerField()
    balance = models.IntegerField()
    trsct_memo = models.CharField(max_length=70)
    trsct_subject = models.CharField(max_length=50)
