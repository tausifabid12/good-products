import { createBrowserRouter } from 'react-router-dom';
import AllProducts from '../components/AllProducts/AllProducts';
import FAQ from '../components/FAQ/FAQ';
import Main from '../Layouts/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <AllProducts />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
    ],
  },
]);

export default router;
