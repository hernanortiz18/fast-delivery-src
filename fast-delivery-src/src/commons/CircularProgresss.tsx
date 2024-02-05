import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

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
      <CircularProgress
        value={props.percentage}
        size="120px"
        color="green.400"
        style={{ top: '55px', left: '55px' }}
      >
        <CircularProgressLabel>{`${props.percentage}%`}</CircularProgressLabel>
      </CircularProgress>
    </div>
  );
}

export default CircularProgresss;