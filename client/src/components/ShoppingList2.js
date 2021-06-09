import React, { useState, Component, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

const ShoppingList2 = ({ items, getItems, deleteItem }) => {
  useEffect(() => {
    getItems();
  }, []);

  const onDeleteFunc = (id) => {
    deleteItem(id);
  };

  console.log(items);
  return (
    <div>
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => {
              return (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={() => onDeleteFunc(_id)}
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

const mapStateToProps = (state) => ({
  items: state.item.items,
});

export default connect(mapStateToProps, { getItems, deleteItem })(
  ShoppingList2
);
