# contact/views.py
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_protect
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
import json
from .models import Contact

def home_view(request):
    return render(request, 'contact.html')

@csrf_protect
def submit_contact(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            
            contact = Contact.objects.create(
                interests=data['interests'],
                firstname=data['firstname'],
                lastname=data['lastname'],
                email=data['email'],
                phone=data['phone'],
                os=data['os'],
                company_size=data['company_size']
            )
            
            # Send email to admin
            admin_email_html = render_to_string('emails/admin_notification.html', {
                'contact': contact,
                'interests': ', '.join(contact.interests)
            })
            
            send_mail(
                subject='New Contact Form Submission',
                message='',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.ADMIN_EMAIL],
                html_message=admin_email_html
            )
            
            # Send verification email to user
            verification_url = f"{settings.SITE_URL}/verify/{contact.verification_token}/"
            user_email_html = render_to_string('emails/user_confirmation.html', {
                'name': contact.firstname,
                'verification_link': verification_url
            })
            
            send_mail(
                subject='Verify your email - CyberXYZ',
                message='',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[contact.email],
                html_message=user_email_html
            )
            
            return JsonResponse({'success': True})
            
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})
    
    return JsonResponse({'success': False, 'error': 'Invalid request method'})

def verify_email(request, token):
    try:
        contact = Contact.objects.get(verification_token=token)
        if not contact.is_verified:
            contact.is_verified = True
            contact.save()
            return render(request, 'verification_success.html')
        return render(request, 'already_verified.html')
    except Contact.DoesNotExist:
        return HttpResponse('Invalid verification link', status=404)
