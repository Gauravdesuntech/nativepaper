import { Pressable, StyleSheet, Text, View } from "react-native";
import { Appbar, TextInput, Title } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";

const TextInputs = () => {
    const [text, setText] = useState("");

    const _goBack = () => console.log('Went back');

    const _goHome = () => console.log('Went Home Page');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <>
            <Appbar.Header style={{ backgroundColor: "#D3D3D3" }}>
                <Appbar.Action icon="close" size={30} onPress={_goBack} />
                <Appbar.Content style={{ alignItems: "center" }} title="Header" />
                <Appbar.Action icon="check" size={30} onPress={_goHome} />
            </Appbar.Header>
            <View style={{ alignItems: "center", marginTop: 20, }}>
                <Title>Login form</Title>
                <View style={{ width: "95%", marginTop: 30, }}>
                    <TextInput
                        label="Email"
                        value={text}
                        style={Styles.Input}
                        onChangeText={text => setText(text)}
                    />
                </View>
            </View>

        </>
    )
}
export default TextInputs;