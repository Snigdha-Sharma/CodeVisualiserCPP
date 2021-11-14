import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';

import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const InputCode = ({value, handleChange}) => {
    
    return (
        <div>
            <TextField
                    id="outlined-multiline-flexible"
                    label="Enter Code"
                    fullWidth
                    multiline
                    minRows={20}
                    maxRows={24}
                    value={value}
                    onChange={handleChange}
                />
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>Compile Code</Button>
                    <Button>Visualize</Button>
                    <Button>Submit</Button>
                </ButtonGroup>
                
          <Item elevation={12} >
              <Typography  minRows={5}>
                  Status Check:
                  <br/>
                  <br/>
                    <br/>
                  enter code
              </Typography>
          </Item>
        </div>
    )
}

export default InputCode
