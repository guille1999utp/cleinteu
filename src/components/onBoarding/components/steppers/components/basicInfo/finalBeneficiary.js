import React, {  useEffect, useState } from 'react';
import { Button, TableBody, TableCell, TableRow } from '@mui/material';
import SelectInput from '../../../Inputs/Selects';
import TextFields from '../../../Inputs/TextField';
import CheckBoxYesNo from '../../../Inputs/CheckBoxYesNo';
import { typeOfDocument } from '@/src/utils/variables';

const FinalBeneficiary = ({ control, errors, watch = ()=>{} }) => {
  const [rowCount, setRowCount] = useState(0);

  const addRow = () => {
    setRowCount(rowCount + 1);
  };

  useEffect(() => {
    const transactionPerson = watch('transaction_person');
    const controlLegalPerson = watch('control_legal_person');
    const benefitLegalPerson = watch('benefit_legal_person');

    if (transactionPerson || controlLegalPerson || benefitLegalPerson) {
    if(rowCount > 0) return;
      setRowCount(1);
    }
  }, [watch('transaction_person'), watch('control_legal_person'), watch('benefit_legal_person')]);

  return (
    <TableBody>
      {[...Array(rowCount)].map((_, index) => (
        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell>
            <SelectInput
              name={`contact_final_beneficiary[${index}].identification_type`}
              control={control}
              defaultValue=""
              variant="standard"
              error={errors?.contact_final_beneficiary?.[index]?.identification_type ?? null}
              list={typeOfDocument}
              fullWidth
              size="small"
            />
          </TableCell>
          <TableCell>
            <TextFields
              name={`contact_final_beneficiary[${index}].identification_number`}
              size="small"
              type="number"
              variant="standard"
              error={errors?.contact_final_beneficiary?.[index]?.identification_number ?? null}
              control={control}
              fullWidth
            />
          </TableCell>
          <TableCell>
            <TextFields
              name={`contact_final_beneficiary[${index}].name_lastname`}
              size="small"
              variant="standard"
              error={errors?.contact_final_beneficiary?.[index]?.name_lastname ?? null}
              control={control}
              fullWidth
            />
          </TableCell>
          <TableCell align='right'>
            <CheckBoxYesNo
              label=""
              sxRow={{ justifyContent: "center" }}
              name={`contact_final_beneficiary[${index}].transfers_abroad_beneficiaries`}
              control={control}
              fullWidth
            />
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell colSpan={4} align="right">
          <Button type="button" onClick={addRow} variant="contained" sx={{ margin: "auto", backgroundColor: '#002663', color: '#fff', textTransform: 'none', padding: '2px 16px' }}>
            Añadir Contacto
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default FinalBeneficiary;
