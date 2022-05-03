import React from "react";
import Grid from '@mui/material/Grid';
import InputCode from "./Components/InputCode";
import Visualisation from "./Components/Visualisation";




const App = () =>{
    const [value, setValue] = React.useState('Enter C++ Code');
const [rows,setRows]= React.useState([[]])
const [abc,setAbc]=React.useState(false)
     
    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(value)
    };
    const onClickSubmit = () =>{
        console.log('submit done');
        const data= {"a": value}

        fetch('http://localhost:3001',{
        method: 'post',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }).then(response=>response.json())
    .then(resp=>{
      setAbc(resp)
    })
        // setRows(rows1);
    }
    const onClickVis = () =>{
        console.log('vis done');
        fetch('http://localhost:3001',{
       method: 'get',
       headers: {'Content-Type':'application/json'}
     }).then(response=>response.json())
     .then(resp=>{
       setRows(resp)
     })

    }
    
    return (
        <div>
            <br/>
            
            <Grid container spacing={2}>
                <Grid item xs={6}>
                <InputCode  value={value} handleChange={handleChange} onClickSubmit={onClickSubmit} onClickVis={onClickVis} abs={abc}/>

                </Grid>
                <Grid item xs={6}>
                    <Visualisation rows={rows} />
                </Grid>
                
            </Grid>
        </div>
    )
}

export default App;