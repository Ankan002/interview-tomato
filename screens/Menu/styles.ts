import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
    AndroidSafeAreaView: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: '100%'
    }
})

export default styles