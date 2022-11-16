import React from 'react';

const Conditions = (props) => {
    return (
        <div>
            <div>
                <p><strong>{props.responseObj.response?.place?.name}</strong></p>
                <p>It is currently {Math.round(props.responseObj.response?.ob?.tempC)} °C out with {props.responseObj.response?.ob?.weather}.</p>
            </div>
        </div>
    )
}

export default Conditions;