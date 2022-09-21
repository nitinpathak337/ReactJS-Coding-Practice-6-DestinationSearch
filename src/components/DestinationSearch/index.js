// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchDestinationList = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchedDestinationList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            className="search-element"
            placeholder="Search"
            type="search"
            onChange={this.searchDestinationList}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="list-container">
          {searchedDestinationList.map(eachItem => (
            <DestinationItem key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
