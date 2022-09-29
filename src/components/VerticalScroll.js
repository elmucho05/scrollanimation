import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import VerticalViewPager from 'react-native-vertical-view-pager';
 
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
 
export const VerticalScroll= () =>{
        return (
            <VerticalViewPager
            contentContainerStyle={{flexGrow: 1}}    
            showsVerticalScrollIndicator={false}
                pagingEnabled={true}
                >
                <View style={[styles.container1, {backgroundColor: 'pink'}]}>
                    <Text>Page1: Open up App.js to start working on your app!</Text>
                </View>
                <View style={[styles.page_container, {backgroundColor: 'olive'}]}>
                    <Text>Page2: Changes you make will automatically reload.</Text>
                </View>
                <View style={[styles.page_container, {backgroundColor: 'lightblue'}]}>
                    <Text>Page3: Shake your phone to open the developer menu.</Text>
                </View>
            </VerticalViewPager>
        );
    }
 
const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#5f9ea0',
        flex: 1,
        
        height: screenHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    page_container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        height: screenHeight
    }
});