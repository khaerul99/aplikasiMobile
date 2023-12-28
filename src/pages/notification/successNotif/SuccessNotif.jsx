import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { DARK_BACKGROUND, DARK_COLOR, FONT_EXTRABOLD, FONT_MEDIUM, FONT_NORMAL, FONT_REGULAR, FONT_SEDANG, GRAY_COLOR, HORIZONTAL_MARGIN, LIGHT_COLOR, SLAT_COLOR, WHITE_BACKGROUND, } from '../../../utils/const'


export default function SuccessNotif({ route }) {
    const { item, nomor_tujuan } = route.params;
    console.log(route.params);
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={{
            flex: 1,
            backgroundColor: isDarkMode ? DARK_BACKGROUND : WHITE_BACKGROUND,
        }}>
            <View style={{
                height: 150,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20
            }}>
                <LottieView source={require('../../../assets/animasi/success.json')} autoPlay loop width={150} height={150} />
                <Text style={{
                    fontFamily: FONT_EXTRABOLD,
                    fontSize: 20,
                    width: 150,
                    textAlign: 'center'
                }}>
                    BERHASIL
                </Text>
            </View>
            <View style={{
                marginHorizontal: HORIZONTAL_MARGIN,
                marginTop: 20
            }}>
                <View style={styles.modalData(isDarkMode)}>
                    <Text style={styles.labelModalData(isDarkMode)}>Nomor Tujuan</Text>
                    <Text style={styles.valueModalData(isDarkMode)}>{nomor_tujuan}</Text>
                </View>
                <View style={styles.modalData(isDarkMode)}>
                    <Text style={styles.labelModalData(isDarkMode)}>Product</Text>
                    <Text style={styles.valueModalData(isDarkMode)}>{item?.product_name}</Text>
                </View>
                <View style={styles.modalData(isDarkMode)}>
                    <Text style={styles.labelModalData(isDarkMode)}>Harga</Text>
                    <Text style={styles.valueModalData(isDarkMode)}>{item?.price}</Text>
                </View>
                <View style={styles.modalData(isDarkMode)}>
                    <Text style={styles.labelModalData(isDarkMode)}>SN</Text>
                    <Text style={styles.valueModalData(isDarkMode)}>827688386288399829239</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    modalData: isDarkMode => ({
        borderBottomWidth: 1,
        borderBottomColor: isDarkMode ? SLAT_COLOR : GRAY_COLOR,
        padding: 5,
        rowGap: 5,
    }),
    labelModalData: isDarkMode => ({
        fontFamily: FONT_MEDIUM,
        fontSize: FONT_SEDANG,
        color: isDarkMode ? DARK_COLOR : LIGHT_COLOR
    }),
    valueModalData: isDarkMode => ({
        fontFamily: FONT_REGULAR,
        fontSize: FONT_NORMAL,
        color: isDarkMode ? DARK_COLOR : LIGHT_COLOR
    }),
})