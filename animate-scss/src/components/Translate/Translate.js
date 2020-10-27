import React from 'react';
import classNames from 'classnames';

// STYLE
import './Translate.scss';

const Translate = (props) => {
    const { direction } = props;

    const labels = {
        'right': 'to right',
        'left': 'to left',
        'up': 'up',
        'down': 'down',
        'default': '',
    };

    function setLabel() {
        return `Translate ${(labels[direction] || labels['default'])}`
    }

    return (
        <div className={classNames('Translate', {
            'Translate--right': direction === 'right',
            'Translate--left': direction === 'left',
            'Translate--up': direction === 'up',
            'Translate--down': direction === 'down',
            'Translate--vertical': direction === 'vertical',
        })}>{setLabel()}</div>
    )
}

export {
    Translate
}