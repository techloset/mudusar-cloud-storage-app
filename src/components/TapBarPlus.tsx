import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svg, Path } from 'react-native-svg'

const TapBarPlus = ({ color }) => {
    return (
        <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.6863 12.6863C21.3101 4.06243 27.1025 4.47516 35.3137 12.6863C43.5248 20.8974 43.9375 26.6898 35.3137 35.3137C26.6898 43.9376 20.8974 43.5248 12.6863 35.3137C4.47513 27.1026 4.0624 21.3102 12.6863 12.6863Z"
                fill={color}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 17C23.4477 17 23 17.4477 23 18V23H18C17.4477 23 17 23.4477 17 24C17 24.5523 17.4477 25 18 25H23V30C23 30.5523 23.4477 31 24 31C24.5523 31 25 30.5523 25 30V25H30C30.5523 25 31 24.5523 31 24C31 23.4477 30.5523 23 30 23H25V18C25 17.4477 24.5523 17 24 17Z"
                fill="white"
            />
        </Svg>
    )
}

export default TapBarPlus

const styles = StyleSheet.create({

})
