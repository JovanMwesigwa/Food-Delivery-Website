import React  from "react";
import { Image,  Grid, Container, Header } from 'semantic-ui-react';
import { motion } from 'framer-motion'

import myImage from '../../assets/images/headerImage.jpg';
import GooglePlay from  '../../assets/icons/googlePlayStore.png';

import  './styles.css';

const textVariants = {
    start:{
       x: '-100vw' 
    },
    stop: {
        x: 0,
        transition: {
            delay: 1.5, duration: .2,
            type: "spring"
        }
    }

}

const playStoreVariants = {
    start: {
        opacity: 0
    },
    stop: {
        opacity: 1,
        transition: {
            delay: 3.5, duration: 2.5
        }
    },
    hover:{
        scale: 1.1,originX: 0,
        transition: {
            yoyo: Infinity,
            duration: .3,
        }
    }
}

const secondTextVariants = {
    start: {
        x: "100vw"
    },
    stop: {
        x: 0,
        transition: {
            delay: 2.5, duration: .3,
            type: "spring"
        }
    }
}

const headerImageVariant = {
    start: {
        y: "-100vh"
    },
    stop: {
        y: 0,
        transition: {
            delay: .5, duration: .5, type: "spring"
        }
    }
}

const HeaderComponent = (props) => {
    return (
        <Container>
            <Grid className="segment-container" >
                <Grid.Column className="g-col-container"  floated="left"  width={8} >
                    <motion.div variants={textVariants} initial="start" animate="stop" >
                        <Grid.Column width={10}>
                            <Header style={{ fontSize: "48px", color:"#FDFEFE", letterSpacing: "2px" }}>Food You Love,</Header>
                        </Grid.Column>
                    </motion.div>
                    <motion.div variants={secondTextVariants} initial="start" animate="stop">
                        <Grid.Column width={10} style={{ marginTop: 18 }}>
                            <Header style={{ fontSize: "39px", color:"#FDFEFE",letterSpacing: "2px", fontWeight: "lighter" }} >Delivered to you</Header>
                        </Grid.Column>
                    </motion.div>
                        <motion.div variants={playStoreVariants} initial="start" animate="stop" whileHover="hover" >
                            <Image src={GooglePlay} size="small" spaced="left" />
                            {/* <image src={AppStoreImage} /> */}
                        </motion.div>
                    </Grid.Column>
            <Grid.Column floated="right" width={6} fixed  >
                <motion.div  variants={headerImageVariant} initial="start" animate="stop">
                    <Image src={ myImage } size="huge" circular fluid />
                </motion.div>
            </Grid.Column>    
        </Grid>
    </Container>
    )
}

export default HeaderComponent;