import React, { useState } from "react";
import {  Menu, Header, Search, Grid  } from "semantic-ui-react";
import { Link } from "react-router-dom"

import './styles.css'

const NavBar = ({ showRegister, setShowRegister, showSignIn, setShowSignIn }) => {
    const [activeItem, setActiveItem] = useState("home");

    const handleSignIn = () => {
        // setActiveItem("signIn");
        setShowSignIn(true)
    }

    const handleRegister = () => {
        // setActiveItem("register")
        setShowRegister(true)
    }
    return (
        <Grid>
            <Grid.Column >
                <Menu secondary stackable>
                    <Menu.Menu position='left'>
                        <Menu.Item>
                        <Header size="large" floated="left" color="blue"
                        ><Link to="/">BookABuy - Food</Link></Header>
                        </Menu.Item>
                    <Menu.Item>
                        <Search placeholder="Find Restaurant" />
                    </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position='right' >
                    <Menu.Item className="menu-titles">
                            <Menu.Item name='signIn' active={activeItem === 'signIn'} 
                                onClick={handleSignIn} color = "orange" />
                            <Menu.Item name='register' active={activeItem === 'register'} 
                                onClick={handleRegister} color="orange" />
                    </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Grid.Column>
        </Grid>
    )
}

export default NavBar;