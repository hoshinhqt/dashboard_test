import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
    content: {
        width: '100%',
        // backgroundColor: '#74ebd5',  /* fallback for old browsers */

    },
    myCardHeader: {
        backgroundColor: '#5A96E3',
        color: 'white',
        paddingRight: 60,
        paddingLeft: 60,
        paddingBottom: 10,
        paddingTop: 10,
    },
    container: {
        paddingRight: 60,
        paddingLeft: 60,
        paddingBottom: 10,
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    itemFormat: {
        backgroundColor: '#F7F7F7',
        marginRight: 5,
        padding: 0,
        fontSize: 18,
        height: '100%',
    },
    headerItem: {
        backgroundColor: '#EEEEEE',
        padding: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
        fontWeight: '400'
    },
    cardFormat: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        justifyItems: 'center',
    },
    cardColumn: {
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: "#74ebd5",
        margin: 0,
        marginRight: 5,
    },
    cardText: {
        fontSize: 14,
        fontWeight: '300',
        margin: 0,
        marginRight: 5,
    },
    cardImage: {
        width: 100,
        height: 100,

    },
    scrollView: {
        overflowY: 'scroll',
        width: '100%',
        float: 'left',
        height: '500px',
        position: 'relative',

    }
}))
export default useStyle;