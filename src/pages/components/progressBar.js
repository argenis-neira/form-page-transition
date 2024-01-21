const Bar = ({ percentage }) => {
  return (
    <div>
      <div className="progress px-1" style={{ height: "3px" }}>
        <div className="progress-bar" role="progressbar" style={{ width: percentage + "%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="step-container d-flex justify-content-between">
        <div className="step-circle">1</div>
        <div className="step-circle">2</div>
        <div className="step-circle">3</div>
      </div>
    </div>
  )
}

export default Bar