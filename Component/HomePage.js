import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Title } from "react-native-paper";
import Headers from "./Headers";

const HomePage = () => {
    return (
        <>
            <View>
                <Headers />
                <View>
                    <Title>Home Page !!!!</Title>
                </View>
            </View>
        </>
    )
}
export default HomePage;