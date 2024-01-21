const Bar = ({ percentage }) => {
  //solamente hay 3 posibles porcentajes, asi que cuidado, yo seleccionare 3
  //si agregas mas paginas debes cambiar el codigo aqui tambien
  return (
    <div>
      <div className="progress px-1" style={{ height: "3px" }}>
        <div className="progress-bar" role="progressbar" style={{ width: percentage + "%", backgroundColor: "#ec1c24" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="step-container d-flex justify-content-between">
        <div>
          <img src="/check-mark.svg" alt="" className="step-check" />
        </div>
        {percentage === 50 || percentage === 100 ? <img src="/check-mark.svg" alt="" className="step-check" /> : <div className="step-circle"></div>}
        {percentage === 100 ? <img src="/check-mark.svg" alt="" className="step-check" /> : <div className="step-circle"></div>}
      </div>
    </div>
  )
}

export default Bar