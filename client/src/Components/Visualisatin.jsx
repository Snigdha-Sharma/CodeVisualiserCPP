import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';





const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const Visualisatin = () => {
    return (
        <div>
            <Item>visualistaion</Item>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Previous Line</Button>
                        <Button>Next Line</Button>
                    </ButtonGroup>
        </div>
    )
}

export default Visualisatin
