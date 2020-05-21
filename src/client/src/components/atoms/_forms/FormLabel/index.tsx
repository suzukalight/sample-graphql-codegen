import React, { FC } from 'react';

type FormLabelProps = {
  className?: string;
  id?: string;
};

const FormLabel: FC<FormLabelProps> = ({ children, className, id }) => (
  <label className={`block text-grey-darker text-sm font-bold mb-2 ${className}`} htmlFor={id}>
    {children}
  </label>
);

export default FormLabel;
