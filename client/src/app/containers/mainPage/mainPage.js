import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
    <Layout>
        <Sider>Sider</Sider>
        <Content>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Content>
    </Layout>
);

export default App;
