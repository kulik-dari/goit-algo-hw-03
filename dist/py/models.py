from django.db import models
import uuid

# Create your models here.
class Contact(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    interests = models.JSONField()
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    os = models.CharField(max_length=20)
    company_size = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
    verification_token = models.UUIDField(default=uuid.uuid4, editable=False)
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.firstname} {self.lastname} - {self.email}"
