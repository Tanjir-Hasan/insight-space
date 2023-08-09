import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { ThemeProvider } from './providers/ThemeProvider';
import AuthProvider from './providers/AuthProvider';
import { Provider } from 'react-redux';
import store from './StateManagment/store/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <div>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </div>
  </div>
)
