from django.db import models

from addition_skill.models import Addition_skill
from certificate.models import Certificate
from education.models import Education
from language.models import Language
from skill.models import Skill
from user_project.models import User_project


class Consultant(models.Model):
    OFFICES = [
        ('Baden', 'Baden'),
        ('Bern', 'Bern'),
        ('Geneva', 'Geneva')
    ]

    ROLES = [
        ('frontend', 'Frontend Developer'),
        ('backend', 'Backend Developer'),
        ('devops', 'DevOps Developer'),
        ('fullstack', 'Fullstack Developer')
    ]

    display_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    office_category = models.CharField(max_length=100, choices=OFFICES)
    email = models.EmailField(unique=False)
    linked_in_link = models.URLField(max_length=200)
    image_path = models.FileField(upload_to='uploads/', blank=True)
    summary = models.TextField()
    is_subcontractor = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_disabled = models.BooleanField(default=False)
    primary_language = models.CharField(max_length=100)
    educations = models.ManyToManyField(to=Education, related_name='educations')
    projects = models.ManyToManyField(to=User_project, related_name='projects', blank=True)
    language_skills = models.ManyToManyField(to=Language, related_name='language_skills')
    managed_skills = models.ManyToManyField(to=Skill, related_name='managed_skills')
    addition_skills = models.ManyToManyField(to=Addition_skill, related_name='addition_skills')
    managed_certificates = models.CharField(max_length=250)
    certificates = models.ManyToManyField(to=Certificate, related_name='certificates')
    title = models.CharField(max_length=200)
    edited_time = models.DateTimeField(auto_now=True)
    manager_display_name = models.CharField(max_length=100)
    profile_id = models.IntegerField()
    profile_slug_id = models.IntegerField()
    manager_on_premises_user_principal_name = models.CharField(max_length=250)
    role_category = models.CharField(max_length=100, choices=ROLES)

    def __str__(self):
        return f'ID {self.id} : {self.display_name}'
