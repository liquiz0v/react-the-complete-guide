import React, {PureComponent} from 'react';
import Person from './Person/Person'


class Persons extends PureComponent{

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('[Persons.js] componentWillReceiveProps', this.props);
    // } REMOVED

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons) { // If the nextProps isn't changed, then component isn't updating.
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //
    // } REMOVED

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering')
        return this.props.persons.map((person, index) => {

            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
            />

        });
    }

}

export default Persons;