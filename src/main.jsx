import React from 'react';
import{hydrateRoot,createRoot}from'react-dom/client';
import{BrowserRouter}from'react-router-dom';
import{App}from'./App.jsx';
const root=document.getElementById('root');
const element=<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>;
if(root.hasChildNodes())hydrateRoot(root,element);else createRoot(root).render(element);
