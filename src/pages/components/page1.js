const Page1 = ({ nextPage }) => {
  return (
    <div>
      <h3>Step 1</h3>
      <div className="mb-3">
        <label htmlFor="field1" className="form-label">Field 1:</label>
        <input type="text" className="form-control" id="field1" name="field1" />
      </div>
      <button type="button" className="btn btn-primary next-step" onClick={() => { nextPage(2) }}>Next</button>
    </div>
  )
}

export default Page1