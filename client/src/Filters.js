import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControlR from 'react-bootstrap/FormControl';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import SingleSelect from './inputs/SingleSelect';
import MultiSelect from './inputs/MultiSelect';




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));




export default function AutoGrid() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                        Search Here
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControlR id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <SingleSelect />
            <MultiSelect />
        </div>
    );
}