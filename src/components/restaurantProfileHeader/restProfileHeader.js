import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import "./style.css"

const ProfileHeader = () => {
    return(
        <Container fluid>
                <Grid>
                    <Grid.Row centered stretched>
                        <Segment>Cover Image here</Segment>
                    </Grid.Row>
                </Grid>
        </Container >
    )
}

export default ProfileHeader