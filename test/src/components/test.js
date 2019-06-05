import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Address extends Component {
    render() {
        return (
            <div>
                My Address is {this.props.address}
            </div>
        )
    }
}

Address.propTypes = {
    address: PropTypes.string
}