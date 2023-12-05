from django.shortcuts import render
import requests
from django.http import JsonResponse

TELEGRAM_URL = "https://api.telegram.org/bot"
TOKEN = '6840199031:AAFoshpO0dTv2l1rsM9hBLjqL98iL-YNLXI'
NAME_OWNER = 'DELIVERY CARS'

MODEL_DICT = {
    3: 'Седан', 4: 'Купе', 5: 'Минивэн', 6: 'Внедорожник', 7: 'Пикап', 9: 'Универсал', 10: 'Хэтчбек' 
}

def send_bot_info(request):
    if request.method == 'POST' and request.is_ajax():
        phone = request.POST.get('phone', None)
        message = f'{NAME_OWNER}\n 10 лучших автомобилей\n Телефон: {phone}'
        data = {
            "chat_id": 6746800266,
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
            "chat_id": 6746800266,
            "text": message,
        }
        response = requests.get(
            f"{TELEGRAM_URL}{TOKEN}/sendMessage", data=data
        )
        return JsonResponse({'status': True})
    else:
        return JsonResponse({'status': False})


def send_bot_info_step_3(request):
    if request.method == 'POST' and request.is_ajax():
        model = request.POST.get('model', None)
        phone = request.POST.get('phone', None)
        budget = request.POST.get('budget', None)
        message = f'{NAME_OWNER}\n Какой автомобиль вас интересует?\n Модель : {MODEL_DICT[int(model)]}\n Бюджет: {budget} \nТелефон: {phone}'
        data = {
            "chat_id": 6746800266,
            "text": message,
        }
        response = requests.get(
            f"{TELEGRAM_URL}{TOKEN}/sendMessage", data=data
        )
        return JsonResponse({'status': True})
    else:
        return JsonResponse({'status': False})
