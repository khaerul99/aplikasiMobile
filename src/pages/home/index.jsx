import { StyleSheet, Text, View, useColorScheme, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { BellIcon, HeaderBG, Plane, Plus } from '../../assets/image';
import { DARK_BACKGROUND, DARK_COLOR, FONT_BOLD, FONT_EXTRABOLD, FONT_NORMAL, FONT_SEDANG, HORIZONTAL_MARGIN, LIGHT_BACKGROUND, LIGHT_COLOR, SLAT_COLOR, windowHeight, windowWidth } from '../../utils/const';
import { mainMenus } from '../../data/mainMenu';

export default function HomeScreen({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <ImageBackground source={HeaderBG} style={{ width: windowWidth, height: windowHeight * 0.2, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', }}>
                <Text style={{ color: 'white', fontSize: FONT_NORMAL, fontWeight: '500', fontFamily: FONT_EXTRABOLD }}>
                    Halo Khaerul ...
                </Text>
                <BellIcon />
            </View>
            <View style={{
                backgroundColor: isDarkMode ? DARK_BACKGROUND : LIGHT_BACKGROUND, marginHorizontal: HORIZONTAL_MARGIN,
                padding: 10, borderRadius: 10,
                height: 80,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
                marginTop: windowHeight * 0.060,
                justifyContent: 'center'
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                    <Text style={{
                        color: isDarkMode ? DARK_COLOR : LIGHT_COLOR
                    }}>
                        Rp. 100.000
                    </Text>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                            <Plane />
                            <Text style={{
                                color: isDarkMode ? DARK_COLOR : LIGHT_COLOR, fontSize: FONT_SEDANG
                            }}>Transfer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                            <Plus />
                            <Text style={{
                                color: isDarkMode ? DARK_COLOR : LIGHT_COLOR, fontSize: FONT_SEDANG
                            }}>Top up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: HORIZONTAL_MARGIN }}>
                <View style={{ marginVertical: 20, }}>
                    <Text style={{ fontFamily: FONT_BOLD, fontSize: FONT_NORMAL }}>Topup & Tagihan</Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, justifyContent: 'space-between' }}>
                    {
                        mainMenus.map((item) => (
                            <TouchableOpacity key={item.label}
                                style={{
                                    width: 120,
                                    height: 120,
                                    padding: 10,
                                    borderRadius: 5,
                                    borderColor: isDarkMode ? SLAT_COLOR : '',
                                    borderWidth: isDarkMode ? 1 : 0,
                                    backgroundColor: isDarkMode ? DARK_BACKGROUND : '#fff',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 10,
                                    flexDirection: 'column'
                                }}
                                onPress={() => navigation.navigate('Pulsa')}
                            >
                                <Image source={item.icon} />
                                <Text style={{ width: '100%', textAlign: 'center', fontSize: FONT_SEDANG, color: isDarkMode ? DARK_COLOR : LIGHT_COLOR }}>{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})