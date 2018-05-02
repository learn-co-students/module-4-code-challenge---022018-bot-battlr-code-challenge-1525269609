import React from 'react';

const BotFilter = props => {
  return (
    <div className="filter">
      <select className="ui selection dropdown" onChange={props.handleClassChange}>
        <option value="all">All Classes</option>
        <option value="Support">Support</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
      </select>
      <select className="ui selection dropdown" onChange={props.handleSortChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
      <button className="ui button" onClick={props.sort}>Sort</button>
    </div>
  )
}

export default BotFilter
