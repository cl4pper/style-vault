import React from 'react';
import classNames from 'classnames';

// STYLE
import './TranslateY.scss';

const TranslateY = (props) => {
    const { direction } = props;

    const labels = {
        'up': 'up',
        'down': 'down',
        'default': '',
    };

    function setLabel() {
        return `TranslateY ${(labels[direction] || labels['default'])}`
    }

    return (
        <div className={classNames('TranslateY', {
            'TranslateY--up': direction === 'up',
            'TranslateY--down': direction === 'down',
        })}>{setLabel()}</div>
    )
}

export {
    TranslateY
}