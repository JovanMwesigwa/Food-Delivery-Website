import React, { useState } from 'react'
import { motion } from "framer-motion"
import "./styles.css"
import { Link } from 'react-router-dom'
import { Form, Button,  Segment } from "semantic-ui-react"

const containerVariants = {
  start: {
      opacity: 0
  },
  stop: {
      opacity: 1
  },
  exit: {
      opacity: 0,
      transition: {
          delay: .2
      }
  }
}

const innercontainerVariants = {
  start: {
      y: "-100vh"
  },
  stop: {
      y: 100,
      transition: {
          delay: .5
      }
  },
  exit:{
      y: "100vh",
      transition: {
          delay: .5
      }
  }
}


const SignIn = ({ showSignIn, setShowSignIn }) => {

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ]  = useState("");

    const usernameHandler = (ev) => {
        setUsername(ev.target.value);

    }

    const emailHandler = (ev) => {
        setEmail(ev.target.value)
    }

    const passwordHandler = (ev) => {
        setPassword(ev.target.value)
    }

    const formSubmitHandler = ev => {
        setShowSignIn(false)
        console.log(`${username}, ${email} and ${password}`);
        ev.preventDefault()
    }
  return (
    <Segment>
        <motion.div className="backdrop" variants={containerVariants} initial="start" animate="stop" exit="exit">
            <motion.div className="innercontainer" variants={innercontainerVariants} initial="start" animate="stop" exit="exit" >
                <h1 style={{ textAlign: "center" }}>Sign In </h1>
                <Form >
                    <Form.Field>
                        <label>User Name</label>
                        <input placeholder="Username" value={username} onChange={usernameHandler} />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input type="email" placeholder="example@gmail.com" value={email} onChange={emailHandler} />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <input type="password" placeholder="Enter your password here" value={password} onChange={passwordHandler} />
                    </Form.Field>
                    <Link to="/" >
                        <Button color="orange" onClick={formSubmitHandler} fluid>Sign In</Button>
                    </Link>
                </Form>
                    {/* <button onClick={() => setShowRegister(false)}>Sign In</button>
                <h1>Sign to view your Restaurants</h1> */}
            </motion.div>
        </motion.div>
      </Segment>
  )
}

export default SignIn
