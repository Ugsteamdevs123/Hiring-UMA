// import React from 'react'
import ReactDOM from "react-dom";
// import Header from './components/Header';

// function App() {
//   return (
//     <Header />
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);

// App.js

import React from 'react';
import {  createBrowserRouter, RouterProvider, Outlet  } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import ReachUs from "./components/ReachUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Faq from "./components/Faq";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ApplyNow from "./components/ApplyNow";
import Permanent from "./components/Permanent";
import Contract from "./components/Contract";
import ContractToHire from "./components/ContractToHire";

function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        // errorElement: <PageNotFound />,
      },
      {
        path: "/reach-us",
        element: <ReachUs />,
        // errorElement: <PageNotFound />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
        // errorElement: <PageNotFound />,
      },
      {
        path: "/faq",
        element: <Faq />,
        // errorElement: <PageNotFound />,
      },
      {
        path: "/terms",
        element: <Terms />,
        // errorElement: <PageNotFound />,
      },
      {
        path: "/apply-for-job",
        element: <ApplyNow />,
        // errorElement: <PageNotFound />,
      },
      {
        path: "/permanent-staffing",
        element: <Permanent />,
        // errorElement: <PageNotFound />,
      },
      {
        path: "/contract-staffing",
        element: <Contract />,
        // errorElement: <PageNotFound />,
      },
      {
        path: "/contract-to-hire-staffing",
        element: <ContractToHire />,
        // errorElement: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



// <Router>
//       <Header />
//       <Home />
//       {/* <Body /> */}
//       <Routes>
//         <Route exact path="/" /*element={Dashboard}*/ />
//         <Route path="/dashboard" /*element={Dashboard}*/ />
//         <Route path="/settings" /*element={Settings}*/ />
//         <Route path="/earnings" /*element={Earnings}*/ />
//         <Route path="/separated-link" /*element={SeparatedLink}*/ />
//         <Route path="/apply-for-job" /*element={ApplyForJob}*/ />
//         <Route path="/reach-us" element={ReachUs} />
//       </Routes>
//     </Router>