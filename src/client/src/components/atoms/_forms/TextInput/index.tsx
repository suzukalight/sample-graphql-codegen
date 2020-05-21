import React, { ReactNode, FC } from 'react';

import FormLabel from '../FormLabel';

type TextInputProps = {
  id?: string;
  type?: string;
  label?: ReactNode;
  placeholder?: string;
};

const TextInput: FC<TextInputProps> = ({ id, type = 'text', label, placeholder }) => (
  <>
    {label && <FormLabel id={id}>{label}</FormLabel>}
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
      id={id}
      type={type}
      placeholder={placeholder}
    />
  </>
);

export default TextInput;
