import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

const TalkScreen = () => {

    const persons = [
        { title: 'theater #1', genre: 'Comedy' },
        { title: 'theater #2', genre: 'Comedy' },
        { title: 'theater #3', genre: 'Drama' },
        { title: 'theater #4', genre: 'Tragedy' },
        { title: 'theater #5', genre: 'Romance' },
        { title: 'theater #6', genre: 'Romance' },
        { title: 'theater #7', genre: 'Comedy' },

    ];


    return <View>
        <Text h1>Hello TalkScreen!</Text>
        <Spacer />
        <FlatList
            data={persons}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
                return <View style={styles.role}>
                    <View style={styles.info}>
                        <View style={styles.name}>
                            <FontAwesome5 name="theater-masks" size={24} color="black" />
                            <Text h3>{item.title}</Text>
                        </View>
                        <Text h5>{item.genre}</Text>
                    </View>
                    <FontAwesome name="edit" size={24} color="black" />
                    <FontAwesome5 name="trash" size={24} color="black" />
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


export default TalkScreen;