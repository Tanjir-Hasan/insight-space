import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { ThemeProvider } from './providers/ThemeProvider';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <ThemeProvider>
      <AuthProvider>
        <>
          <RouterProvider router={router} />
        </>
      </AuthProvider>
    </ThemeProvider>
  </div>
)
