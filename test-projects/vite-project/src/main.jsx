import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyButton } from "vitest-link-reproduction";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyButton>Test</MyButton>
  </React.StrictMode>,
)
