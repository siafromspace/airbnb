import React from "react"

function Card(prop) {
    let badgeText
    if (prop.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (prop.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={prop.coverImg} className="card--img" alt="card img" />
            <div className="card--stats">
                <img src={require("../img/star.jpg")} className="card--star" alt="card star" />
                <span> {prop.stats.rating} </span>
                <span className="gray">({prop.stats.reviewCount}) • </span>
                <span className="gray">{prop.location}</span>
            </div>
            <p>{prop.title}</p>
            <p><span className="bold">From ${prop.price}</span> / person</p>
        </div>
    )
}

export default Card