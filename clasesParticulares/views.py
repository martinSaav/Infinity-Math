from django.shortcuts import render

def clases_particulares(request):
    return render(request, "clasesParticulares/clasesParticulares.html")