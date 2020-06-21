import React from "react"
import { Grid, Segment, Container } from 'semantic-ui-react'
import ProfileHeader from "../../components/restaurantProfileHeader/restProfileHeader"

const RestaurantProfile = () => {
    return (
        <>
            <ProfileHeader />
            <Container fluid >
                <Grid columns={3} divided stackable>
                    <h1>Restaurant Name</h1>
                    <Grid.Row stretched >
                        <Grid.Column>
                            <Segment>Restaurant description and menu</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Today's Top meals</Segment>
                            <Segment>2</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>Navigation and Map</Segment>
                            {/* <Segment>2</Segment>
                            <Segment>3</Segment> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns="equal"   stackable>
                <Grid.Column stretched >
                        {/* <Image src='/images/wireframe/image.png' /> */}
                        <Segment>1</Segment>
                    </Grid.Column>
                    {/* <Grid.Column  >
                        <Segment>3</Segment>
                    </Grid.Column> */}
                </Grid>
            </Container>
        </>
    )
}

export default RestaurantProfile