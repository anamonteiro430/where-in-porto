import React from 'react'

export const tags = () => {
    const tags = ["portuguese", "grill", "healthy"]


    return ({
        tags.map(tag => {
            <div id="tags">
                <button className="pill-button" onclick={filter(tag)}>All</button>
            </div>
        }
        )
    })

}