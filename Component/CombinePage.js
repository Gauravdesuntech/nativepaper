import React, { useState } from "react";
import { View } from "react-native";
import { FAB, Portal, Provider, TextInput, Title } from "react-native-paper";
import Headers from "./Headers";
import Icons from "./Icons";
const CombinePage = () => {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(text, email, password, ">>>>>>>>>>><<<<<<<<<<<<<")
    return (
        <>
            <View>
                <Headers />
                <View style={{ alignItems: "center", top: 20 }}>
                    <Title>Login from</Title>
                </View>
                <View style={{ width: "95%", marginLeft: 9, marginTop: "20%" }}>
                    <View>
                        <TextInput
                            label="UserName"
                            placeholder="Enter User Name"
                            mode="outlined"
                            selectionColor="grey"
                            value={text}
                            outlineColor="#D3D3D3"
                            activeOutlineColor="green"
                            onChangeText={text => setText(text)}
                        />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <TextInput
                            label="UserEmail"
                            placeholder="Enter User Email"
                            mode="outlined"
                            selectionColor="grey"
                            value={email}
                            outlineColor="#D3D3D3"
                            activeOutlineColor="green"
                            onChangeText={text => setEmail(text)}
                        />
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <TextInput
                            label="UserPassword"
                            placeholder="Enter User Password"
                            mode="outlined"
                            selectionColor="grey"
                            value={password}
                            outlineColor="#D3D3D3"
                            activeOutlineColor="green"
                            onChangeText={text => setPassword(text)}
                        />
                    </View>
                    <Icons/>
                </View>
            </View>
        </>
    )
}
export default CombinePage;