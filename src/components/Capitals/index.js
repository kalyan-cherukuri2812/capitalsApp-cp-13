import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {status: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({status: event.target.value})
  }

  render() {
    const {status} = this.state
    const filteredList = countryAndCapitalsList.find(each => each.id === status)

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="sub-card">
            <select
              className="sel"
              value={status}
              onChange={this.onChangeOption}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="opt">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of Which Country?</p>
          </div>
          <p className="c-p">{filteredList.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
