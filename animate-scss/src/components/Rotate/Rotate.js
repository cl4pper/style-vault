import React from 'react';
import classNames from 'classnames';

// STYLE
import './Rotate.scss';

const Rotate = (props) => {
    const { label, clockwise, counterclock } = props;

    return (
        <div className={classNames('Rotate', {
            'Rotate--clockwise': clockwise,
            'Rotate--counterclock': counterclock,
        })}>{label}</div>
    )
}

export {
    Rotate
}