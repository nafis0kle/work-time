import React from "react";

function isClick(props) {
    const isClick = props.message;

    if (isClick) {
        return <h2 style={{color: "green"}}>Операция прошла успешно</h2>
    } else {
        return <h2> </h2>;
    }
}

export default isClick;