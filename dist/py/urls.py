# contact/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('api/submit-contact/', views.submit_contact, name='submit_contact'),
    path('verify/<uuid:token>/', views.verify_email, name='verify_email'),
    path('', views.home_view, name='home'),  # Changed the name to avoid conflict
]
