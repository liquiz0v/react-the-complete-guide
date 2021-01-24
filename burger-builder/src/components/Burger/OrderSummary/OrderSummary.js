import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

import React, {Component} from 'react';

class OrderSummary extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[OrderSummary] componentDidUpdate")
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingredient =>
                <li key={ingredient}>
                    <span style={{TextTransform: 'capitalize'}}>{ingredient}</span>: {this.props.ingredients[ingredient]}
                </li>);
        return (<Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price is: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Success" clicked={this.props.onContinueClick}>CONTINUE</Button>
            <Button btnType="Danger" clicked={this.props.onCancelClick}>CLOSE</Button>
        </Aux>);
    }
}

export default OrderSummary;