import React from "react";
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";

const useStyles =makeStyles(
    {
        wrapper:{
            backgroundColor:"#fff",
            display:"flex",
            boxShadow:"0px 1px 5px rgba(0,0,0,0.1)",
            borderRadius:"5px",
            width:"150%",
            "&>*":{
                flex:1,
                height:"45px",
                margin:"8px",
            },

        },
    }
);
export default (props) => {
    const classes = useStyles();
    return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
        <Select disableUnderline variant="filled" defaultValue="Full Time">
            <MenuItem value="Full Time">Full Time</MenuItem>
            <MenuItem value="Part Time">Part Time</MenuItem>
            
        </Select>
        <Select disableUnderline variant="filled" defaultValue="QA">
            <MenuItem value="Department">Front-end</MenuItem>
            <MenuItem value="Back-end">Back-end</MenuItem>
            <MenuItem value="QA">QA</MenuItem>
            <MenuItem value="Legal">Legal</MenuItem>
            <MenuItem value="Human Resource">Human Resource</MenuItem>
            <MenuItem value="Business Operations">Business Operations</MenuItem>
</Select>
            <Button variant="contained" color="primary" disableElevation>
                Search
            </Button>
           
        
    </Box>
    );
};