import React from "react";

import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./team.style.scss";


const TeamPage = () => (
  <div className="teampage">
    <CardDeck>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/images/timothylimothy.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  </div>
);

export default TeamPage;
