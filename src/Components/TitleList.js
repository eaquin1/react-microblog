import React from "react"
import {Link} from "react-router-dom"

function TitleList({blogs}) {
return (
<div className="row">
    {blogs.map(b=> (
    <div className="card" key={b.id}>
        <div className="card-body">
            <div className="card-title"><Link to={b.id}>{b.title}</Link></div>
            <div className="card-text">{b.description}</div>
        </div>
    </div>
    ))}
    </div>
    
)
}

export default TitleList