import json

from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .models import Contact


def frontend(request):
    """Serve the Vue production build as the public-facing website."""
    return render(request, 'index.html')


@csrf_exempt
@require_POST
def create_contact(request):
    """Receive feedback from the Vue front end and store it in ``contact``."""
    try:
        payload = json.loads(request.body.decode('utf-8'))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({'detail': '请求数据必须是有效的 JSON。'}, status=400)

    qq = str(payload.get('qq', '')).strip()
    wechat = str(payload.get('wechat', '')).strip()
    phone = str(payload.get('phone', '')).strip()
    favorite_operator = str(payload.get('favorite_operator', '')).strip()

    required_fields = {
        'qq': qq,
        'phone': phone,
        'favorite_operator': favorite_operator,
    }
    missing_fields = [key for key, value in required_fields.items() if not value]
    if missing_fields:
        return JsonResponse(
            {'detail': '请填写必填项。', 'fields': missing_fields},
            status=400,
        )

    limits = {'qq': 20, 'wechat': 100, 'phone': 30, 'favorite_operator': 50}
    values = {
        'qq': qq,
        'wechat': wechat,
        'phone': phone,
        'favorite_operator': favorite_operator,
    }
    too_long_fields = [key for key, value in values.items() if len(value) > limits[key]]
    if too_long_fields:
        return JsonResponse(
            {'detail': '部分字段长度超出限制。', 'fields': too_long_fields},
            status=400,
        )

    contact = Contact.objects.create(**values)
    return JsonResponse({'id': contact.id, 'detail': '反馈提交成功。'}, status=201)
