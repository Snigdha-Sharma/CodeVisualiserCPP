import React from "react";
import Grid from '@mui/material/Grid';
import InputCode from "./Components/InputCode";
import Visualisation from "./Components/Visualisation";




const App = () =>{
    const [value, setValue] = React.useState('Enter C++ Code');

    const rows=[[]]

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(value)
    };
    const onClickSubmit = () =>{
        console.log('submit done');
    }
    const onClickVis = () =>{
        console.log('vis done');
    }
    
    return (
        <div>
            <br/>
            
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <InputCode  value={value} handleChange={handleChange} onClickSubmit={onClickSubmit} onClickVis={onClickVis} />

                </Grid>
                <Grid item xs={6}>
                    <Visualisation rows={rows}/>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default App;