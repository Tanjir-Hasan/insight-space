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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </div>
=======
>>>>>>> 99976d06acda8fbeeaba0877ec6ed3af58785f48
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
<<<<<<< HEAD
=======
>>>>>>> 355f6d77560b3f61355a3b15dcd080ee4033493a
>>>>>>> 99976d06acda8fbeeaba0877ec6ed3af58785f48
  </div>
)
