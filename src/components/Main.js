import React from "react";

const Main = ({changeUserName}) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button
                        className="btn btn-primary"
                        onClick={changeUserName}>Change the Username</button>
                </div>
            </div>
        </div>
    );
};

export default Main;
