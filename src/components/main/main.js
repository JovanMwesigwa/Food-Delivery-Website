import React, { useState } from 'react'
import { Grid, Menu, Header } from 'semantic-ui-react';


const Main = (props) => {

    const [ active, setActive ] = useState("")
  return(
    <Grid.Column style={{ marginTop: "35px" }}>
        <Header size='huge' >Restaurants</Header>
        <Menu secondary widths={8} color="orange" stackable inverted style={{ borderRadius: "20px" }} >
            <Menu.Item
                name="All"
                active={active === 'All'}
                onClick={() => setActive('All')}
            />
            <Menu.Item
                name="Pizza"
                active={active === 'Pizza'}
                onClick={() => setActive('Pizza')}
            />
            <Menu.Item
                name="Rolex"
                active={active === 'Rolex'}
                onClick={() => setActive('Rolex')}
            />
            <Menu.Item
                name="Burgers"
                active={active === 'Burgers'}
                onClick={() => setActive('Burgers')}
            />
            <Menu.Item
                name="Breakfast"
                active={active === 'Breakfast'}
                onClick={() => setActive('Breakfast')}
            />
            <Menu.Item
                name="Lunch"
                active={active === 'Lunch'}
                onClick={() => setActive('Lunch')}
            />
        </Menu>
    </Grid.Column>
   )

 }

export default Main