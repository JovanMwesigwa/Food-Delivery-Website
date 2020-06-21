import React from 'react'
import HeaderComponent from '../../components/header/header'
import Main from '../../components/main/main'
import BodyComponent from '../../components/body/body'
import { Container } from 'semantic-ui-react'


const LandingPage = (props) => {
  return(
      <Container>
          <HeaderComponent />
          <Main />
          <BodyComponent />
      </Container>
   )

 }

export default LandingPage