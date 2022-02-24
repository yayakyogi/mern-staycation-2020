import React, { useState } from "react";
import propTypes from "prop-types";

export default function Stepper(props) {
  const { steps, initialStep } = props; // destructuring props
  const stepsKeys = Object.keys(steps); // change  object steps to array

  const [CurrentStep, setCurrentStep] = useState(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0] // cek kecocokan state dari user dan current state
  );
  const totalStep = stepsKeys.length; // cek jumlah panjang stepsnya
  const indexStep = stepsKeys.indexOf(CurrentStep); // variabel untuk melihat index state ke berapa

  function prevStep() {
    // cek apakah index > 0 jika ya baru jalankan decrement
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1]);
  }
  function nextStep() {
    // ceke apakah indexStep < totalStep jika ya jalnkan increment
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1]);
  }
  // return component parent dari stepper
  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
}
Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
