import React from 'react'

export const ImageGridItem = ({ name, image }) => {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
    )
}
