import React from 'react';

const ProgressWheel = ({ size, progress }) => {
    const shapeRadius = size / 2;
    const stroke = shapeRadius / 3.33;
    const circleRadius = shapeRadius - stroke;
    const circumference = 2 * Math.PI * circleRadius;
    const offset = circumference - (progress / 100 * circumference);

    return (
        <svg width={ size } height={ size }>
            <circle
                cx={ shapeRadius }
                cy={ shapeRadius }
                r={ circleRadius }
                fill="transparent"
                stroke="#00b894"
                strokeWidth={ stroke } />
            <circle
                cx={ shapeRadius }
                cy={ shapeRadius }
                r={ circleRadius }
                fill="transparent"
                stroke="#ff7675"
                strokeWidth={ stroke }
                strokeDasharray={circumference + " " + circumference}
                strokeDashoffset={offset}
                transform={`rotate(-90, ${shapeRadius}, ${shapeRadius})`} />
        </svg>
    );
};

export default ProgressWheel;