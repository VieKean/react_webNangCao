import { createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import App from '../App';
import Car from './Car';
import Hello from './Hello';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/car",
        element: <Car/>
    },
    {
        path: "/hello",
        element: <Hello/>
    },
    {
        path: "*",
        element: <div>Không tìm thấy web theo yêu cầu</div>
    }
]);

