import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredient =>
            <li key={ingredient}>
                <span style={{TextTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
            </li>);
    return (<Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Total price is: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Success" clicked={props.onContinueClick}>CONTINUE</Button>
        <Button btnType="Danger" clicked={props.onCancelClick}>CLOSE</Button>
    </Aux>);
};

export default orderSummary;