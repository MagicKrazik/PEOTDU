from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def mapa(request):
    context = {
        'page_title': 'Mapa con Capas KMZ - PEOTDU BCS',
    }
    return render(request, 'mapa.html', context)

def audiencias(request):
    return render(request, 'audiencias.html')

