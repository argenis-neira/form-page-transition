import { useState, useEffect, useRef } from "react";
import "../styles/main.css"
import Bar from "./components/progressBar";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";

const Index = () => {
  const [percentage, setPercentage] = useState(0)
  // const [page, setPage] = useState(1)

  const multiStepRef = useRef(null)

  useEffect(() => {
    //Ocultar el resto de paginas, solo mostrar la primera
    const multiStepForm = multiStepRef.current;
    const steps = multiStepForm.querySelectorAll('.step');
    for (let i = 1; i < steps.length; i++) {
      steps[i].style.display = 'none';
    }

  }, [])

  const NextPage = (page) => {
    const multiStepForm = multiStepRef.current;
    const steps = multiStepForm.querySelectorAll('.step');
    steps[page - 2].classList.add("fade-out-left")
    //preparar la siguiente pagina
    steps[page - 1].classList.remove("step")
    steps[page - 1].classList.add("fade-in-right")
    steps[page - 1].style.display = ''
    setTimeout(() => {
      setPercentage((page - 1) * 100 / 2)
      steps[page - 2].classList.remove("fade-out-left")
      steps[page - 2].style.display = 'none'
      //al remover fadeinright deberia de nuevo regresar a su position por el transition
      steps[page - 1].classList.add("step")
      steps[page - 1].classList.remove("fade-in-right")
    }, 500);
  }


  return (
    <div className="mt-5" style={{ width: "50%" }}>
      <Bar percentage={percentage} />

      <div ref={multiStepRef}>
        <div className="step">
          <Page1 nextPage={NextPage} />
        </div>
        <div className="step">
          <Page2 nextPage={NextPage} />
        </div>
        <div className="step">
          <Page3 />
        </div>


      </div>
    </div>
  );
}

export default Index;
