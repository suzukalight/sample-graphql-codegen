import React, { FC } from 'react';
import { parseISO, format } from 'date-fns';

type DateProps = {
  dateString: string;
};

const Date: FC<DateProps> = ({ dateString }) => (
  <time dateTime={dateString}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time>
);

export default Date;
