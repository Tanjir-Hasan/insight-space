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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='object-cover overflow-hidden'>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer />
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </div>

)
