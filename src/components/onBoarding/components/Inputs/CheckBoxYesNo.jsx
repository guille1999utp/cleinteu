import React from 'react';
import { Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel, FormGroup, FormHelperText, Typography } from '@mui/material';
import TextFields from './TextField';

export default function CheckBoxYesNo(props) {
  const { label, name, control,error, defaultValue = 0 ,sxRow={}, customOnchange= ()=>{}, specify=false, ...attrs } = props;

  return (
    <>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormGroup row sx={sxRow}>
          <Typography variant="body1" component="div" style={{ marginRight: '1rem', marginTop: '0.5rem' }}>
            {label}
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                sx={{
                '&.Mui-checked': {
                  color: "#002663",
                    },
                }}
                name='yes'
                checked={field.value === 1}
                onChange={(e)=>{
                  customOnchange(1)
                  field.onChange(1)
                }}
                {...attrs}
              />
            }
            label="Sí"
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                '&.Mui-checked': {
                  color: "#002663",
                    },
                }}
                checked={field.value === 0}
                name='no'
                onChange={(e)=>{
                  customOnchange(0)
                  field.onChange(0)
                }}
                {...attrs}
              />
            }
            label="No"
          /> 
          {(field.value && specify)? 
          <TextFields 
            name={name+"_specify"}
            label="Especifique"
            size="small"
            fullWidth
            control={control}
            defaultValue=""
          />:null}
        </FormGroup>
      )}
    />
    {error && (
      <FormHelperText sx={{ ml:1.6 ,color: 'error.main' }} >
        <>{error.message}</>
      </FormHelperText>
    )}
    </>
  );
}