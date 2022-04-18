import React from "react";
import { App } from "./app";
import ReactDomClient from 'react-dom/client'
import { reportWebVitals } from './reportWebVitals'

const Container = document.getElementById('root')

const root = ReactDomClient.createRoot(Container)



root.render(
    <App />
)


reportWebVitals();

