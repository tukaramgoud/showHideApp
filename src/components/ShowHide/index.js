// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  firstName = () => {
    this.setState(pervState => ({first: !pervState.first}))
  }

  lastName = () => {
    this.setState(pervState => ({last: !pervState.last}))
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="background-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div>
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {first && (
              <div className="name-container">
                <p>Joe</p>
              </div>
            )}
          </div>

          <div>
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {last && (
              <div className="name-container">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
