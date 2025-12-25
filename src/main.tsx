import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 解决某些依赖库在浏览器中寻找 process 导致的崩溃
if (typeof window !== 'undefined') {
  (window as any).process = { env: { NODE_ENV: 'production' } };
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
