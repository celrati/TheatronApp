import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const RolesScreen = () => {

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

    return <View style={styles.container}>
        <Text h1>Roles Manager</Text>
        <Spacer />
        <FlatList
            data={persons}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
                return <View style={styles.role}>
                    <View style={styles.name}>
                        <FontAwesome5 name="theater-masks" size={24} color="black" />
                        <Text h3>{item}</Text>
                    </View>

                    <Entypo name="remove-user" style={styles.removeIcon} />
                </View>
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    name: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 30
    },
    role: {
        flexDirection: 'row',

        marginBottom: 20,
        marginTop: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    removeIcon: {
        fontSize: 30,

    }
});


export default RolesScreen;