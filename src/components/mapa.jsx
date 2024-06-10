import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Style from '../css/mapa.module.css';
import yah from '../assets/yah.webp'; // Importa la imagen del ícono de usuario

const Mapa = () => {
    const mapRef = useRef(null);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [userMarker, setUserMarker] = useState(null); // Estado para almacenar el marcador del usuario

    // Coordenadas y texto del marcador
    const latitude = 17.806340;
    const longitude = -97.77285;
    const markerText = '¡BO·CHA!';

    // Estilos personalizados para el panel de instrucciones
    const routingPanelStyles = {
        display: 'none',
    };

    useEffect(() => {
        // Función para inicializar el mapa y añadir el marcador
        const initializeMap = () => {
            // Verificar si el mapa ya está inicializado
            if (!mapRef.current) {
                // Crear el mapa con las coordenadas especificadas
                const map = L.map('mi_mapa').setView([latitude, longitude], 16);
                mapRef.current = map; // Asignar el mapa al ref

                // Añadir capa de azulejos (tiles) del mapa
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                // Añadir el marcador en las coordenadas especificadas con el texto del marcador
                L.marker([latitude, longitude]).addTo(map)
                    .bindPopup(markerText)
                    .openPopup();
            }
        };

        initializeMap();
    }, [latitude, longitude, markerText]);

    // Función para manejar el clic en el botón "Compartir ubicación"
    const handleShareLocationClick = () => {
        // Obtener la ubicación del usuario
        navigator.geolocation.getCurrentPosition(position => {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;

            // Eliminar el marcador anterior del usuario si existe
            if (userMarker) {
                mapRef.current.removeLayer(userMarker);
            }

            // Crear un nuevo ícono para el usuario
            const userIcon = L.icon({
                iconUrl: yah,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32]
            });

            // Añadir el nuevo marcador del usuario en las nuevas coordenadas
            const newUserMarker = L.marker([userLatitude, userLongitude], { icon: userIcon }).addTo(mapRef.current);
            
            // Asignar el nuevo marcador del usuario al estado
            setUserMarker(newUserMarker);

            // Dibujar una ruta desde la ubicación del usuario hasta las coordenadas especificadas
            const route = L.Routing.control({
                waypoints: [
                    L.latLng(userLatitude, userLongitude),
                    L.latLng(latitude, longitude)
                ],
                routeWhileDragging: true,
                createMarker: function() { return null; },
                lineOptions: {
                    styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
                },
                show: false,
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                altLineOptions: {
                    styles: [{ color: 'green', opacity: 0.6, weight: 4 }]
                },
                router: L.Routing.osrmv1({
                    serviceUrl: `https://router.project-osrm.org/route/v1`
                }),
            }).on('routesfound', function (e) {
                var routes = e.routes;
                var summary = routes[0].summary;
                toast.success('Ruta encontrada: ' + summary.totalDistance + ' metros en ' + summary.totalTime + ' segundos');
            }).addTo(mapRef.current);

            // Aplicar estilos personalizados al panel de instrucciones
            const routingContainer = document.querySelector('.leaflet-routing-container');
            if (routingContainer) {
                Object.assign(routingContainer.style, routingPanelStyles);
            }

            // Ocultar el botón después de hacer clic en él
            setButtonVisible(false);
        });
    };

    return (
        <section className={Style.fondoMapa} data-src="https://images.pexels.com/photos/6412837/pexels-photo-6412837.jpeg?auto=compress&cs=tinysrgb&w=3839&h=5759&dpr=1">
            <div className={Style.contenedorTitulo}>
                <h1 className={Style.titulo}>BO·CHA Huajuapan</h1>
            </div>
            <div id="mi_mapa" style={{ width: '100%', height: '31rem', border: 'solid 2px #de7fb6' }}></div>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                {buttonVisible && <button onClick={handleShareLocationClick} className={Style.botonMapa}>¿Cómo llegar? →</button>}
            </div>
        </section>
    );
}

export default Mapa;
