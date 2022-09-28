import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').width;

export const HorizontalView = () =>{
    
    return (
        <ScrollView
            horizontal={true}
            pagingEnabled={true}
            
            >
            <View style={styles.container1}>
                <Text>screen 1</Text>
            </View>
            <View style={styles.container2}>
                <Text>screen 2</Text>
            </View>
            <View style={styles.container3}>
                <Text>screen 3</Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#5f9ea0',
        flex: 1,
        width: screenWidth,
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        backgroundColor: 'tomato',
        flex: 1,
        width: screenWidth,
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    container3: {
        backgroundColor: '#663399',
        flex: 1,
        width: screenWidth,
        
        justifyContent: 'center',
        alignItems: 'center'
    }
});