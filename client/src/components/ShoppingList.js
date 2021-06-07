import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuid } from "uuid";

const ShoppingList = () => {
  const arr = [
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Veggies" },
    { id: uuid(), name: "Juice" },
    { id: uuid(), name: "Chicken" },
  ];
  const [items, setItems] = useState(arr);

  return (
    <div>
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter an Item");
            if (name) {
              setItems([...items, { id: uuid(), name: name }]);
            }
          }}
        >
          Add Item
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => {
              return (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        const newArr = items.filter((curr) => id !== curr.id);
                        setItems(newArr);
                      }}
                    >
                      &times;
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  );
};

export default ShoppingList;
