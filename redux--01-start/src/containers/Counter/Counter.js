import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label={`Add 5`} 
                    clicked={this.props.onAddinitionCounter}  />
                <CounterControl label={`Subtract 5`} 
                    clicked={this.props.onSubtractionCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store results</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))} 
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddinitionCounter: () => dispatch({ type: 'ADDITION', value: 5 }),
        onSubtractionCounter: () => dispatch({ type: 'SUBTRACTION', value: 5 }),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElementId: id}),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);