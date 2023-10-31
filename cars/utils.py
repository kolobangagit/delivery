from django.shortcuts import render
import requests
from django.http import JsonResponse

TELEGRAM_URL = "https://api.telegram.org/bot"
TOKEN = '6569461259:AAEu8HfH6vohmD3QK93CUkDKX6D5nLuRzV4'
NAME_OWNER = 'DELIVERY CARS'


def send_bot_info(request):
    if request.method == 'POST' and request.is_ajax():
        phone = request.POST.get('phone', None)
        message = f'{NAME_OWNER}\n 10 лучших автомобилей\n Телефон: {phone}'
        data = {
            "chat_id": 6027445072,
            "text": message,
        }
        response = requests.get(
            f"{TELEGRAM_URL}{TOKEN}/sendMessage", data=data
        )
        return JsonResponse({'status': True})
    else:
        return JsonResponse({'status': False})


def send_bot_info_step_2(request):
    if request.method == 'POST' and request.is_ajax():
        name = request.POST.get('name', None)
        phone = request.POST.get('phone', None)
        message = f'{NAME_OWNER}\n Горячие предложения\n  Имя: {name} \nТелефон: {phone}'
        data = {
            "chat_id": 6027445072,
            "text": message,
        }
        response = requests.get(
            f"{TELEGRAM_URL}{TOKEN}/sendMessage", data=data
        )
        return JsonResponse({'status': True})
    else:
        return JsonResponse({'status': False})