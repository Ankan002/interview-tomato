import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HeaderContainer: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: '#5800FF'
    },
    HeaderText: {
        fontSize: 20,
        color: '#FFC600',
        fontFamily: 'Ubuntu_500Medium',
        marginLeft: 5
    },
    CartContainer: {
        flexGrow: 1,
        height: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    Button: {
        justifyContent: 'center',
        height: '100%'
    }
})

export default styles