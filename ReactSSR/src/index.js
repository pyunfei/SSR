import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/index';

function Index(props) {
  console.log(props.list.data)
  useEffect(() => {
    props.addList()
  }, [])
  return <div>
    {
      Array.isArray(props.list.data) && props.list.data && props.list.data.map(item => <p key={item.name}>{item.name}</p>)
    }
  </div>
}

export default connect(
  state => state.home,
  actions
)(Index);