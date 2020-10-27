import React from 'react';
import classNames from 'classnames';

// STYLE
import './Section.scss';

const Section = (props) => {
    const {title, vertical, children} = props;

    return (
        <section className='Section'>
            <h2 className="Section__title">{title}</h2>
            <div className={classNames('Section__content', {
                'Section__content--vertical': vertical
            })}>
                { children ? children : <i>Coming soon...</i> }
            </div>
        </section>
    )
}

export {
    Section
}