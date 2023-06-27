import React from 'react'
import  "./UserCard.css"
const UserCard = (props) => {
  return (
    <div>
        <h1>{props.user.id}</h1>
        

        
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://www.mts-wetlab.com/wp-content/uploads/2019/07/mts-testimonials-man.png" alt="person-icon "/></div>
        <div className="card_content">
          <h2 className="card_title">{props.user.name}{props.user.username}</h2>
          <div className="card_text">
            <p>{props.user.email}</p>
            <p>Adresse: </p>
                <p>Street:{props.user.address.street}</p>
                <p>Suite:{props.user.address.suite}</p>
                <p>City:{props.user.address.city}</p>
                <p>Zipcode:{props.user.address.zipcode}</p>
                <p>Geo:</p>
                <p>lat:{props.user.address.geo.lat}</p>
                <p>lng:{props.user.address.geo.lng}</p>
          </div>
        </div>
      </div>
    </li>
    
        
    </div>
  )
}

export default UserCard