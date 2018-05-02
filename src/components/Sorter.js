import React from "react";

const Sorter = props => {
  return (
      <select value={props.sortBy} onChange={props.changeSort}>
        <option value="id">ID</option>
        <option value="health">HEALTH</option>
        <option value="damage">DAMAGE</option>
        <option value="armor">ARMOR</option>
      </select>
  )
}

export default Sorter
