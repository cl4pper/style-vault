import React from 'react';
import classNames from 'classnames';

// STYLE
import './TranslateX.scss';

const TranslateX = (props) => {
    const { direction } = props;

    const labels = {
        'right': 'to right',
        'left': 'to left',
        'default': '',
    };

    function setLabel() {
        return `TranslateX ${(labels[direction] || labels['default'])}`
    }

    return (
        <div className={classNames('TranslateX', {
            'TranslateX--right': direction === 'right',
            'TranslateX--left': direction === 'left',
        })}>{setLabel()}</div>
    )
}

export {
    TranslateX
}