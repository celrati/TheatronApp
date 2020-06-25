import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { AsyncStorage } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

const PersonalityCard = () => {

    const persons = [
        "Achraf",
        "Chuck",
        "Lee",
        "Jack",
        "Lena",
        "hinata",
        "chelsea",
        "sam"
    ];

        return <View 
        style={styles.listCard}
        >
        <FlatList 
        data={persons}
        horizontal
        keyExtractor={(item) => item }
        renderItem={ ({item}) => {
        return <Text style={[styles.itemCard, { backgroundColor: "gray"} ]}>{item}</Text>
        }}
        />
    </View>
};


const styles = StyleSheet.create({
    listCard: {
        height: 60,

        padding: 10
    },
    itemCard: {
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        marginHorizontal: 3
    }
});


export default PersonalityCard;