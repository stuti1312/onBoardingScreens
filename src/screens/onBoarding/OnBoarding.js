import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import theme from "../../constants/theme"

const OnBoarding = () => {
    console.log("themes",theme.COLORS.blue);
    return (
        <SafeAreaView>
            <View>
                <Text style={{}}>OnBoarding Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding;

const styles = StyleSheet.create({

})

