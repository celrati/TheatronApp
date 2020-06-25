import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { AsyncStorage } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import PersonalityCard from '../components/PersonalityCard';

const store = async (key, value) => {
    try {

    } catch {

    }
};

const HomeScreen = () => {
    return <View style={styles.container}>
        <Text h2>Hello Dear friend ! </Text>
        <Text h2>What are you up to !</Text>
        <Spacer />
        <Input
            label="What's your name ?"
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Input
            label="Add a new personality !"
            autoCapitalize="none"
            autoCorrect={false}
        />
        <PersonalityCard />
        <Spacer />
        <Button
            raised
            title="Save"
            type="outline"
        />
    </View>
};


const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        margin: 5,
        flex: 1,
        justifyContent: 'center'
    }
});


export default HomeScreen;