import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
if (module && module.hot) {
  module.hot.accept()
}
root.render(<App />)
