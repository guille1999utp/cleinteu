import React, { useEffect, useState } from 'react';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import SelectInput from '../../../Inputs/Selects';
import TextFields from '../../../Inputs/TextField';
import CheckBoxYesNo from '../../../Inputs/CheckBoxYesNo';
import { typeOfDocument } from '@/src/utils/variables';
import { FormContext } from '@/src/context/FormContext';

const DynamicTable = ({ control, errors, typePerson }) => {
  const [rowCount, setRowCount] = useState(0);

  const { setValue } = React.useContext(FormContext);

  const addRow = () => {
    setRowCount(rowCount + 1);
  };

  useEffect(() => {
    if (typePerson === "Persona Jurídica") {
      setRowCount(1);
    } else {
      setRowCount(0);
    }
  }, [typePerson]);

  return (
    <TableBody>
      {[...Array(rowCount)].map((_, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell>
            <SelectInput
              name={`partners_info_contact[${index}].identification_type`}
              control={control}
              defaultValue=""
              variant="standard"
              error={errors?.partners_info_contact?.[index]?.identification_type ?? null}
              list={typeOfDocument}
              fullWidth
              size="small"
            />
          </TableCell>
          <TableCell>
            <TextFields
              name={`partners_info_contact[${index}].identification_number`}
              size="small"
              type="number"
              variant="standard"
              error={errors?.partners_info_contact?.[index]?.identification_number ?? null}
              control={control}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextFields
              name={`partners_info_contact[${index}].partners_percent`}
              size="small"
              type="number"
              customOnchange={(e) => {
                setValue(`partners_info_contact[${index}].partners_percent`, parseInt(e.target.value) > 100 ? 100 : parseInt(e.target.value));
                if(parseInt(e.target.value) < 0) setValue(`partners_info_contact[${index}].partners_percent`, 0);
                }}
              variant="standard"
              error={errors?.partners_info_contact?.[index]?.partners_percent ?? null}
              control={control}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextFields
              name={`partners_info_contact[${index}].name_lastname`}
              size="small"
              variant="standard"
              error={errors?.partners_info_contact?.[index]?.name_lastname ?? null}
              control={control}
              fullWidth
            />
          </TableCell>
          <TableCell align='right'>
            <CheckBoxYesNo
              name={`partners_info_contact[${index}].transfers_abroad_partners`}
              label=""
              sxRow={{ justifyContent: "center" }}
              control={control}
              fullWidth
            />
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell colSpan={5} align="right">
            <Button type="button" onClick={addRow} variant="contained" sx={{ margin:"auto",backgroundColor: '#002663', color: '#fff', textTransform: 'none', padding: '2px 16px' }}>
                Añadir Contacto
            </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default DynamicTable;
