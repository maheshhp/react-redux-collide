import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Label = props => (<h2>Current count: {props.counter}</h2>);

const mapStateToProps = state => ({
  counter: state.count,
});

export default connect(mapStateToProps, null)(Label);

Label.propTypes = {
  counter: PropTypes.number,
};

Label.defaultProps = {
  counter: 1,
};
