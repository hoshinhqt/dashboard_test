import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
    sidebar: {

        minWidth: 250,
        minHeight: '100%',
        color: 'white',
        transition: 'all .3s',
        backgroundColor: '#F7F7F7',
    },
    text: {
        color: 'black',
        fontSize: 30
    },

    customLi: {
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
    customNavLink: {
        padding: 10,
        color: '#125D98',

    }

}))
export default useStyle;