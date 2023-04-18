import React, { useState } from 'react';
import { Switch, View, Text, Pressable, StyleSheet, Image, StatusBar, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import ProgressBar from '../assets/images/svg/progressBar1.svg'
import Edit from '../assets/images/svg/edit.svg'
import CustomButton from '../components/button/Button';
import List from '../components/profileList/List';
import RightArrow from '../assets/images/svg/rightIcon.svg'
// import CustomSwitch from 'react-native-custom-switch';
function Profile({ navigation }: any) {
    const [isHide, setIsHide] = useState(true)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.parent}>
            <StatusBar barStyle={'dark-content'} />
            <Image style={{ height: 72, width: '100%' }} source={require('../assets/images/statusBarImg.png')} />
            <View style={styles.child1}>
                <View style={styles.header}>
                    <Text style={styles.profile}>Profile</Text>
                    <Edit />
                </View>
                <View style={styles.profileSec}>
                    <Image style={{ borderRadius: 25, height: 80, width: 80 }} source={require('../assets/images/profilePic.png')}></Image>
                    <View>
                        <Text style={styles.heading}>Jessie Roberts</Text>
                        <Text style={styles.title}>1458 files · 25 folders</Text>
                    </View>
                </View>
                <View style={styles.child1Content}>

                    <Text style={styles.gb32}>{isHide ? '32,5 GB' : null} </Text>
                    <Text style={styles.gb100}>{isHide ? 'of 100 GB' : null}</Text>
                </View>

                <ProgressBar width={'100%'} style={{ marginTop: 9 }} />
                <CustomButton onPress={() => navigation.navigate('StorageManagement')} titleStyle={styles.buttonTitle} buttonStyle={styles.button} title='Increase storage space'></CustomButton>
            </View>
            <ScrollView style={styles.list}>
                <View >

                    <List title={'Storage management'} img={<RightArrow />} />
                    <List title={'Devices'} description={'iPhone, Macbook, iPad'} img={<RightArrow />} />
                    <List title={'Camera uploads'} img={<Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "white" : "white"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />} />
                    <List title={'Use data for file transfer'} img={<Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "white" : "white"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />} />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center'
    },
    child1: {
        // backgroundColor: 'red'
        width: '85%'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile: {
        fontSize: 34,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 47,
        marginTop: 22,
        // marginLeft: 25,
        color: '#244CAA'
    },
    profileSec: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'aqua',
        gap: 20,
        marginTop: 20
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 24,
        color: '#244CAA'
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'avenir-next-medium',
        lineHeight: 21,
        color: '#5D6373',

    },
    child1Content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    gb32: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 32,
        color: '#244CAA',
    },
    gb100: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 24,
        color: '#89AAFA',
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 21,
        color: 'white',
        textAlign: 'center'
    },
    button: {
        backgroundColor: "#FF5495",
        // paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 50,
        marginTop: 20
    },
    list: {
        width: '85%',
        marginTop: 30
    }
})
export default Profile;
