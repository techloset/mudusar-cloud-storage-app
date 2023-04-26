import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import MoreIcon from '../../assets/images/svg/moreIcon.svg'
// import { Image } from 'react-native-svg'
const Card = (props: any) => {
    return (
        <View style={styles.parent}>
            <View style={styles.card}>
                <Text style={styles.text}>{props.title} {'\n'}{props.title1}</Text>
                <Text style={styles.desc}>{props.description}</Text>
                <View style={styles.imgs}>
                    <Image source={props.img1} style={styles.img1}></Image>
                    <Image source={props.img2} style={styles.img2}></Image>
                    <Image source={props.img3} style={styles.img3}></Image>
                    {/* <Image source={props.img4} style={styles.img4}></Image> */}
                    <View style={styles.img4}>{props.img4}</View>

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
        borderWidth: 2,
        borderRadius: 11,
        borderColor: '#F5F7FC',
        height: 28,
        width: 28
    },
    img2: {
        position: 'absolute',
        left: 20,
        borderWidth: 2,
        borderRadius: 11,
        borderColor: '#F5F7FC',
        height: 28,
        width: 28
    },
    img3: {
        position: 'absolute',
        left: 40,
        borderWidth: 2,
        borderRadius: 11,
        borderColor: '#F5F7FC',
        height: 28,
        width: 28
    },
    img4: {
        position: 'absolute',
        left: 60,
        // borderWidth: 2,
        // borderRadius: 11,
        // borderColor: '#F5F7FC',
        // height: 28,
        // width: 28
    }
})
export default Card