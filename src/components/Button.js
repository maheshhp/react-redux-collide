import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementAction } from '../redux/actions';

const Button = props => (<button onClick={props.increment}>Click Me</button>);

const mapDispatchToProps = dispatch => ({ increment: () => dispatch(incrementAction()) });

export default connect(null, mapDispatchToProps)(Button);

Button.propTypes = {
  increment: PropTypes.func,
};

Button.defaultProps = {
  increment: () => {},
};
