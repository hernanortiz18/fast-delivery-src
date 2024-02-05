import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import "@/styles/deliveryDrivers.css";

interface CircularProgressProps {
  percentage: number;
}

function CircularProgresss(props: CircularProgressProps) {
  // Validación de la prop 'percentage'
  CircularProgress.propTypes = {
    percentage: PropTypes.number.isRequired,
  };

  return (
    <div>
      <CircularProgress value={props.percentage} size="71px" color="green.400">
        <CircularProgressLabel>{`${props.percentage}%`}</CircularProgressLabel>
      </CircularProgress>
    </div>
  );
}

export default CircularProgresss;
