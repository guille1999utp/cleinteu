import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Button, Typography, FormGroup, FormHelperText } from '@mui/material';
import { FormContext } from '@/src/context/FormContext';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Input = styled('input')({
  display: 'none',
});

export default function InputFile(props) {
  const { label, name, control, defaultValue = '',error, sxRow = {}, accept = ".pdf, .png, .jpg, .jpeg", ...attrs } = props;

  const { setValue } = React.useContext(FormContext);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name)
    setValue(name, file);
  };

  return (
    <>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <>
          <FormGroup row sx={sxRow}>
            <Typography variant="body1" component="div" style={{ marginRight: '1rem' }}>
              {label}
            </Typography>
            <label htmlFor={field.name}>
              <Input
                accept={accept}
                id={field.name}
                type="file"
                {...attrs}
                onChange={handleFileChange}
              />
              <Button
                variant="contained"
                component="span"
                sx={{ backgroundColor: '#002663', color: '#fff', textTransform: 'none', padding: '2px 16px' }}
                startIcon={<CloudUploadIcon />}
              >
                Subir Archivo
              </Button>
            </label>
            {(fileName)&& (
            <FormHelperText sx={{ml:4}}>
              <>{fileName}</>
            </FormHelperText>
          )}
          </FormGroup>
         
        </>
        
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
