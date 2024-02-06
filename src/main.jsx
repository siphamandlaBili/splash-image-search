import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './Context';
import { QueryClient, QueryClientProvider } from 'react-query';



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

    <AppProvider>
        <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider>
    </AppProvider>

);
