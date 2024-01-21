const Page3 = () => {
  return (
    <div>
      <h3>Step 3</h3>
      <div className="mb-3">
        <label htmlFor="field3" className="form-label">Field 3:</label>
        <input type="text" className="form-control" id="field3" name="field3" />
      </div>
      <button type="button" className="btn btn-success">Submit</button>
    </div>
  )
}

export default Page3