const Page2 = ({ nextPage }) => {
  return (
    <div>
      <h3>Step 2</h3>
      <div className="mb-3">
        <label htmlFor="field2" className="form-label">Field 2:</label>
        <input type="text" className="form-control" id="field2" name="field2" />
      </div>
      <button type="button" className="btn btn-primary next-step" onClick={() => { nextPage(3) }}>Next</button>
    </div>
  )
}

export default Page2