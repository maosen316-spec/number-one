from django.contrib import admin

from .models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('qq', 'wechat', 'phone', 'favorite_operator')
    search_fields = ('qq', 'wechat', 'phone', 'favorite_operator')
    ordering = ('-id',)
    list_per_page = 20

# Register your models here.
