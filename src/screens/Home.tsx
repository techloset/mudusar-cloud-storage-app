import React, { useState, useEffect } from 'react'
import { Dimensions, View, Text, Pressable, StyleSheet, Image, StatusBar, ScrollView, TextInput, KeyboardAvoidingView, useWindowDimensions } from 'react-native'
import ProgressBar from '../assets/images/svg/progressBar.svg'
import Card from '../components/homeCard/Card'
import Img1 from '../assets/images/svg/card1Img1.svg'
import Img2 from '../assets/images/svg/card1Img2.svg'
import Img3 from '../assets/images/svg/card1Img3.svg'
import Img4 from '../assets/images/svg/card1Img4.svg'
import Card2Img1 from '../assets/images/svg/card2Img1.svg'
import Card2Img2 from '../assets/images/svg/card2Img2.svg'
import Card2Img3 from '../assets/images/svg/card2Img3.svg'
import Card2Img4 from '../assets/images/svg/card2Img4.svg'
import Card3Img1 from '../assets/images/svg/card3Img1.svg'
import Card3Img2 from '../assets/images/svg/card3Img2.svg'
import Card3Img3 from '../assets/images/svg/card3Img3.svg'
import Card3Img4 from '../assets/images/svg/card3Img4.svg'
import Card4Img1 from '../assets/images/svg/card4Img1.svg'
import Card4Img2 from '../assets/images/svg/card4Img2.svg'
import Card4Img3 from '../assets/images/svg/card4Img3.svg'
import Card4Img4 from '../assets/images/svg/card4Img4.svg'
import Search from '../assets/images/svg/search.svg'




const Home = () => {
    const [isHide, setIsHide] = useState(true)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const screenWidth = Dimensions.get('window').width
    return (
        <KeyboardAvoidingView style={styles.parent} >
            <StatusBar barStyle={'dark-content'} />
            <View style={styles.child1}>
                <Image style={{ height: 72, width: '100%' }} source={require('../assets/images/homeStatusBarBg.png')} />
                <Text style={styles.heading}>Hello Jessie,</Text>
                <Text style={styles.title}>at the moment you have</Text>
                <View style={styles.child1Content}>

                    <Text style={styles.gb32}>32,5 GB</Text>
                    <Text style={styles.gb100}>of 100 GB </Text>
                </View>
                <View style={styles.progressSec}>
                    <ProgressBar width={screenWidth < 400 ? '100%' : '305px'} style={{}} />
                </View>
            </View>
            <View style={styles.child2}>
                <View style={styles.container}>
                    <Search />
                    <TextInput
                        style={styles.input}
                        onFocus={() => setIsHide(false)}
                        onBlur={() => setIsHide(true)}
                        placeholder="Search"
                        placeholderTextColor="gray"
                    />
                </View>

                <View style={styles.headerBox}>
                    <View style={{ position: 'relative' }}>
                        <Text style={styles.boxText1}>FILES</Text>
                        {/* <Text style={{
                            borderTopWidth: 3, borderTopLeftRadius: 3, borderTopRightRadius: 3, borderColor: '#447BFB', backgroundColor: 'red', bottom: 0, height: 3
                        }}></Text> */}
                    </View>
                    <View style={{ position: 'relative' }}>
                        <Text style={styles.boxText2}>FOLDERS</Text>
                        <Text style={{ borderTopWidth: 4, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderColor: '#447BFB', height: 4 }}></Text>
                    </View>
                </View>
                <ScrollView >
                    <View style={styles.cards}>
                        <Card img1={<Img1 />} img2={<Img2 />} img3={<Img3 />} img4={<Img4 />} description={'12 f · 2.1 gb'} title={'The next   '} title1={'big thing'} />
                        <Card img1={<Card2Img1 />} img2={<Card2Img4 />} img3={<Card2Img2 />} img4={<Card2Img3 />} description={'7 f · 523 mb'} title={'Top Secret'} />
                        <Card img1={<Card3Img1 />} img2={<Card3Img2 />} img4={<Card3Img3 />} description={'3 f · 192 mb'} title={'Freebie    '} title1={'project'} />
                        <Card img1={<Card4Img1 />} img2={<Card4Img2 />} img3={<Card4Img4 />} img4={<Card4Img3 />} description={'453 f · 1.7 gb'} title={'London '} title1={'Meetup'} />
                    </View>
                </ScrollView>
            </View>

        </KeyboardAvoidingView>
    )
}




const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#336DF3'
    },
    child1: {

    },
    child2: {
        flex: 1.8,
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        // gap: 25,
        // paddingHorizontal: 25
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // flexDirection: 'row',
        //  flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 25,
        marginVertical: 25,
        alignItems: 'center'
    },
    heading: {
        fontSize: 34,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 47,
        marginTop: 22,
        marginLeft: 25,
        color: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 27,
        color: '#ABC3FC',
        marginLeft: 25,

    },
    child1Content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        marginTop: 15
    },
    gb32: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 32,
        color: 'white',
    },
    gb100: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 24,
        color: '#ABC3FC',
    },
    progressSec: {
        marginRight: 25,
        width: '85%',
        marginTop: 9,
        // alignItems: 'center',
        marginLeft: 25,

        // justifyContent: 'flex-start',
        marginBottom: 40
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        backgroundColor: '#EDF1FA',
        borderRadius: 50,
        paddingHorizontal: 15,
        elevation: 3,
        marginTop: 25
        // marginHorizontal: 250
    },
    input: {
        flex: 1,
        height: 44,
        marginLeft: 10,
        fontSize: 16,
        color: '#959FBA'
    },
    headerBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EDF1FA',
        marginTop: 10
    },
    boxText1: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 17,
        color: '#7E8494',
        paddingHorizontal: 20,
        paddingVertical: 16,

    },
    boxText2: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 17,
        color: '#244CAA',
        paddingVertical: 16,
        // borderBottomWidth: 3,
        // borderColor: '#447BFB',
        paddingHorizontal: 20,
        // borderRadius: 3
        // borderBottomLeftRadius: 3
    }
})
export default Home