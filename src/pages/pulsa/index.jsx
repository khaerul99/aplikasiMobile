import {
    StyleSheet,
    Text,
    View,
    TextInput,
    useColorScheme,
    TouchableOpacity,
} from 'react-native'
import React, { useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    BLUE_COLOR,
    DARK_BACKGROUND,
    DARK_COLOR,
    FONT_BOLD,
    FONT_MEDIUM,
    FONT_NORMAL,
    FONT_REGULAR,
    FONT_SEDANG,
    GRAY_COLOR,
    GREEN_COLOR,
    HORIZONTAL_MARGIN,
    LIGHT_BACKGROUND,
    LIGHT_COLOR,
    SLAT_COLOR,
    WHITE_BACKGROUND,
} from '../../utils/const'
import { product_pulsa } from '../../data/product_pulsa'
import { Check } from '../../assets/image'
import { product_data } from '../../data/product_data'
import ButtonModal from '../../components/buttonModal/ButtonModal'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'






export default function Pulsa({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark'
    const [type, setType] = useState('Pulsa')
    const [nomorTujuan, setNomorTujuan] = useState(null)
    const [selectItem, setSelectItem] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const product_type = ['Pulsa', 'Data']

    // console.log('selext item :', selectItem);


    return (
        <>
            <SafeAreaView>
                <View style={{
                    marginHorizontal: HORIZONTAL_MARGIN,
                    margin: 10,
                }}>
                    {/* input */}
                    <View style={{
                        rowGap: 10,
                    }}>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                padding: 5,
                                borderColor: isDarkMode ? SLAT_COLOR : GRAY_COLOR,
                                backgroundColor: isDarkMode ? DARK_BACKGROUND : WHITE_BACKGROUND,
                                fontFamily: FONT_REGULAR,
                                color: isDarkMode ? DARK_COLOR : LIGHT_COLOR
                            }}
                            placeholder='masukan no tujuan ...'
                            placeholderTextColor={GRAY_COLOR}
                            keyboardType='numeric'
                            value={nomorTujuan}
                            onChangeText={text => setNomorTujuan(text)}
                        />

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonLabel}>Tampilkan produk</Text>
                        </TouchableOpacity>
                    </View>

                    {/* pilihan */}
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                        {
                            product_type.map((text) => (
                                <TouchableOpacity key={text}
                                    style={[styles.buttonTab,
                                    text === type ? {
                                        borderBottomColor: BLUE_COLOR,
                                        borderBottomWidth: 2
                                    } : '']}
                                    onPress={() => setType(text)}>
                                    <Text style={[
                                        styles.buttonTabLabel(isDarkMode),
                                        text === type ? {
                                            color: BLUE_COLOR,
                                        } : {
                                            color: 'black',
                                        }]}>{text}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>

                    {/* product */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 20, gap: 10, }}>
                        {
                            type === 'Pulsa' ?
                                <>
                                    {
                                        product_pulsa.map((item) => (
                                            <TouchableOpacity
                                                key={item.id}
                                                style={[styles.productWrapper(isDarkMode),

                                                selectItem?.id === item.id ? {
                                                    borderColor: GREEN_COLOR
                                                } : '']}
                                                onPress={() => setSelectItem(item)}
                                            >
                                                <Text style={styles.productLabel(isDarkMode)}>
                                                    {item.product_name}
                                                </Text>
                                                <Text style={styles.productPrice(isDarkMode)}>
                                                    {item.price}
                                                </Text>
                                                {
                                                    selectItem?.id === item.id && (
                                                        <Check
                                                            width={20}
                                                            style={{
                                                                position: 'absolute',
                                                                right: 5,
                                                                top: 5,
                                                            }} />
                                                    )
                                                }
                                            </TouchableOpacity>
                                        ))
                                    }

                                </> : <>
                                    {
                                        product_data.map((item) => (
                                            <TouchableOpacity
                                                key={item.id}
                                                style={[styles.productWrapper(isDarkMode),

                                                selectItem?.id === item.id ? {
                                                    borderColor: GREEN_COLOR
                                                } : '']}
                                                onPress={() => setSelectItem(item)}
                                            >
                                                <Text style={styles.productLabel(isDarkMode)}>
                                                    {item.product_name}
                                                </Text>
                                                <Text style={styles.productPrice(isDarkMode)}>
                                                    Rp.  {item.price}
                                                </Text>
                                                {
                                                    selectItem?.id === item.id && (
                                                        <Check
                                                            width={20}
                                                            style={{
                                                                position: 'absolute',
                                                                right: 5,
                                                                top: 5,
                                                            }} />
                                                    )
                                                }
                                            </TouchableOpacity>
                                        ))
                                    }
                                </>
                        }

                    </View>
                </View>

            </SafeAreaView>
            {
                selectItem && (
                    <View style={styles.buttonBottom(isDarkMode)}>
                        <TouchableOpacity style={styles.buttonButton} onPress={() => setShowModal(!showModal)}>
                            <Text style={styles.buttonLabel}>Lanjutkan</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            <ButtonModal
                visible={showModal}
                onDismis={() => setShowModal(!showModal)}
                tittle={'Detail Transaksi'} >
                <View>
                    <View style={styles.modalData(isDarkMode)}>
                        <Text style={styles.labelModalData(isDarkMode)}>Nomor Tujuan</Text>
                        <Text style={styles.valueModalData(isDarkMode)}>{nomorTujuan}</Text>
                    </View>
                    <View style={styles.modalData(isDarkMode)}>
                        <Text style={styles.labelModalData(isDarkMode)}>Product</Text>
                        <Text style={styles.valueModalData(isDarkMode)}>{selectItem?.product_name}</Text>
                    </View>
                    <View style={styles.modalData(isDarkMode)}>
                        <Text style={styles.labelModalData(isDarkMode)}>Harga</Text>
                        <Text style={styles.valueModalData(isDarkMode)}>{selectItem?.price}</Text>
                    </View>
                </View>
                <View style={styles.buttonBottom(isDarkMode)}>
                    <TouchableOpacity
                        style={styles.buttonButton}
                        onPress={() => navigation.navigate('Success', {
                            nomor_tujuan: nomorTujuan,
                            item: selectItem
                        })}
                    >
                        <Text style={styles.buttonLabel}> Bayar Rp. {selectItem?.price}</Text>
                    </TouchableOpacity>
                </View>
            </ButtonModal>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: BLUE_COLOR,
        borderRadius: 5,
        padding: 5,
    },
    buttonLabel: {
        fontFamily: FONT_REGULAR,
        color: WHITE_BACKGROUND,
        textAlign: 'center',
    },
    buttonTab: {
        width: '47%',
        borderBottomColor: GRAY_COLOR,
        borderBottomWidth: 1,
        padding: 8
    },
    buttonTabLabel: isDarkMode => (
        {
            textAlign: 'center',
            color: isDarkMode ? DARK_COLOR : LIGHT_COLOR,
            fontFamily: FONT_REGULAR,
        }
    ),
    productWrapper: isDarkMode => ({
        borderWidth: 1,
        borderColor: GRAY_COLOR,
        padding: 25,
        borderRadius: 10,
        width: '47%',
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: isDarkMode ? DARK_BACKGROUND : LIGHT_BACKGROUND
    }),
    productLabel: isDarkMode => ({
        fontFamily: FONT_BOLD,
        fontSize: FONT_NORMAL,
        color: isDarkMode ? DARK_COLOR : LIGHT_COLOR
    }),
    productPrice: isDarkMode => ({
        fontSize: FONT_SEDANG,
        fontFamily: FONT_REGULAR,
        color: isDarkMode ? DARK_COLOR : LIGHT_COLOR
    }),
    buttonBottom: isDarkMode => ({
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: isDarkMode ? DARK_BACKGROUND : WHITE_BACKGROUND

    }),
    buttonButton: {
        backgroundColor: BLUE_COLOR,
        padding: 10,
        borderRadius: 5
    },
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
        fontSize: FONT_SEDANG,
        color: isDarkMode ? DARK_COLOR : LIGHT_COLOR
    }),
})