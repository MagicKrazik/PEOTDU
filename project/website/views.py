from django.shortcuts import render
import os
from django.conf import settings

def home(request):
    return render(request, 'home.html')

def audiencias(request):
    return render(request, 'audiencias.html')

def get_kml_files():
    kml_dir = os.path.join(settings.STATICFILES_DIRS[0], 'kml')
    kml_files = [f for f in os.listdir(kml_dir) if f.endswith('.kml')]
    
    # Add labels and preselection for KML files
    kml_data = [
        {
            'filename': f,
            'label': f.replace('.kml', '').replace('_', ' ').title(),
            'preselected': f == 'Mapa_Base.kml'  # Preselect the base map
        } for f in kml_files
    ]
    return kml_data

def mapa(request):
    kml_files = get_kml_files()
    return render(request, 'mapa.html', {'kml_files': kml_files})