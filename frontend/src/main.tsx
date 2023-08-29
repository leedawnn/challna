import './index.css'

import App from './App.tsx'
import React from 'react'
import { createRoot } from 'react-dom/client'
import initializeMockupWorker from './mocks';

const root = createRoot(document.getElementById('root') as HTMLElement);

initializeMockupWorker().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
