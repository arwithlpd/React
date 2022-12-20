import { Button } from '@mui/material';
import React from 'react';

export default function ButtonCom({ children, handler }) {
  return <Button variant='outlined' onClick={handler}> {children} </Button>;
}
