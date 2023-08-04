import React from 'react';
import Home from '../pages/Home/Home';
import Clients from './Clients/Clients';
import System from './System/System';
import Pixelgrade from './Pixelgrade/Pixelgrade';
import Helping from './Helping/Helping';
import YourSite from './YourSite/YourSite';
import TomSmith from './TimSmith/TimSmith';
import Footer from './Footer/Footer';
import Caring from './Caring/Caring';
import Pellentesque from './Pellentesque/Pellentesque';

function IndexPage() {

    return (
        <main>
            <Home />
            <Clients />
            <System />
            <Pixelgrade />
            <Helping />
            <YourSite />
            <TomSmith />
            <Caring />
            <Pellentesque />
            <Footer />
        </main>
    );
}

export default IndexPage;
