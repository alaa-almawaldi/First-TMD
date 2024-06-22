import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Slider,
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
import { MultiSelect } from "chakra-multiselect";
import React, { useState } from "react";

const TripAddStep = ({ steps, handleSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (newIndex) => {
    setActiveStep(newIndex);
  };

  const { formControls } = steps;

  const renderFormControls = (step) => (
    <>
      {step.formControls.map((control) => (
        <FormControl m={3} key={control.name}>
          {control.label && <FormLabel>{control.label}</FormLabel>}
          {control.type === "text" && (
            <Input
              required={control.required}
              name={control.name}
              onChange={control.onchange}
            />
          )}
          {control.type === "textarea" && (
            <Textarea
              required={control.required}
              name={control.name}
              onChange={control.onchange}
            />
          )}
          {control.type === "date" && (
            <Input
              name={control.name}
              placeholder="Select Date"
              size="md"
              type="date"
              required={control.required}
              onChange={control.onchange}
            />
          )}
          {control.type === "select" && (
            <Select
              width={"210px"}
              name={control.name}
              required={control.required}
              onChange={control.onchange}
              placeholder="select.."
            >
              {control.data?.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Select>
          )}
          {control.type === "select-plane-trip" && (
            <Select
              width={"290px"}
              name={control.name}
              required={control.required}
              onChange={control.onchange}
              placeholder={`select a ${control.name}..`}
            >
              {control.data?.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {option.plane.name} -{option.flight_date} -{" "}
                  {option.landing_date}
                </option>
              ))}
            </Select>
          )}
          {control.type === "range-number" && (
            <NumberInput
              size="md"
              step={control?.step || 5}
              max={control.max}
              min={control.min}
              name={control.name}
            >
              <NumberInputField
                onChange={control.onchange}
                required={control.required}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
          {control.type === "multi-select" && (
            <MultiSelect
              options={control.data}
              value={control.value}
              placeholder={`Choose a ${control.name}`}
              onChange={control.onchange}
              searchPlaceholder="search.."
            />
          )}
        </FormControl>
      ))}
    </>
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
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

              {renderFormControls(step)}

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Button
          mt={350}
          type="submit"
          onClick={() => handleStepChange(steps.length)}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default TripAddStep;
