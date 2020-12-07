import React from 'react';
import PropTypes from 'prop-types'

function Profile (props) {
    const styleObject={color:'red',textDecoration:'underline'};
    function handleName(){
        alert("Profile user: "+props.fullName)
    };
    return(
        <div>
            <h1>{props.fullName}</h1>
            <h2>{props.bio}</h2>
            <button onClick={handleName}>click here</button>
            <h2 style={styleObject}>{props.profession}</h2>
            <h2>Age: {props.age} ans</h2>
            
            <>{props.children}</>
           
        </div>
    );
};
Profile.defaultProps= {
    fullName:"User Name" 
};
Profile.propTypes={
    fullName:PropTypes.string,
    age:PropTypes.number
}

export default Profile;
