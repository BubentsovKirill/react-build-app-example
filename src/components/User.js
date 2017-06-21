import React from "react";

const User = ({username}) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <p>User Name: {username}</p>
                </div>
            </div>
        </div>
    );
}

export default User;