import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MenuCardContainer: {
        height: 120,
        width: '100%',
        alignItems:'center',
        marginVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    ImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 25
    },
    TitleText: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#E900FF',
        fontSize: 20
    },
    PriceText: {
        fontFamily: 'Ubuntu_300Light',
        color: '#FFC600',
        fontSize: 15
    }, 
    PriceButton: {
        width: '80%',
        height: 30,
        backgroundColor: '#E900FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 20,
        marginLeft: '10%'
    },
    PriceButtonText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFC600',
        fontSize: 17
    },
    RightContainer: {
        flexGrow: 1,
        minHeight: 120,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    ControlButtonsContainer: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        marginTop: 10,
    },
    OperationButton: {
        height: '100%',
        width: 30,
        borderRadius: 10,
        backgroundColor: '#E900FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    CurrentCountContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        height: 30,
        alignItems: 'center'
    }
})

export default styles