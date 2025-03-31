import { createRoot } from 'react-dom/client';
import { App } from '~/components/app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      //   {
      //     path: '/path',
      //     element: (
      //       <Suspense fallback={'Loading...'}>
      //         <LazyComponent />
      //       </Suspense>
      //     ),
      //   },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
