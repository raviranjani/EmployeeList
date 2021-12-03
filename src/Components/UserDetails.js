import React from 'react';


const UserDetails = ({ userDetails }) => {

    return (
        <div>
            {
                userDetails && (
                    <div>
                        <h1>Employee Details</h1>
                        <h4>Id: {userDetails ? userDetails.id : null}</h4>
                        <h4>Name: {userDetails ? userDetails.name : null}</h4>
                        <h4>Age: {userDetails ? userDetails.age : null}</h4>
                    </div>
                )
            }
        </div>
    )
}

export default UserDetails;