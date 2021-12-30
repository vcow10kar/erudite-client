import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import styles from './contestForm.module.css';
import axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, tags, theme) {
    return {
        fontWeight:
            tags.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const names = [
    'arrays',
    'strings',
    'recursion',
    'mongodb',
    'axios',
    'react',
    'redux',
    'express',
    'nodejs',
    'html',
];


const ContestForm = () => {
    const theme = useTheme();
    const [tags, setTags] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setTags(
            // On autofill we get a the stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = new FormData(e.target);

        const payload = {
            title: data.get('contest-title'),
            type: data.get('contest-type'),
            deadline: data.get('contest-deadline'),
            tags: [...tags],
            duration: data.get('contest-duration'),
            marks: data.get('contest-marks'),
            batchNo: data.get('contest-batchNo'),
        }

        axios(`http://localhost:5000/contest`,{
            method: 'post',
            data: payload   ,
            header: {
                'Accept': '*'
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('Error', err);
        });
    }
    return (
        <div className={styles.contestForm}>
            <h1>Contest Form</h1>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2} width={350} sx={{ margin: 'auto' }}>

                    <TextField name='contest-title' label='Title' variant='outlined' required />


                    <FormLabel component="legend">Contest Type</FormLabel>
                    <RadioGroup
                        aria-label="type"
                        defaultValue="dsa"
                        name="contest-type"
                    >
                        <FormControlLabel value="DSA" control={<Radio />} label="DSA" />
                        <FormControlLabel value="CODING" control={<Radio />} label="Coding" />
                    </RadioGroup>

                    <TextField
                        id="datetime-local"
                        label="Deadline"
                        type="datetime-local"
                        name = 'contest-deadline'
                        // defaultValue="2022-01-01THH:MM"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={tags}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Tags" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, tags, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                    <TextField name='contest-duration' label='Duration' variant='outlined' required />
                    <TextField name='contest-marks' label='Marks' variant='outlined' required />
                    <TextField name='contest-batchNo' label='Batch No.' variant='outlined' required />
                    <Button variant="contained" type="submit" disableElevation>Create Contest</Button>
                </Stack>
            </form>
        </div >
    )
}

export default ContestForm;