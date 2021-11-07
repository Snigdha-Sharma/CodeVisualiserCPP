import React from "react";
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { Typography } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const App = () =>{
    const [value, setValue] = React.useState('Enter C++ Code');

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(value)
    };
    
    return (
        <div>
            
            <Grid container spacing={2}>
                <Grid item xs={6}>
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

                </Grid>
                <Grid item xs={6}>
                    <Item>visualistaion</Item>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Previous Line</Button>
                        <Button>Next Line</Button>
                    </ButtonGroup>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default App;