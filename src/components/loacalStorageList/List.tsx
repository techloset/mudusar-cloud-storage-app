import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShowMore from '../../assets/images/svg/moreIcon.svg'
const List = (props: any) => {
    const { color } = props;
    return (
        <View style={styles.container}>
            <View style={styles.child1}>

                <View style={[styles.img, { backgroundColor: color }]}>{props.img}</View>
                <View>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.desc}>{props.description}</Text>
                </View>
            </View>
            <ShowMore />
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        paddingVertical: 18
    },
    child1: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    img: {
        padding: 16,
        borderRadius: 22,
    },
    title: {
        color: '#242833',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        fontFamily: 'avenir-next-medium',
    },
    desc: {
        color: '#5D6373',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 19,
        fontFamily: 'avenir-next-medium',
    }
})