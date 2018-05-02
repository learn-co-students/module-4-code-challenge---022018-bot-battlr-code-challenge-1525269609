import React from 'react'

class Filter extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //
  //   }
  // }

  handleSelect = (e) => {
    this.props.selectFilter(e.target.value)
  }

  render(){
    return(
      <div className="filter">
      <span>Filter by Bot Class:  </span>
      <select onChange={this.handleSelect}>
        <option value="All">All</option>
        <option value="Support">Support</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
      </select>
      </div>
    )
  }
}

export default Filter
