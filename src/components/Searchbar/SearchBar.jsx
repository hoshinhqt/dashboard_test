import { FormControl, TextField, makeStyles, Select, MenuItem } from '@material-ui/core'
import React from 'react';
import { headerTableList } from '../TablePost/TablePost';



const SelectListField = [
    { id: '1', title: 'User' },
    { id: '2', title: 'Author', },
    { id: '3', title: 'Album', },
    { id: '4', title: 'Content', }
]
export default function SearchBar() {


    const styles = useStyle();
    const [selectedValue, setSelectedValue] = React.useState('');
    const hanldeOnChange = (event) => {
        console.log(event);
        setSelectedValue(event.target.value)
    };

    return (
        <FormControl className={styles.formControl}>
            <TextField
                sx={{
                    ml: 1,
                    flex: 0.5,
                }}
                placeholder='Search'
                // value='temp'
                className={styles.inputStyle}
                label="Search"
                variant="outlined"
            />
            <Select
                className={styles.seleted}
                value={selectedValue}
                onChange={hanldeOnChange}
                label='User'
                variant="outlined"

            >
                {SelectListField.map(item => (
                    <MenuItem key={item.value} value={item.title}>
                        {item.title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    )
}
const useStyle = makeStyles(() => ({
    formControl: {
        width: '100%',
        color: '#125D98',
        '& .MuiOutlinedInput-input': {
            padding: 15,
            alignItem: 'center'
        },
        display: 'flex',
        flexDirection: 'row',
        
    },
    inputStyle: {
        borderColor: '#F7F7F7',
        marginRight: 10
    },
    seleted: {
        flex: 0.5,
        borderColor: '#125D98',

    }
}))
