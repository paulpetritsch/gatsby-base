import React from "react";
import styled from "styled-components";
import Observer from "../scroll/Observer"
import Footer from "./Footer";

const Content = styled.div`
`

const Layout = ({children, settings, location, metadata}) => {

    return (<div className={"layout"}>
        <Observer/>
        <Content>
            <div className="">
                {children}
            </div>
        </Content>
        <Footer location={location}></Footer>
       </div>)
}

export default Layout
