import { useState } from "react";
import "../styles/main.css"
import Bar from "./components/progressBar";

const Index = () => {
  const [percentage, setPercentage] = useState(0)

  return (
    <div className="mt-5">
      <Bar percentage={percentage} />

      <form >
        <div className="step step-1">
          <h3>Step 1</h3>
          <div className="mb-3">
            <label htmlFor="field1" className="form-label">Field 1:</label>
            <input type="text" className="form-control" id="field1" name="field1" />
          </div>
          <button type="button" className="btn btn-primary next-step">Next</button>
        </div>

        <div className="step step-2">
          <h3>Step 2</h3>
          <div className="mb-3">
            <label htmlFor="field2" className="form-label">Field 2:</label>
            <input type="text" className="form-control" id="field2" name="field2" />
          </div>
          <button type="button" className="btn btn-primary prev-step">Previous</button>
          <button type="button" className="btn btn-primary next-step">Next</button>
        </div>

        <div className="step step-3">
          <h3>Step 3</h3>
          <div className="mb-3">
            <label htmlFor="field3" className="form-label">Field 3:</label>
            <input type="text" className="form-control" id="field3" name="field3" />
          </div>
          <button type="button" className="btn btn-primary prev-step">Previous</button>
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Index;
