import { Map, MapContainer, TileLayer } from 'react-leaflet'
import './map.css'

function MyMap() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=KGbi2yxOlX3LDe1tfcGR"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  )
}

export default MyMap
