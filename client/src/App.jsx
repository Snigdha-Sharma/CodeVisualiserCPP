import React from "react";
import Grid from '@mui/material/Grid';
import InputCode from "./Components/InputCode";
import Visualisatin from "./Components/Visualisatin";




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
                <InputCode  value={value} handleChange={handleChange} />

                </Grid>
                <Grid item xs={6}>
                    <Visualisatin/>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default App;