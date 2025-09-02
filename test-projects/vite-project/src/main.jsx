import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyAvatar } from "vitest-link-reproduction";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyAvatar>Test</MyAvatar>
  </React.StrictMode>,
)
