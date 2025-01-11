import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './media-queries/cart-media-queries.css'
import './media-queries/home-media-queries.css'
import './media-queries/product-page-media-queries.css'

import { Provider } from 'react-redux'
import reduxStore from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </StrictMode>,
)
