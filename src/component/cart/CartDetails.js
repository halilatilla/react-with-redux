import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";

class CartDetails extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName);
  }
  render() {
    return (
      <div>
        {" "}
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>productName</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                <th scope="row"> {cartItem.product.id} </th>
                <td> {cartItem.product.productName} </td>
                <td> {cartItem.product.quantityPerUnit} </td>
                <td> {cartItem.quantity} </td>
                <td>
                  <Button
                    color="success"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDetails);
