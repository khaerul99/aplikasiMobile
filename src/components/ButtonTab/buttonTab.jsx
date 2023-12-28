import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { BLUE_COLOR, DARK_BACKGROUND } from '../../utils/const';
import { DocumentActive, DocumentDefault, HomeActive, HomeDefault, UserActive, UserDefault } from '../../assets/image';
function ButtonTab({ state, descriptors, navigation, }) {
    const isDarkMode = useColorScheme() === 'dark'

    const MenuTab = ({ label, active }) => {
        if (label === 'Home')
            return active ? <HomeActive /> : <HomeDefault />
        if (label === 'Transaksi')
            return active ? <DocumentActive /> : <DocumentDefault />
        if (label === 'Profil')
            return active ? <UserActive /> : <UserDefault />
    }
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            backgroundColor: isDarkMode ? DARK_BACKGROUND : '#fff',
                            padding: 10,
                            alignItems: 'center',
                        }}

                    >
                        <MenuTab label={label} active={isFocused} key={index} />
                        <Text style={{ color: isFocused ? BLUE_COLOR : '#222' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default ButtonTab    
