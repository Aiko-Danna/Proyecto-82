import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreatePostScreen extends Component{
    render(){
        return(
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text> Crear publicación </Text>
            </View>
        );
    }
}