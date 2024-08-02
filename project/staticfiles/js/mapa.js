let map;
const kmlLayers = {};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 24.1426, lng: -110.3127},  // Center on La Paz, BCS
        zoom: 8
    });

    // Initialize KML layers
    document.querySelectorAll('#kml-layer-list input[type="checkbox"]').forEach(checkbox => {
        const kmlUrl = `${window.location.origin}/static/kml/${checkbox.value}`;
        console.log('Loading KML:', kmlUrl);  // Debug log
        
        const kmlLayer = new google.maps.KmlLayer({
            url: kmlUrl,
            map: checkbox.checked ? map : null,
            preserveViewport: true,
            suppressInfoWindows: false
        });

        kmlLayer.addListener('status_changed', function() {
            console.log(`KML Layer status for ${checkbox.value}:`, kmlLayer.getStatus());
            if (kmlLayer.getStatus() !== 'OK') {
                console.error('Failed to load KML:', kmlUrl);
            }
        });

        kmlLayers[checkbox.id] = kmlLayer;

        checkbox.addEventListener('change', function() {
            kmlLayers[this.id].setMap(this.checked ? map : null);
        });
    });
}

document.getElementById('descargar-mapa').addEventListener('click', function() {
    // Implement download functionality here
    alert('Función de descarga aún no implementada');
});

// Make sure initMap is globally accessible
window.initMap = initMap;