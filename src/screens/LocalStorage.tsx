import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, Image, StatusBar, TextInput, FlatList, ScrollView, KeyboardAvoidingView } from 'react-native'
import Search from '../assets/images/svg/search.svg'
import Item from '../components/flatListItem/Item'
import PlayButton from '../assets/images/svg/playButton.svg'
import ImgLogo from '../assets/images/svg/imgPic.svg'
import MusicLogo from '../assets/images/svg/musicImg.svg'
import DocsLogo from '../assets/images/svg/docsImg.svg'
import ArchiveLogo from '../assets/images/svg/archiveImg.svg'
import List from '../components/loacalStorageList/List'



const LocalStorage = ({ navigation }: any) => {
    const [isHidden, setIsHidden] = useState(true)
    const data = [{ id: 1, renderItem: <Item img={<PlayButton height={27} width={27} />} title={'Vedio'} color={'#E8F9FB'} padding={22} radius={28} /> },
    { id: 2, renderItem: <Item img={<ImgLogo height={27} width={27} />} title={'Image'} color={'#FFF5D7'} padding={22} radius={28} /> },
    { id: 3, renderItem: <Item img={<MusicLogo height={27} width={27} />} title={'Music'} color={'#E8F9FB'} padding={22} radius={28} /> },
    { id: 4, renderItem: <Item img={<ArchiveLogo height={27} width={27} />} title={'Archive'} color={'#E8F9FB'} padding={22} radius={28} /> },
    { id: 5, renderItem: <Item img={<DocsLogo height={27} width={27} />} title={'Document'} color={'#E8F9FB'} padding={22} radius={28} /> }

    ];
    const ItemToRender = ({ item }: any) => {
        return (
            <View style={{ marginLeft: 25 }}>
                <View>{item.renderItem}</View>
            </View>
        );
    };
    return (

        <View style={styles.parent}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.child1}>
                <Image style={{ height: 72, width: '100%' }}
                    source={require('../assets/images/statusBarImg.png')}></Image>
                <Text style={styles.heading}>Local storage</Text>
                <View style={styles.container}>
                    <Search />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="gray"
                        onFocus={() => setIsHidden(false)}
                        onBlur={() => setIsHidden(true)}
                    />
                </View>
            </View>
            <View style={styles.child2}>
                <View style={styles.flatList}>

                    <FlatList data={data}
                        horizontal={true}
                        renderItem={ItemToRender}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <ScrollView>

                    <View>
                        <List img={<MusicLogo height={27} width={27} />} title={'Franky Wah - Aftertime'} description={'mp3 · 9.2 mb'} color={'#E8F9FB'} />
                        <List img={<ImgLogo height={27} width={27} />} title={'Annie s new car'} description={'mp3 · 9.2 mb'} color={'#FFF5D7'} />
                        <List img={<ArchiveLogo height={27} width={27} />} title={'Top secret archive'} description={'mp3 · 9.2 mb'} color={'#E8F9FB'} />
                        <List img={<DocsLogo height={27} width={27} />} title={'On the top of the world'} description={'mp3 · 9.2 mb'} color={'#F1EDEB'} />
                        <List img={<PlayButton height={27} width={27} />} title={'Fun times'} description={'mp3 · 9.2 mb'} color={'#E8F9FB'} />

                    </View>
                </ScrollView>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    parent: {
        flex: 1,

    },
    child1: {
        // flex: 1,
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    child2: {
        flex: 1,
        marginTop: 30
        // backgroundColor: 'blue'
    },
    heading: {
        fontSize: 34,
        textAlign: 'left',
        fontWeight: '600',
        lineHeight: 46,
        color: '#244CAA',
        fontFamily: 'AvenirNext-DemiBold',
        // fontFamily: 'avenir-next-medium',
        width: '85%',
        marginTop: 22
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
        marginTop: 25,

    },
    input: {
        flex: 1,
        height: 44,
        marginLeft: 10,
        fontSize: 16,
        color: '#959FBA'
    },
    flatList: {
        // width: '85%'
        display: 'flex',
        // justifyContent
        alignItems: 'center'
    }
})
export default LocalStorage