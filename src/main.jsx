import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { ThemeProvider } from './providers/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <ThemeProvider>
      
        <RouterProvider router={router} />
      
    </ThemeProvider>
  </div>
)
