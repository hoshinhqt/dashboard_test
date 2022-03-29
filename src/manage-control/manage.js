


//compare order and orderBy
export const getComparator = (order, orderBy) => {
    return order === 'desc' ?
        (a, b) => descendingComparator(a, b, orderBy) :
        (a, b) => -descendingComparator(a, b, orderBy)

}
const descendingComparator = (a, b, orderBy) => {
    if (a[orderBy] > b[orderBy]) {
        return -1;
    }
    if (a[orderBy] < b[orderBy]) {
        return 1;
    }
    return 0;
}
export const filterMap = (arr, index) => {
    return arr.slice(0, index);

}
