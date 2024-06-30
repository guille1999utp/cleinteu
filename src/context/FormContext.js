"use client"

import React, { createContext } from 'react';
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  type_person: yup.string().required('Este campo es requerido'),
  identification_type: yup.string().required('Este campo es requerido'),
  identification_number: yup.string().required('Este campo es requerido'),
  razon_social: yup.string().when('type_person', {
    is: "Persona Jurídica",
    then: (schema) => schema.required('Este campo es requerido'),
  }),
  name: yup.string().when('type_person', {
    is:"Persona Natural",
    then: (schema) => schema.required('Este campo es requerido'),
  }),
  lastname: yup.string().when('type_person', {
    is:"Persona Natural",
    then: (schema) => schema.required('Este campo es requerido'),
  }),
  genre: yup.string().when('type_person', {
    is:"Persona Natural",
    then: (schema) => schema.required('Este campo es requerido'),
  }),
  direction: yup.string().required('Este campo es requerido'),
  phone: yup.string().required('Este campo es requerido'),
  email: yup.string().email('El email no es valido').required('Este campo es requerido').test('has-at-sign', 'El email debe contener "@"', (value) => value && value.includes('@')),
  type_company: yup.string().when('type_person', {
    is: "Persona Jurídica",
    then: (schema) => schema.required('Este campo es requerido'),
  }), 
  code_ciiu: yup.string().required('Este campo es requerido'),
  country: yup.string().required('Este campo es requerido'),
  city: yup.string().required('Este campo es requerido'),
  country_constitution: yup.string().required('Este campo es requerido'),
  economic_activity: yup.string().required('Este campo es requerido'),
  name_contact_1: yup.string().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) =>schema.required('Este campo es requerido'),
  }),
  phone_contact_1: yup.string().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) =>schema.required('Este campo es requerido'),
  }),
  email_contact_1: yup.string().when('type_person', {
    is: "Persona Jurídica",
    then: (schema) =>schema.email('El email no es valido').required('Este campo es requerido'),
  }),
  charge_contact_1: yup.string().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) =>schema.required('Este campo es requerido'),
  }),
  name_contact_2: yup.string().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) =>schema.required('Este campo es requerido'),
  }),
  phone_contact_2: yup.string().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) =>schema.required('Este campo es requerido'),
  }),
  email_contact_2: yup.string().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) =>schema.email('El email no es valido').required('Este campo es requerido'),
  }),
  charge_contact_2: yup.string().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) =>schema.required('Este campo es requerido'),
  }),
  representante: yup.array().of(
    yup.object().shape({
      identification_number: yup.string().required('Este campo es requerido'),
      identification_type: yup.string().required('Este campo es requerido'),
      name_lastname: yup.string().required('Este campo es requerido')
    })
  ),
  contact_final_beneficiary: yup.array().of(
    yup.object().shape({
      identification_number: yup.string().required('Este campo es requerido'),
      identification_type: yup.string().required('Este campo es requerido'),
      name_lastname: yup.string().required('Este campo es requerido'),
      transfers_abroad_beneficiaries: yup.string().required('Este campo es requerido')
    })
  ),
  partners_info_contact: yup.array().of(
    yup.object().shape({
      identification_number: yup.string().required('Este campo es requerido'),
      identification_type: yup.string().required('Este campo es requerido'),
      name_lastname: yup.string().required('Este campo es requerido'),
      partners_percent: yup.string().required('Este campo es requerido')
    })
  ),
  income: yup.string().required('Este campo es requerido'),
  expenses: yup.string().required('Este campo es requerido'),
  other_income: yup.string().required('Este campo es requerido'),
  concept_other_income: yup.string().required('Este campo es requerido'),
  active: yup.string().required('Este campo es requerido'),
  liabilities: yup.string().required('Este campo es requerido'),
  heritage: yup.string().required('Este campo es requerido'),
  foreign_currency_transactions: yup.boolean().required('Este campo es requerido'),
  imports: yup.boolean().required('Este campo es requerido'),
  exports: yup.boolean().required('Este campo es requerido'),
  investments: yup.boolean().required('Este campo es requerido'),
  financial_products_abroad: yup.boolean().required('Este campo es requerido'),
  transfers_abroad: yup.boolean().required('Este campo es requerido'),
  terms_conditions: yup.boolean().test('is-true', 'Debe aceptar los términos y condiciones', value => value === true).required('Este campo es requerido'),
  transaction_person: yup.boolean(),
  control_legal_person: yup.boolean(),
  conflictOfInterestDeclaration: yup.boolean().test('is-true', 'Debe aceptar', value => value === true).required('Este campo es requerido'),
  conflictOfInterestDeclaration_specify: yup.string().when('conflictOfInterestDeclaration', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  personalInterestDisclosure: yup.boolean().test('is-true', 'Debe aceptar', value => value === true).required('Este campo es requerido'),
  personalInterestDisclosure_specify: yup.string().when('personalInterestDisclosure', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  belong_pep: yup.boolean(),
  belong_pep_specify: yup.string().when('belong_pep', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  spouse_pep: yup.boolean(),
  spouse_pep_specify: yup.string().when('spouse_pep', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  family_pep_second_degree: yup.boolean(),
  family_pep_second_degree_specify: yup.string().when('family_pep_second_degree', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  family_pep_first_degree: yup.boolean(),
  family_pep_first_degree_specify: yup.string().when('family_pep_first_degree', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  family_pep_civil_degree: yup.boolean(),
  family_pep_civil_degree_specify: yup.string().when('family_pep_civil_degree', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  power_sign_foreign_accounts: yup.boolean(),
  power_sign_foreign_accounts_specify: yup.string().when('power_sign_foreign_accounts', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  declare_funds_legal: yup.boolean(),
  declare_funds_legal_specify: yup.string().when('declare_funds_legal', {
    is:true,
    then:(schema) => schema.required('Este campo es requerido'),
  }),
  origin_resources: yup.string().required('Este campo es requerido'),
  benefit_legal_person: yup.boolean(),
  document_identity:yup.mixed().when('type_person', {
    is:"Persona Natural",
    then: (schema) => schema.test('filePresence', 'El archivo es requerido', value => {
      return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
    })
    .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
    if (value) {
      return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
    }
    return true; // Permitir que el campo esté vacío
    })
    .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
    if (value) {
      return value.size <= 10485760; // 2 megabytes en bytes
    }
    return true; // Permitir que el campo esté vacío
    })
  }),
  financial_statements:yup.mixed().when('type_person', {
    is:"Persona Natural",
    then: (schema) => schema.test('filePresence', 'El archivo es requerido', value => {
      return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
    })
    .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
    if (value) {
      return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
    }
    return true; // Permitir que el campo esté vacío
    })
    .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
    if (value) {
      return value.size <= 10485760; // 2 megabytes en bytes
    }
    return true; // Permitir que el campo esté vacío
    }),
  }),
bank_certificate:yup.mixed().when('type_person', {
  is:"Persona Natural",
  then: (schema) => schema.test('filePresence', 'El archivo es requerido', value => {
    return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
  })
  .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
  if (value) {
    return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
  }
  return true; // Permitir que el campo esté vacío
  })
  .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
  if (value) {
    return value.size <= 10485760; // 2 megabytes en bytes
  }
  return true; // Permitir que el campo esté vacío
   })
  }),
  existence_certificate:yup.mixed().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) => schema.test('filePresence', 'El archivo es requerido', value => {
      return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
    })
    .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
    if (value) {
      return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
    }
    return true; // Permitir que el campo esté vacío
    })
    .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
    if (value) {
      return value.size <= 10485760; // 2 megabytes en bytes
    }
    return true; 
    })
  }),
  composition_certificate_legal_representative:yup.mixed().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) => schema.test('filePresence', 'El archivo es requerido', value => {
      return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
    })
    .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
    if (value) {
      return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
    }
    return true; // Permitir que el campo esté vacío
    })
    .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
    if (value) {
      return value.size <= 10485760; // 2 megabytes en bytes
    }
    return true; // Permitir que el campo esté vacío
    }),
  }),
  rut:yup.mixed().test('filePresence', 'El archivo es requerido', value => {
    return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
  })
  .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
  if (value) {
    return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
  }
  return true; // Permitir que el campo esté vacío
  })
  .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
  if (value) {
    return value.size <= 10485760; // 2 megabytes en bytes
  }
  return true; // Permitir que el campo esté vacío
   }),
  di_legal_representative:yup.mixed().when('type_person', {
  is:"Persona Jurídica",
  then: (schema) => schema.test('filePresence', 'El archivo es requerido', value => {
    return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
  })
  .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
  if (value) {
    return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
  }
  return true; // Permitir que el campo esté vacío
  })
  .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
  if (value) {
    return value.size <= 10485760; // 2 megabytes en bytes
  }
  return true; // Permitir que el campo esté vacío
   })
  }),
  states_financial:yup.mixed().when('type_person', {
    is:"Persona Jurídica",
    then: (schema) => schema.test('filePresence', 'El archivo es requerido', value => {
      return value !== undefined && value !== null && value !== ''; // Verificar si el archivo está presente
    })
    .test('fileType', 'Solo se permiten archivos PDF, JPG O PNG', value => {
    if (value) {
      return ['image/jpeg', 'image/png', 'application/pdf'].includes(value.type);
    }
    return true; // Permitir que el campo esté vacío
    })
    .test('fileSize', 'El tamaño del archivo no debe ser mayor a 10MB', value => {
    if (value) {
      return value.size <= 10485760; // 2 megabytes en bytes
    }
    return true; // Permitir que el campo esté vacío
     })
    }),
})



const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const {
    handleSubmit,
    getValues,
    setValue,
    setError,
    reset,
    watch,
    formState: { errors },
    control
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      manage_public_resources:false,
      hold_public_office:false,
      enjoy_public_recognition:false,
      belong_pep:false,
      spouse_pep:false,
      family_pep_second_degree:false,
      family_pep_first_degree:false,
      family_pep_civil_degree:false,
      power_sign_foreign_accounts:false,
      declare_funds_legal:false,
      partners_info_contact:[],
      contact_final_beneficiary:[]
    }
  })

  return (
    <FormContext.Provider value={{ reset, handleSubmit, getValues, setValue, setError, watch, errors, control }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };