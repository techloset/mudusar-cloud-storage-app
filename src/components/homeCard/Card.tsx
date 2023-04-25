import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MoreIcon from '../../assets/images/svg/moreIcon.svg'
const Card = (props: any) => {
    return (
        <View style={styles.parent}>
            <View style={styles.card}>
                <Text style={styles.text}>{props.title} {'\n'}{props.title1}</Text>
                <Text style={styles.desc}>{props.description}</Text>
                <View style={styles.imgs}>
                    <View style={styles.img1}>{props.img1}</View>
                    <View style={styles.img2}>{props.img2}</View>
                    <View style={styles.img3}>{props.img4}</View>
                    <View style={styles.img4}>{props.img3}</View>
                </View>
            </View>
            <MoreIcon style={{ marginTop: 5 }} />
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#F5F7FC',
        borderRadius: 42,
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        padding: 20,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'avenir-next-medium',
        lineHeight: 22,
        color: 'black'
    },
    desc: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'avenir-next-medium',
        lineHeight: 19,
        color: '#5D6373',
        // marginBottom: 66
        // marginLeft: 20
    },
    imgs: {
        marginTop: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: 'white',
        // borderRadius: 10,
        // overflow: 'hidden'
        // marginLeft: 20
    },
    img1: {
        position: 'absolute',
        left: 0,
        // top: 0
    },
    img2: {
        position: 'absolute',
        left: 20
    },
    img3: {
        position: 'absolute',
        left: 40
    },
    img4: {
        position: 'absolute',
        left: 60
    }
})
export default Card