import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Textarea,
  VStack,
  useSteps,
} from "@chakra-ui/react";
import React, { useState } from "react";

const TripAddStep = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (newIndex) => {
    setActiveStep(newIndex);
  };

  const { formControls } = steps;
  
  const renderFormControls = (step) => (
    
    <>
      {step.formControls.map((control) => (
        <FormControl m={2} key={control.name}>
        {control.label && <FormLabel>{control.label}</FormLabel>}
          {control.type === 'text' && <Input name={control.name} />}
          {control.type === 'textarea' && <Textarea  name={control.name} />}
          {control.type === 'select' && (
             <Select width={"210px"} name={control.name}> 
              {/* Map select options if provided  */}
              {control.data?.map((option) => ( 
                <option key={option.id} value={option.id}> 
                  {option.name} 
                </option> 
              ))} 
            </Select> 
         )} 
           {/* ... Add logic for other control types  */}
        </FormControl>
        
      ))}
    </>
    
  );

  return (
    <>
    <Stepper
      index={activeStep}
      orientation="vertical"
      height="400px"
      gap="0"
      onSelect={handleStepChange}
    >
      {steps.map((step, index) => (
        <Step key={index} onClick={() => handleStepChange(index)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0" width={"100px"}>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          { renderFormControls(step)}

          <StepSeparator />
        </Step>
      ))}
      
    </Stepper>
    {/* <Button onClick={() => handleStepChange(steps.length)}>Submit</Button> */}
    </>
  );
};

export default TripAddStep;
