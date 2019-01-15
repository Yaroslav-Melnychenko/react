import React from "react";
import Header from "./header";
import Footer from "./footer";
class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <p>Main content on home page</p>
                <Footer />
            </div>
        );
    }
}
export default Layout;
