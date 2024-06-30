import React from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export default function CheckboxInput(props) {
  const { label, name, control, defaultValue = false, ...attrs } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              color="primary"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked?1:0)}
              {...attrs}
            />
          }
          label={label}
        />
      )}
    />
  );
}