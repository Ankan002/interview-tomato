import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    RestuarantContainer: {
        flexDirection: 'row',
        minHeight: 140,
        width: '100%',
        paddingHorizontal: 5,
        alignItems: 'center'
    },
    ImageStyles: {
        height: 100,
        width: 100,
        borderRadius: 45,
        resizeMode: 'contain'
    },
    RightContainer: {
        flexGrow: 1,
        minHeight: 140,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    TitleText: {
        fontFamily: 'Ubuntu_400Regular',
        color: '#E900FF',
        fontSize: 20
    },
    RatingText: {
        fontFamily: 'Ubuntu_300Light',
        color: '#FFC600',
        fontSize: 13
    }, 
    ExploreButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#E900FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 20
    },
    ExploreButtonText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFC600',
        fontSize: 18
    }
})

export default styles