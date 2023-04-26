import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Item = (props: any) => {
    const { color, radius, padding } = props;
    return (
        <View style={styles.container}>
            <View style={[styles.img, { backgroundColor: color, borderRadius: radius, padding: padding }]}>{props.img}</View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
export default Item
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    img: {
        padding: 22,
        borderRadius: 28,
    },
    title: {
        color: '#5D6373',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 22,
        fontFamily: 'avenir-next-medium',
    }
})