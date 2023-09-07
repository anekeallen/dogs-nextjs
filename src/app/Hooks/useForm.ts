'use client';
import { ChangeEvent, useState } from 'react';

interface Types {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
}

const types: Types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  },

  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'Deve conter um digíto, deve conter uma letra minúscula, deve conter uma letra maiúscula, deve conter 8 dígitos'
  }
};
// interface UseFormProps {
//   type: string;
// }

const useForm = (type: string) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  function validate(value: string): boolean {
    if (type === 'false') return true;
    if (value.length === 0) {
      setError('Preencha um valor.');

      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (error) {
      validate(event.target.value);
    }
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
};

export default useForm;
