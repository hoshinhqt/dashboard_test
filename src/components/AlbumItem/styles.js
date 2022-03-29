import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles(() => ({
    cardFormat: {
        width: '100%',
        height: 150,
        padding: 5,
        // border: '1px solid #EEEEEE',
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
    },

    cardRow: {
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyItems: 'center',
        padding: 5,
        width: '100%',
        flex: 1 / 4
    },
    cardBody: {
        flex: 1 / 2,
        display: 'flex',
        flexDirection: 'row',
    },
    cardImage: {
        width: '100%',
        padding: 10,
    },
    cardTitle: {
        color: '#125D98',
        margin: 0,
    },
}))
export default useStyle;