from django.db import models


class Contact(models.Model):
    """前台反馈信息。"""

    qq = models.CharField('QQ', max_length=20)
    wechat = models.CharField('微信', max_length=100, blank=True)
    phone = models.CharField('电话', max_length=30)
    favorite_operator = models.CharField('喜爱干员', max_length=50)

    class Meta:
        db_table = 'contact'
        verbose_name = '联系表单'
        verbose_name_plural = '联系表单'

    def __str__(self):
        return f'{self.qq} · {self.favorite_operator}'
