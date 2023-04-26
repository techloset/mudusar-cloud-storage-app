import React, { useState } from 'react'
import { Dimensions, View, Text, Pressable, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import Pie from 'react-native-pie';
import LeftArrow from '../assets/images/svg/leftArrow.svg'
import List from '../components/loacalStorageList/List'
import PlayButton from '../assets/images/svg/playButton.svg'
import ImgLogo from '../assets/images/svg/imgPic.svg'
import MusicLogo from '../assets/images/svg/musicImg.svg'
import DocsLogo from '../assets/images/svg/docsImg.svg'
import ArchiveLogo from '../assets/images/svg/archiveImg.svg'
import Item from '../components/flatListItem/Item'
import PieImg from '../assets/images/svg/Pie.svg'




const StorageManagement = ({ navigation }: any) => {
    const [isPress, setIsPress] = useState(true);
    const [isPress1, setIsPress1] = useState(false);
    const [isPress2, setIsPress2] = useState(false);
    const [selectedOption, setSelectedOption] = useState('leastUsed');

    const screenWidth = Dimensions.get('window').width
    const data = [
        { id: 1, renderItem: <Item title={'Music'} color={'#2196F3'} radius={5} padding={8} /> },
        { id: 2, renderItem: <Item title={'Image'} color={'#FFC107'} radius={5} padding={8} /> },
        { id: 3, renderItem: <Item title={'Archive'} color={'#4AC367'} radius={5} padding={8} /> },
        { id: 4, renderItem: <Item title={'Document'} color={'#8D6E63'} radius={5} padding={8} /> },
        { id: 5, renderItem: <Item title={'Vedio'} color={'#00BCD4'} radius={5} padding={8} /> },
        { id: 6, renderItem: <Item title={'Other'} color={'#DA5DF5'} radius={5} padding={8} /> },

    ];
    const ItemToRender = ({ item }: any) => {
        return (
            <View style={{ marginLeft: 25 }}>
                <View>{item.renderItem}</View>
            </View>
        );
    };
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Image style={{ width: '100%', height: 72 }} source={require('../assets/images/statusBarImg.png')} />
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <LeftArrow />
                </Pressable>
                <Text style={styles.headerText}>
                    Storage management
                </Text>
                <View style={{ width: 20 }}></View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20, }}>
                <Pie

                    radius={screenWidth < 321 ? 120 : 140}
                    sections={[
                        { percentage: 12, color: '#FFC107', },
                        { percentage: 22, color: '#4AC367' },
                        { percentage: 12, color: '#8D6E63' },
                        { percentage: 22, color: '#00BCD4' },
                        { percentage: 12, color: '#DA5DF5' },
                        { percentage: 20, color: '#2196F3' },
                    ]}
                    strokeCap={'butt'}
                    dividerSize={10}
                    innerRadius={70}
                    backgroundColor="#ff000000"
                />
                <View style={styles.gauge} >
                    <Text style={styles.gaugeText}> 67.5 GB</Text>
                </View>
                {/* <PieImg style={{ marginRight: 20 }} /> */}
            </View>
            <View style={styles.flatList}>

                <FlatList data={data}
                    horizontal={true}
                    renderItem={ItemToRender}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

            <View style={styles.headerBox}>
                <View>
                    <Pressable onPress={() => setSelectedOption('leastUsed')}>
                        <Text style={[styles.boxText1, { color: selectedOption === 'leastUsed' ? '#447BFB' : '#7E8494' }]}>LEAST USED</Text>
                        {selectedOption === 'leastUsed' ? <Text style={{ borderTopWidth: 4, marginHorizontal: 15, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderColor: '#447BFB', height: 4 }}></Text> : null}
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => setSelectedOption('largest')}>
                        <Text style={[styles.boxText1, { color: selectedOption === 'largest' ? '#447BFB' : '#7E8494' }]}>LARGEST</Text>
                        {selectedOption === 'largest' ? <Text style={{ borderTopWidth: 4, marginHorizontal: 15, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderColor: '#447BFB', height: 4 }}></Text> : null}
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => setSelectedOption('latestAccessed')}>
                        <Text style={[styles.boxText1, { color: selectedOption === 'latestAccessed' ? '#447BFB' : '#7E8494' }]}>LATEST ACCESSED</Text>
                        {selectedOption === 'latestAccessed' ? <Text style={{ borderTopWidth: 4, marginHorizontal: 15, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderColor: '#447BFB', height: 4 }}></Text> : null}
                    </Pressable>
                </View>
            </View>

            <ScrollView>
                <View>
                    <List img={<PlayButton height={27} width={27} />} title={'TikTok dance'} description={'mov · 1 time'} color={'#E8F9FB'} />
                    <List img={<ImgLogo height={27} width={27} />} title={'Selfie withhout beard'} description={'jpg · 2 times'} color={'#FFF5D7'} />
                    <List img={<ArchiveLogo height={27} width={27} />} title={'University lectures'} description={'mp3 · 9.2 mb'} color={'#E8F9FB'} />
                    <List img={<MusicLogo height={27} width={27} />} title={'Franky Wah - Aftertime'} description={'mp3 · 9.2 mb'} color={'#E8F9FB'} />
                    <List img={<DocsLogo height={27} width={27} />} title={'On the top of the world'} description={'mp3 · 9.2 mb'} color={'#F1EDEB'} />

                </View>
            </ScrollView>
        </View>
    )
}





const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 10
    },
    headerText: {
        // fontFamily: 'avenir-next-bold',
        fontFamily: 'AvenirNext-DemiBold',

        color: '#244CAA',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 24
    },
    headerBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderBottomWidth: 1,
        // borderBottomColor: '#7E8494',
        borderBottomColor: 'lightgrey',
        marginTop: 25
    },
    boxText1: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 17,
        color: '#7E8494',
        paddingVertical: 16,
        paddingHorizontal: 20

    },
    boxText2: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 17,
        color: '#244CAA',
        paddingVertical: 16,
        paddingHorizontal: 20,
        // borderBottomLeftRadius: 3
        paddingLeft: 22
    },
    flatList: {
        // width: '85%'
        display: 'flex',
        // justifyContent
        alignItems: 'center',
        marginTop: 25
    },
    gauge: {
        position: 'absolute',
        // backgroundColor: 'aqua',
        top: '45%',

        // width: 100,
        // height: 160,
        alignItems: 'center',
        // justifyContent: 'flex-end',
    },

    gaugeText: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'avenir-next-medium',
        lineHeight: 27,
        color: '#244CAA',
    },
})
export default StorageManagement