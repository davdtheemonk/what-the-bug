import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import {Link} from "react-router-dom"
import FormLabel from '@mui/material/FormLabel';

const steps = [
  {
    label: 'Welcome to Talk Python',
    description: `Master the neccessary skills in python programming, through our curated python modules.`,
  },
  {
    label: 'Sign up or Sign in',
    description:
      'Log in or Register a new account to continue to Talk Python',
  },
  {
    label: 'Choose Module',
    description: `Choose a Python module to continue.`
  ,
  },
];

export default function Steppy() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}{index === 2 ? <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Modules</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="1"
        name="radio-buttons-group"
      >
        <FormControlLabel value="1" control={<Radio />} label="Introduction to Python programming" />
        <FormControlLabel value="2" control={<Radio />} label="Data Science fundamentals with Python" />
        <FormControlLabel value="3" control={<Radio />} label="Machine Learning fundamentals with Python" />
      </RadioGroup>
    </FormControl>:" "}{index === 1?<Link style={{color:"blue"}}to="/portal">Sign up or login</Link>:" "}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed. Redirecting...</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
