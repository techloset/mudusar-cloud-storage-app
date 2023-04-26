import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShowMore from '../../assets/images/svg/moreIcon.svg'
const List = (props: any) => {
    // const { color } = props;
    return (
        <View style={styles.container}>
            <View style={styles.child1}>

                <View>
                    <Text style={styles.title}>{props.title}</Text>
                    {props.description ?
                        <Text style={styles.description}>{props.description}</Text>
                        : null}
                </View>
                <View>{props.img}</View>
            </View>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        marginTop: 10,

    },
    child1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F7FC',
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: 5
    },

    title: {
        color: '#242833',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22,
        fontFamily: 'avenir-next-medium',
    },
    description: {
        color: '#5D6373',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 19,
        fontFamily: 'avenir-next-medium',

    }
})