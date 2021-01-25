import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        isOrderModalShown: false
    }

    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredients
        // };

        const sum = Object.keys(ingredients)
            .map((key) => {
                return ingredients[key];
            })
            .reduce((sum, element) => sum + element, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition;

        this.setState({ingredients: updateIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updateIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }

        let updatedCount = oldCount - 1;


        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updatedCount;

        const priceRemoving = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        let newPrice = oldPrice - priceRemoving;

        this.setState({ingredients: updateIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updateIngredients);
    };

    showOrderModalHandler = () => {
        this.setState({isOrderModalShown: true});
    }

    onCloseOrderHandler = () => {
        this.setState({isOrderModalShown: false});
    }

    onContinueOrderHandler = () => {
        alert('Continue!');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let i in disabledInfo){
            disabledInfo[i] = disabledInfo[i] <= 0;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.isOrderModalShown}
                    onCancelClick={this.onCloseOrderHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        onCancelClick={this.onCloseOrderHandler}
                        onContinueClick={this.onContinueOrderHandler}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    currentPrice={this.state.totalPrice}
                    showOrderModal={this.showOrderModalHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;