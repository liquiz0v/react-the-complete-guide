import React, {Component} from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxillary from '../Auxillary/Auxillary';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component{
        constructor() {
            super();
            this.requestInterseptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });

            this.responseInterseptor = axios.interceptors.response.use(response => response, error => {
                this.setState({error: error})
            });
        }
        state = {
            error: null
        }

        // componentWillMount() {
        //
        // }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterseptor);
            axios.interceptors.response.eject(this.responseInterseptor);
            console.log('Will unmount', this.requestInterseptor, this.responseInterseptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: false})
        }

        render (){
            return (<Auxillary>
                <Modal show={this.state.error} onCancelClick={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Auxillary>)
        }
    }
}

export default withErrorHandler;