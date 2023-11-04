import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './components/app/App.jsx'
import About from './components/pages/about/About.jsx'
import Skills from './components/pages/skills/Skills.jsx'
import ErrorPage from './ErrorPage.jsx'
import Studies from './components/pages/studies/Studies.jsx'
import Projects from './components/pages/projects/Projects.jsx'
import JavaScript from './components/pages/gifs-projects/javascript/JavaScript.jsx'
import HtmlCss from './components/pages/gifs-projects/html-css/HtmlCss.jsx'
import JSReact from './components/pages/gifs-projects/react/JSReact.jsx'
import Contacts from './components/pages/contacts/Contacts.jsx'

import './css/reset.css'
import './css/index.css'
import './css/variables.css'

const router = createBrowserRouter([
  {
      path: "/",
      element: < App/>,
      errorElement: < ErrorPage/>, /*Para a Página de erro*/
      children: [
        {
          path: "/",
          element: < About/>,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "studies",
          element: <Studies />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        // Nested Routes - Rotas aninhadas - Identificador único
        {
          path: "/projects/gifs-projects/html-css",
          element: <HtmlCss />,
        },
        {
          path: "/projects/gifs-projects/html-css-js",
          element: <JavaScript />,
        },
        {
          path: "/projects/gifs-projects/html-css-js-react",
          element: <JSReact />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
