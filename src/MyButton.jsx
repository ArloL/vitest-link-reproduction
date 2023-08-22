import React from 'react';
import { Button } from '@mui/base';

export function MyButton({ children }) {
  return (
    <Button>
      {children}
    </Button>
  );
}
