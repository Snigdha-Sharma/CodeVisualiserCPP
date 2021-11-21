import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';





const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

const Visualisation = ({rows}) => {
    const [index,setIndex] = React.useState(0);
    const [isFirst,setIsFirst]= React.useState(true);
    const [isLast,setIsLast]= React.useState(false);
    const onNext = () =>{
        setIndex(index+1)
        if(index > -1){
            setIsFirst(false)
        }
        // console.log(index)
        if(index === rows.length-2){
            setIsLast(true)
            // console.log('hello')
        }
    }

    const onPrev = () =>{
        setIndex(index-1)
        // console.log(index+'llll')
        if(index === rows.length -1)
        {
            setIsLast(false)
        }
        if(index=== 1)
        {
            setIsFirst(true)
        }
    }

    return (
        <div>
            <Item>
                <Typography variant="h3">
                Visualistaion
                </Typography>
            </Item>
            <Item>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Variable</TableCell>
                        <TableCell align="center">Value</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows[index].map((row) => (
                        <TableRow
                        key={row.variable}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.variable}
                        </TableCell>
                        <TableCell align="center">{row.value}</TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br/>
            <Typography variant="h6" >On Line {index+1} of {rows.length}</Typography>
            </Item>


            <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                <Button onClick={onPrev} disabled={isFirst}>Previous Line</Button>
                <Button onClick={onNext} disabled={rows.length===1?true:isLast}>Next Line</Button>
            </ButtonGroup>
        </div>
    )
}

export default Visualisation
