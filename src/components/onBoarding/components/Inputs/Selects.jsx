import React from 'react';
import { Controller } from 'react-hook-form';
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

export default function SelectInput(props) {
  const { label, placeholder, customOnChange, name, idLabel, error, control, defaultValue = [], list = [], variant = "outlined", ...attrs } = props;

  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <FormControl fullWidth {...attrs}>
            <InputLabel id={idLabel}>{label}</InputLabel>
            <Select
              labelId={idLabel}
              label={label}
              variant={variant}
              value={field.value}
              onChange={(e) => {
                field.onChange(e.target.value)
                if(customOnChange){customOnChange(e.target.value)}
              }}
              error={!!fieldState.error}
            >
              {list.map((item, index) => {
                if (typeof item === 'object') {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                } else {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                }
              })}
            </Select>
            
          </FormControl>
          
        )}
        
      />
      {error && (
            <FormHelperText sx={{ ml:1.6 ,color: 'error.main' }} >
              <>{error.message}</>
            </FormHelperText>
          )}
    </>
  );
};