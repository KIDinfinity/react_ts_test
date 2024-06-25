import './app.css'
import './app.less'
import './app.scss'
import pic from './assets/images/phone_icon.png'
const root = document.querySelector('#root')
root.innerHTML = 'hello, webpack!'
var img = document.createElement('img')
img.src = pic
document.body.appendChild(img)
console.log(2)
