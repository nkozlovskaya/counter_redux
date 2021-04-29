import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../action';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className='jumbotron'>
      <h2 id='counter'>{counter}</h2>
      <button
        className='btn btn-primary btn-lg'
        onClick={inc}>
        INC
      </button>
      <button
        className='btn btn-primary btn-lg'
        onClick={dec}>
        DEC
      </button>
      <button
        className='btn btn-primary btn-lg'
        onClick={rnd}>
        RND
      </button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(Counter);