import React from 'react';

export default (props)=>{
    let src = require(`../assets/${props.name}`);
    return <img alt="" {...props} src={src}/> ;
};