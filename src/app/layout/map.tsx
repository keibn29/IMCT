import { useRef, useEffect, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import { Style, Icon } from 'ol/style';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import markericon from 'images/map-marker-svgrepo-com.svg';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState<any>(null);
  useEffect(() => {
    if (!mapRef.current) return;
    if (!map) {
      const newMap = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([106.644414, 10.802346]),
          zoom: 19,
        }),
      });
      const markerCoords = fromLonLat([106.644414, 10.802346]); // Tọa độ của marker
      const markerStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: markericon,
          scale: 0.05,
        }),
      });
      const markerFeature = new Feature({
        geometry: new Point(markerCoords),
      });

      markerFeature.setStyle(markerStyle);

      const markerSource = new VectorSource({
        features: [markerFeature],
      });

      newMap.addLayer(
        new VectorLayer({
          source: markerSource,
        })
      );
      setMap(newMap);
    } else {
      // Thay đổi tọa độ của bản đồ
      const newCenter = fromLonLat([106.644414, 10.802346]);
      map.getView().setCenter(newCenter);
    }
  }, [map]);

  return <div ref={mapRef} style={{ width: '50%', height: '43rem' }}></div>;
};

export default MapComponent;
