import React, { useState } from 'react';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import SelectInput from '../../../Inputs/Selects';
import TextFields from '../../../Inputs/TextField';
import { typeOfDocument } from '@/src/utils/variables';

const Representante = ({ control, errors }) => {
  const [rowCount, setRowCount] = useState(0);

  const addRow = () => {
    setRowCount(rowCount + 1);
  };

  return (
    <TableBody>
      {[...Array(rowCount)].map((_, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell>
            <SelectInput
              name={`representante[${index}].identification_type`}
              control={control}
              defaultValue=""
              variant="standard"
              error={errors?.representante?.[index]?.identification_type ?? null}
              list={typeOfDocument}
              fullWidth
              size="small"
            />
          </TableCell>
          <TableCell>
            <TextFields
              name={`representante[${index}].identification_number`}
              size="small"
              type="number"
              variant="standard"
              error={errors?.representante?.[index]?.identification_number ?? null}
              control={control}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextFields
              name={`representante[${index}].name_lastname`}
              size="small"
              variant="standard"
              error={errors?.representante?.[index]?.name_lastname ?? null}
              control={control}
              fullWidth
            />
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell colSpan={3} align="right">
            <Button type="button" onClick={addRow} variant="contained" sx={{ margin: "auto", backgroundColor: '#002663', color: '#fff', textTransform: 'none', padding: '2px 16px' }}>
            Añadir Contacto
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default Representante;
