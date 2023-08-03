import React from 'react';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import Feature from './pages/Feature/Feature';
import Product from './pages/Product/Product';
import Testimonial from './pages/Testimonial/Testimonial';
import FAQ from './pages/FAQ/FAQ';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import SignUp from './pages/Sign Up/SignUp';
import Login from './pages/Login/Login';



import "./assets/css/general.css";
import IndexPage from './Components/IndexPage';
function App() {
    
            return (
                <div>
                    <>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<IndexPage/>}/>
                        <Route path='/service' element={<Service/>}/>
                        <Route path='/feature' element={<Feature/>}/>
                        <Route path='/product' element={<Product/>}/>
                        <Route path='/testimonial' element={<Testimonial/>}/>
                        <Route path='/faq' element={<FAQ/>}/>
                        <Route path='/signup' element={<SignUp/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>              
                    </>
                   
                </div>
            );
    }

    export default App;