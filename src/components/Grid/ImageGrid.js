import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getImages } from "../../actions/character";
import { ImageGridItem } from "./ImageGridItem";

export const ImageGrid = () => {
    
    const dispatch = useDispatch();

    dispatch( getImages() );

    const { data } = useSelector(state => state.character);

    return (
        <>
            <div className="card-grid">
                {
                    data.length > 0 && data.map( img => (
                        <ImageGridItem key={ img.id } 
                        { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
