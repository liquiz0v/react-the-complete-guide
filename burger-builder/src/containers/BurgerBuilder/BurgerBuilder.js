import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary/Auxillary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import axios from "axios";
import axiosOrdersInstance from "../../axios-orders";
import Spinner from '../../components/UI/Spinner/Spinner';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from "axios";

import Auxillary from '../../hoc/Auxillary/Auxillary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        isOrderModalShown: false,
        isOrderUploading: false,
        error: false
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

    componentDidMount() {
        axios.get('https://burger-application-reactguide-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            }).catch(err => {
            this.setState({error: err})
        })
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
        this.setState({ isOrderUploading: true })
        // alert('Continue!');
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice, // Should be calculated on backend in real app
            customer: {
                name: 'TestName',
                address: {
                    street: 'TestStreet',
                    zipCode: '123456',
                    country: 'Ukraine'
                },
                email: 'testEmail@i.ua'
            },
            deliveryMethod: 'fastest'
        }

        axiosOrdersInstance.post('/orders.json', order).then(
            response => {
                this.setState({ isOrderUploading: false, isOrderModalShown: false })
            }
        ).catch(err => {
            this.setState({ isOrderUploading: false, isOrderModalShown: false })
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let i in disabledInfo){
            disabledInfo[i] = disabledInfo[i] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        if(this.state.ingredients){
            burger = (
                <Auxillary>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        currentPrice={this.state.totalPrice}
                        showOrderModal={this.showOrderModalHandler}/>
                </Auxillary>
                )
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                onCancelClick={this.onCloseOrderHandler}
                onContinueClick={this.onContinueOrderHandler}
                totalPrice={this.state.totalPrice}
            />
            }

        if (this.state.isOrderUploading && this.state.ingredients) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal
                    show={this.state.isOrderModalShown}
                    onCancelClick={this.onCloseOrderHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axiosOrdersInstance);