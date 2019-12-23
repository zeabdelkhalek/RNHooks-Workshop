import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function TodoList(props) {
    return (
        <View style={styles.listContainer}>
        <Icon
            size={30}
            color="black"
            style={{ marginLeft: 15 }}
        />
        <View>
            <Text style={styles.listItem}>

            </Text>
        </View>
        <Icon
            name="trash-2"
            size={30}
            color="red"
            style={{ marginLeft: 'auto' }}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        marginTop: '5%',
        flexDirection: 'row',
        borderColor: '#aaaaaa',
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'stretch',
        minHeight: 40
    },
    listItem: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 6,
        borderColor: 'green',
        borderBottomWidth: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    verticalLine: {
		borderBottomColor: 'green',
		borderBottomWidth: 4,
		marginLeft: 10,
		width: '100%',
		position: 'absolute',
		marginTop: 15,
		fontWeight: 'bold'
	}
});