import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/solutions",
        element: <Solutions />
      }
    ]
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Posts />,
//         children: [{ path: "/create-post", element: <NewPost /> }],
//       },
//     ],
//   },
// ]);