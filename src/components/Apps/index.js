import './index.css'

const Apps = props => {
  const {historyDetails, deleteFunction} = props
  const {domainUrl, timeAccessed, logoUrl, title, id} = historyDetails

  const change = () => {
    deleteFunction(id)
  }
  return (
    <div className="mm">
      <div className="list-container">
        <p className="c">{timeAccessed}</p>
        <img src={logoUrl} className="img-adjust c" alt="sita" />
        <p className="c">{title}</p>
        <p className="c">{domainUrl}</p>
      </div>
      <div>
        <button type="submit" onClick={change}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="ram"
            className="img-adjust"
          />
        </button>
      </div>
    </div>
  )
}

export default Apps
