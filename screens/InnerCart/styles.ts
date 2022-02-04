import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    AndroidSafeAreaView: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    EmptyScreen: {
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    EmptyImage: {
        width: '85%',
        resizeMode: 'contain'
    },
    EmptyTextStyle: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFC600',
        fontSize: 19
    },
    FlexingView: {
        flexGrow: 1
    },
    FlatListStyle: {
        paddingBottom: 80,
        height: '86.5%'
    },
    PriceContainer: {
        height: 70,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: '#FFC600',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 25
    },
    PriceText: {
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
        color: '#5800FF',
        flexGrow: 1
    },
    PayButton: {
        width: 150,
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5800FF',
        borderRadius: 20
    },
    PayButtonText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#E900FF',
        fontSize: 19
    }
})

export default styles