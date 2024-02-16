// Write your code here
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

class CowinDashboard extends Component {
  state = {Data: []}

  componentDidMount() {
    this.renderObjects()
  }

  renderObjects = async () => {
    const Url = 'https://apis.ccbp.in/covid-vaccination-data'
    const reponse = await fetch(Url)
    const data = await reponse.json()
    const updatedData = data.last_7_days_vaccination.map(eachItem => ({
      dose1: eachItem.dose1,
      dose2: eachItem.dose2,
      vaccinationDate: eachItem.vaccination_date,
    }))
    this.setState({Data: updatedData})
    console.log(updatedData)
  }

  render() {
    const {Data} = this.state
    return (
      <div className="overall">
        <div className="top">
          <div className="header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              className="logo-size"
              alt="website logo"
            />
            <h1 className="title">Co-WIN</h1>
          </div>
          <p className="header-para">Co-WIN Vaccination in India</p>
        </div>
        <VaccinationCoverage needData={Data} />
      </div>
    )
  }
}
export default CowinDashboard
