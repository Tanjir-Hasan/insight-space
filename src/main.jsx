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
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  <div>
    <div>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </div>
=======
  <div className='overflow-hidden object-cover'>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>     
      </ThemeProvider>
    </Provider>
>>>>>>> f43faa18dd27356165f2002317bc7df6b7f805e0
  </div>
)
