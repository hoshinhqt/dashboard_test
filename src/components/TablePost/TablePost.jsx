
import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/styles';
import {
    TableHead, TableRow, Box, Paper, TableContainer,
    Table, TablePagination, TableCell, TableSortLabel, TableBody, Button
} from '@material-ui/core';
import { getComparator } from "../../manage-control/manage";
import { NavLink, Link } from 'react-router-dom';
import { useHistory, useRouteMatch } from 'react-router-dom';


export const headerTableList = [
    { id: '1', title: 'ID', numeric: true, label: 'Dessert (100g serving)', },
    { id: '2', title: 'User', numeric: false, label: 'Dessert (100g serving)', },
    { id: '3', title: 'Title', numeric: false, label: 'Dessert (100g serving)', },
    { id: '4', title: 'Content', numeric: false, label: 'Dessert (100g serving)', }
]
function EnhancedTableHead(props) {

    const { orderBy, order, onRequestSort } = props;
    const createSortHandler = (property) => (title) => {
        onRequestSort(title, property)
    }
    return (
        <TableHead >
            <TableRow>
                {
                    headerTableList.map(item => (
                        <TableCell
                            key={item.id}
                            align='left'
                            padding='normal'
                            sortDirection={orderBy === item.title ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy == item.title}
                                direction={orderBy == item.title ? order : 'desc'}
                                onClick={createSortHandler(item.title)}>
                                {item.title}
                            </TableSortLabel>
                        </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    )
};

export default function TablePost(props) {

    const styles = useStyle();

    const { url } = useRouteMatch();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('User');
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);
    const postList = useSelector(state => state.postReducer.postList);
    // console.log(`NHQT ${url}`);
    const handleTableBody = () => {

        if (postList && postList.length > 0) {
            return postList
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(item => (
                    <TableRow  >
                        <TableCell>
                            {item.id}
                        </TableCell>
                        <TableCell className={styles.cellModify}>
                            <Link to={`${url}/${item.id}`}>User {item.userId}</Link>
                            {/* <Button onClick={() => history.push(`/${url}/${item.id}`)}>User {item.userId}</Button> */}
                        </TableCell>
                        <TableCell className={styles.cellModify}>
                            <Link to={`${url}/${item.id}`}>{item.title}</Link>
                        </TableCell>
                        <TableCell>
                            {item.body}
                        </TableCell>
                    </TableRow>
                ))
        }
    };
    const emptyRow = page > 0 ? Math.max(0, (page + 1) * rowsPerPage - postList.length) : 0;

    //handling devision page
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        className={styles.table}
                    >
                        <EnhancedTableHead />
                        <TableBody>
                            {
                                handleTableBody()
                            }
                            {emptyRow > 0 && (
                                <TableRow
                                    style={{ height: (dense ? 33 : 55) * emptyRow }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={(postList && postList.length) > 0 ? postList.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    )
}
const useStyle = makeStyles(() => ({

    table: {
        '& .MuiTableHead-root': {
            fontWeight: 'bold',
            color: 'red',
            '& .MuiTableCell-root': {
                fontWeight: 'bold',
            }
        },
        '& .MuiTableRow-root': {
            cellModify: {
                color: 'red'
            }
        }
    },

    cell: {
        padding: 15,
        borderColor: 'red'
    }
}))
