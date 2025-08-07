import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const ip = await fetch('https://api.ipify.org/').then(r => r.text());
const visit = {
  IpAddress: ip,
  Url: "Website",
  DateTime: ''
}
const response = await fetch('',
{
  method: 'POST',
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  body: JSON.stringify(visit)
})
console.log(ip)

root.render(
    <Canvas shadows camera={ { fov: 75, near: 0.1, far: 200, position: [ 0, 0, 2 ] } }>
        <App />
    </Canvas>
)