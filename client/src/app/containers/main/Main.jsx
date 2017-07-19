import React from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import SidebarComponent from '../../components/SidebarComponent';
import Layout from '../../components/Layout';
import MainComponent from '../../components/MainComponent';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Sidebar>
                <Link to="/">Home</Link>
                <Link to="/comp1">Comp1</Link>
                <Link to="/comp2">Comp2</Link>
            </Sidebar>
            <MainComponent>
                <Route exact path="/" component={Home} />
                <Route path="/comp1" component={() => <h2>test1</h2>} />
                <Route path="/comp2" component={() => <h2>test2</h2>} />
            </MainComponent>
        </Layout>

    </BrowserRouter>

);

export default App;
