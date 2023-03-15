
import { Appbar} from "react-native-paper";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Headers= () => {
    const navigation=useNavigation();

    const _goBack = () => {
        navigation.navigate('CombinePage')
    };

    const _goHome = () => {
        navigation.navigate('HomePage')
        alert("Added From Successfully")
    };

    return (
        <>
            <Appbar.Header style={{ backgroundColor: "#D3D3D3" }}>
                <Appbar.Action icon="close" size={30} onPress={_goBack} />
                <Appbar.Content style={{ alignItems: "center" }} title="Header"/>
                <Appbar.Action icon="check" size={30} onPress={_goHome} />
            </Appbar.Header>
        </>
    )
}
export default Headers;
 
