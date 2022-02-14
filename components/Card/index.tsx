
import React from 'react'

type Props = {
    title?: string | React.ReactNode,
    cardActions?: React.ReactNode,
    className?: string,
    classNameBody?: string,
}

const Card: React.FC<Props> = ({ children, title, cardActions, className: classNameCard, classNameBody }) => {
    return (
        <div className={`card lg:card-side card-bordered ${classNameCard}`}>
            <div className="card-body">
                {(title) && (
                    <h2 className={`card-title ${classNameBody}`}>
                        {title}
                    </h2>
                )}
                {children}
                {
                    (cardActions) && (
                        <div className="card-actions">
                            {cardActions}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Card