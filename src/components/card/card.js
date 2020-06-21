import React from 'react'
import Card from 'react-bootstrap/Card'
import { motion } from "framer-motion"
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom"

const cardVariant = { 
  hover: {
    scale: 1.05, //originX: 0,
    transition: {
      type: "spring"
    }
  }
}

const CardComponent = ({ name, description, hours, image, rating }) => {

  return(
    <motion.div variants={cardVariant} whileHover="hover" >
        <Card style={{ width: '18rem' }}>
          <Link to="/restaurant-profile" style={{ color: "black" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{hours}</Card.Subtitle>
                <Card.Text>
                  {description}
                </Card.Text>
              </Card.Body>
          </Link>
          <Card.Footer>
              <StarRatingComponent 
                name="rate me"
                starCount={5}
                value={rating}
              />
          </Card.Footer>
        </Card>
    </motion.div>
   )

 }

export default CardComponent