import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'

const Notification = () => {
    return (
        <View style={styles.parent}>
            <StatusBar translucent backgroundColor={'transparent'}
                barStyle={'dark-content'} />
            <View style={styles.child1}>
                <Image style={{ width: '100%', height: 72 }}
                    source={require('../assets/images/statusBarImg.png')}></Image>
                <Text style={styles.heading}>Notifications</Text>
            </View>
            <View style={styles.child2}>
                <View style={styles.mainSec}>
                    <Image style={styles.mainSecImg} resizeMode='contain'
                        source={require('../assets/images/notification-img.png')} />
                    <View>
                        <Text style={styles.mainSecHeading1}>
                            No notifcations yet
                        </Text>
                        <Text style={styles.detail}>
                            Here you will see the external changes
                            in your shared folders, tags from your
                            peers and other updates
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    child1: {
        flex: 1,
        // backgroundColor: 'red'
    },
    child2: {
        flex: 3,
        // justifyContent: 'flex-start',
        alignItems: 'center'
    },
    heading: {
        fontSize: 34,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        color: '#244CAA',
        marginLeft: 23,
        marginTop: 25,
        lineHeight: 46
    },
    mainSec: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        width: '100%',
        // backgroundColor: 'white',
        // justifyContent: 'center'
        marginTop: 40
    },
    mainSecImg: {
        // width: '81%',
        // height: '40%'
        width: 305,
        height: 246
    },
    mainSecHeading1: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        color: '#244CAA',
        // marginLeft: 23,
        marginTop: 36,
        lineHeight: 27,
        textAlign: 'center'
    },
    detail: {
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'avenir-next-medium',
        color: '#5D6373',
        // marginLeft: 23,
        marginTop: 8,
        lineHeight: 22,
        textAlign: 'center',
        marginHorizontal: 30
    }
})
export default Notification