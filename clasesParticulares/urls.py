from django.urls import path
from .views import clases_particulares

urlpatterns = [
    path('', clases_particulares, name="clasesParticulares"),
]
