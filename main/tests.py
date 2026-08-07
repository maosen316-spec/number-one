from django.test import TestCase
from django.urls import reverse

from .models import Contact


class ContactApiTests(TestCase):
    def test_contact_can_be_created(self):
        response = self.client.post(
            reverse('create-contact'),
            data={
                'qq': '123456',
                'wechat': 'delta_user',
                'phone': '13800138000',
                'favorite_operator': '红狼',
            },
            content_type='application/json',
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(Contact.objects.count(), 1)
        self.assertEqual(Contact.objects.get().favorite_operator, '红狼')

    def test_contact_requires_required_fields(self):
        response = self.client.post(
            reverse('create-contact'),
            data={'qq': '123456'},
            content_type='application/json',
        )

        self.assertEqual(response.status_code, 400)
