import React from 'react'
import { Pressable, Text, View, ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from
    'react-native'
import CustomButton from '../components/button/Button'
import ForwardIcon from '../assets/images/svg/Combined Shape.svg'
const Onboarding = ({ navigation }: any) => {
    return (
        <ImageBackground style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}
            source={require('../assets/images/bgImg.png')}>
            <StatusBar backgroundColor={'transparent'} translucent />
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.title}>Your cloud storage {'\n'}
                    safe and sound
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text><ForwardIcon style={styles.buttonTitle} /></Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    title: {
        color: '#2D60D6',
        textAlign: 'right',
        fontSize: 24,
        fontFamily: 'AvenirNext-DemiBold',
        // marginTop: 628,
        // marginBottom: 118,
        fontWeight: '600',
        marginRight: 19,
        lineHeight: 33
    },
    button: {
        backgroundColor: '#FF5495',
        paddingHorizontal: 15,
        paddingVertical: 18,
        borderRadius: 23,
        transform: [{ rotate: '45deg' }],
        marginRight: 53,
        marginTop: 25,
        marginBottom: 40

    },
    buttonTitle: {
        transform: [{ rotate: '-45deg' }],
        // padding: 40

    }
})
export default Onboarding