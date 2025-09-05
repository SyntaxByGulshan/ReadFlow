
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import { store } from './Store';
export default function App() {
  return <>
    <Provider store={store}>
     <BrowserRouter>
     <AppRouter/>
     </BrowserRouter>
     </Provider>
    </>
}
