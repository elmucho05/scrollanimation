import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

export const MyPager = () => {
  return (
    <PagerView style={styles.pagerView}  orientation="vertical" initialPage={0}	>
      <View key="1" collapsable={false} style={[styles.pg,{backgroundColor: 'red'}]}>
        <Text>First page</Text>
      </View>
      <View key="2" collapsable={false} style={styles.pg}>
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    height: '100%',
    width:'100%',
  },
  pg:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
});