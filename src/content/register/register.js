import React from 'react'
import { motion  } from 'framer-motion'
import "./styles.css"
import { Link } from 'react-router-dom'
import { Form, Button, Checkbox, Segment } from "semantic-ui-react"

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

const Register = ({showRegister, setShowRegister}) => {
  return (
      <Segment>
        <motion.div className="backdrop" variants={containerVariants} initial="start" animate="stop" exit="exit">
            <motion.div className="innercontainer" variants={innercontainerVariants} initial="start" animate="stop" exit="exit" >
                <h1 style={{ textAlign: "center" }}>Register Here</h1>
                <Form>
                    <Form.Field>
                        <label>User Name</label>
                        <input placeholder="Username" />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input type="email" placeholder="example@gmail.com" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" placeholder="Your password" />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm your password" />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label="I agree to the Terms and Conditions" />
                    </Form.Field>
                    <Link to="/" >
                        <Button color="orange" onClick={() => setShowRegister(false)} fluid>Submit</Button>
                    </Link>
                </Form>
                    {/* <button onClick={() => setShowRegister(false)}>Sign In</button>
                <h1>Sign to view your Restaurants</h1> */}
            </motion.div>
        </motion.div>
      </Segment>
  )
}

export default Register
