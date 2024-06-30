import { FormHelperText, TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function TextFields(props) {

  const { label, placeholder, name, error, control,customOnchange, variant = "outlined", defaultValue = "", ...attrs } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <TextField
            label={label}
            variant={variant}
            placeholder={placeholder}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : null}
            {...field}
            {...attrs}
            onChange={(e) => {
              field.onChange(e.target.value);
              if(customOnchange) customOnchange(e);
            }}
          />
        )}
      />
    </>
  );
}
