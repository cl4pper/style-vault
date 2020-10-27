import React from 'react';
import classNames from 'classnames';

// STYLE
import './Translate.scss';

const Translate = (props) => {
    const { direction } = props;

    const labels = {
        'right': 'Right',
        'left': 'Left',
        'default': '',
    };

    function setLabel() {
        return `Translate ${(labels[direction] || labels['default'])}`
    }

    return (
        <div className={classNames('Translate', {
            'Translate--right': direction === 'right',
            'Translate--left': direction === 'left',
        })}>{setLabel()}</div>
    )
}

export {
    Translate
}