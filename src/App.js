import { Layout, Image } from "antd";
import Approutes from "./Components/Routes";
import Menu from "./Components/Menu";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import GroceryContextProvider from "./context/GroceryContext";

Amplify.configure(awsconfig);

const {Sider, Content, Footer} = Layout;

function App() {
  return (
    <GroceryContextProvider>
    <Layout>
      <Sider style={{backgroundColor: 'orange'}}>
        <Image
          src= "https://seeklogo.com/images/S/shop-n-save-grocery-store-logo-7944AB5E15-seeklogo.com.png"
          preview = {false}
        />
        <Menu/>
      </Sider>
      <Layout>
        <Content>
          <Approutes/>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Fleurencois Grocery Dashboard @2023
        </Footer>
      </Layout>
    </Layout>
    </GroceryContextProvider>
  );
}

export default withAuthenticator(App);
