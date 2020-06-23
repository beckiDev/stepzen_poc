import React from 'react'

const Course = (props) => {
    const { id, title, author, description, url } = props.course
    return (
        <div className="card" style={{'width': '100%', 'margin': '10px', "textAlign": "left"}} key={id}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle text-muted">{author}</h6>
                <p className="card-text">{description}</p>
                <a href={url} className="card-link">Go to Course...</a>
            </div> 
        </div>
    )
}

export default Course
