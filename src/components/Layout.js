import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Content = styled.div`
`

const Layout = ({children, location, settings, metadata}) => {

    return (
        <div className={"layout"}>
            <Navigation location={location} settings={settings} metadata={metadata}></Navigation>
            <Content>
                {children}
            </Content>
            <Footer location={location}></Footer>
        </div>
    )
}


export default Layout
