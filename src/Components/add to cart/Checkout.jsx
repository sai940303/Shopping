import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CssBaseline,
} from "@mui/material";
import { styled } from "@mui/system";
import AddressForm from "../add to cart/AddessFrom";
import PaymentForm from "../add to cart/PymentFrom";
import Review from "../add to cart/Review";
import { useLocation } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(3),
  },
}));

const StyledLayout = styled("main")(({ theme }) => ({
  width: "auto",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
    width: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step, cartItems) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review cart={cartItems} />; // Pass the cart items here
    default:
      throw new Error("Unknown step");
  }
}


const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || []; // Retrieve cart items from location state

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
    <React.Fragment>
      <CssBaseline />
      
      <StyledLayout>
        <StyledPaper>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation and will send you an update when your order
                  has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, cartItems)} {/* Pass cartItems here */}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      style={{ marginTop: "16px", marginLeft: "8px" }}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    style={{ marginTop: "16px", marginLeft: "8px" }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </StyledPaper>
      </StyledLayout>
    </React.Fragment>
  );
};

Checkout.propTypes = {
  classes: PropTypes.object,
};

export default Checkout;
