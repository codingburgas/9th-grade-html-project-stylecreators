const activeFiresMapDiv = document.getElementById('active-fires-map');

if (activeFiresMapDiv) {
    const burgasCenterLat = 42.5048;
    const burgasCenterLng = 27.4728;
    const activeFiresZoom = 11;
    const firesMap = L.map('active-fires-map').setView([burgasCenterLat, burgasCenterLng], activeFiresZoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(firesMap);
    
    const activeFires = [
        { lat: 42.43, lng: 27.57, description: "Горски пожар - Близо до кв.Атия" },
        { lat: 42.60, lng: 27.40, description: "Сухи треви - Край кв.Ветрен" },
        { lat: 42.51, lng: 27.24, description: "Пожар в къща - с.Равнец" },
        { lat: 42.40, lng: 27.30, description: "Отпадъци - Северна индустриална зона" },
        { lat: 42.65, lng: 27.62, description: "Неконтролирано палене на стърнища - До гр.Ахелой" }
    ];
    
    const fireIcon = L.icon({
        iconUrl: 'images/flame.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -30]
    });
    
    activeFires.forEach(fire => {
        L.marker([fire.lat, fire.lng], { icon: fireIcon })
        .addTo(firesMap)
        .bindPopup(`<b>Активен Пожар:</b><br>${fire.description}`)
        .openPopup();
    });

  }