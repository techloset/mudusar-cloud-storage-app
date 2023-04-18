import React, { useEffect, useState, useLayoutEffect } from 'react'
import { View, Text, Pressable, StyleSheet, Image, Modal, Button, TouchableOpacity } from 'react-native'
import LocalStorage from './LocalStorage'
import { useFocusEffect } from '@react-navigation/native';
import CrossIcon from '../assets/images/svg/crossIcon.svg'
import UploadImg from '../assets/images/svg/upload.svg'
import Carmera from '../assets/images/svg/camera.svg'
import Scan from '../assets/images/svg/scan.svg'
const Upload = (props: any) => {
    const [modalVisible, setModalVisible] = useState(false)
    useFocusEffect(
        React.useCallback(() => {
            setModalVisible(true);
            return () => {
                setModalVisible(false);
            };
        }, [])
    );
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LocalStorage />
            <Button title=" UPLOAD " onPress={() => setModalVisible(true)} />
            <Modal visible={modalVisible} animationType="slide" transparent={true} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={[styles.modelChild, { width: '100%', backgroundColor: '#fff', padding: 34, alignItems: 'center' }]}>
                        <View style={styles.content}>
                            <View style={styles.content1}>
                                <View style={styles.img}><Scan /></View>
                                <Text style={styles.title}>Scan</Text>
                            </View>
                            <View style={styles.content2}>
                                <View style={styles.img}><Carmera /></View>

                                <Text style={styles.title}>Photo</Text>
                            </View>
                            <View style={styles.content3}>

                                <View style={styles.img}><UploadImg /></View>
                                <Text style={styles.title}>Upload</Text>


                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.activeButtonStyle} >
                            <Text><CrossIcon height={14} width={14} style={styles.activeStyle} /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontFamily: 'avenir-next-bold'
    },
    activeButtonStyle: {
        backgroundColor: '#E8EFFF',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 18,
        // transform: [{ rotate: '45deg' }],
        shadowOpacity: 3, elevation: 10, shadowOffset: { width: 10, height: 10 }, shadowColor: 'grey'
    },
    activeStyle: {
        transform: [{ rotate: '0deg' }],

    },
    img: {
        padding: 19,
        borderRadius: 25,
        backgroundColor: '#E8EFFF'
    },
    title: {
        fontSize: 12,
        lineHeight: 17,
        fontWeight: '500',
        fontFamily: 'avenir-next-medium',
        color: '#5D6373'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        gap: 40,
        alignItems: 'flex-end',
        marginBottom: 10
        // backgroundColor: 'red'
    },
    content1: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
    },
    content2: {
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        marginBottom: 30
    },
    content3: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
    },
    modelChild: {
        borderTopLeftRadius: 130,
        borderTopRightRadius: 130,
    }
})
export default Upload