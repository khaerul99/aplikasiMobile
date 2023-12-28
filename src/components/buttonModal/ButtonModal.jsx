import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableWithoutFeedback,
    TouchableOpacity, useColorScheme
} from 'react-native'
import React from 'react'
import { DARK_BACKGROUND, FONT_BOLD, WHITE_BACKGROUND, windowHeight, windowWidth } from '../../utils/const'
import { Xclose } from '../../assets/image'

export default function ButtonModal(
    {
        visible,
        onDismis,
        children,
        tittle

    }
) {

    const isDarkMode = useColorScheme() === 'dark'

    return (
        <Modal visible={visible}
            animationType='slide'
            onRequestClose={onDismis}
            transparent={true}
        >
            <TouchableWithoutFeedback onPress={onDismis}>
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0,0.5)'

                }}>

                </View>
            </TouchableWithoutFeedback>
            <View style={{
                height: '50%',
                backgroundColor: isDarkMode ? DARK_BACKGROUND : WHITE_BACKGROUND,
                width: windowWidth,
                position: 'absolute',
                bottom: 0,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                padding: 15,
                paddingHorizontal: 15

            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{
                        fontFamily: FONT_BOLD,
                        fontSize: 16,
                        textAlign: 'center',
                    }}>
                        {tittle}
                    </Text>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        right: 10,
                    }}
                        onPress={onDismis}
                    >
                        <Xclose width={20} height={20} backgroundColor='white' />
                    </TouchableOpacity>
                </View>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({})