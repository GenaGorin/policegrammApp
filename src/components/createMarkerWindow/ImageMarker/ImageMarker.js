import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default ImageMarker = ({ source, changeImageToLeft, changeImageToRight }) => {
    return <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
        <TouchableOpacity style ={styles.arrows} onPress={changeImageToLeft}>
            <Image source={require('../../../images/controls/left.png')} style={{ width: 60, height: 30 }} />
        </TouchableOpacity>
        <Image source={source} style={{ width: 77, height: 125, marginHorizontal: 35, }} />
        <TouchableOpacity style ={styles.arrows} onPress={changeImageToRight}>
            <Image source={require('../../../images/controls/right.png')} style={{ width: 60, height: 30 }} />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    arrows: {
        marginTop: 35,
    },
});
