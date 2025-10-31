import React from 'react';
import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FoodScreen = () => (
    <View style={[styles.screen, { backgroundColor: '#F0FFF0' }]}>
        <Text style={styles.screenText}>Food Screen</Text>
    </View>
);

const GroceryScreen = () => (
    <View style={[styles.screen, { backgroundColor: '#FFF8DC' }]}>
        <Text style={styles.screenText}>Grocery Screen</Text>
    </View>
);

const OrdersScreen = () => (
    <View style={[styles.screen, { backgroundColor: '#F5F5F5' }]}>
        <Text style={styles.screenText}>Orders Screen</Text>
    </View>
);

const AccountScreen = () => (
    <View style={[styles.screen, { backgroundColor: '#E6E6FA' }]}>
        <Text style={styles.screenText}>Account Screen</Text>
    </View>
);

export default function BottomTabs() {
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        const isActive = routeName === selectedTab;
        let icon = '';

        switch (routeName) {
            case 'Food':
                icon = 'silverware-fork-knife';
                break;
            case 'Grocery':
                icon = isActive ? 'store' : 'store-outline';
                break;
            case 'Orders':
                icon = isActive ? 'label' : 'label-outline';
                break;
            case 'Account':
                icon = isActive ? 'account' : 'account-outline';
                break;
        }

        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                <Icon name={icon} size={24} color={isActive ? '#024220' : 'gray'} />
                <Text style={[styles.tabLabel, { color: isActive ? '#024220' : 'gray', }]}>
                    {routeName}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
            <CurvedBottomBar.Navigator
                type="UP"
                style={styles.bottomBar}
                shadowStyle={styles.shadow}
                height={60}
                circleWidth={55}
                bgColor="white"
                initialRouteName="Food"
                borderTopLeftRight
                renderCircle={({ selectedTab, navigate }) => (
                    <Animated.View style={styles.btnCircleUp}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Alert.alert('Search clicked')}
                        >
                            <Icon name="magnify" size={32} color="#FFFFFF" />
                        </TouchableOpacity>
                    </Animated.View>
                )}
                tabBar={renderTabBar}
            >
                <CurvedBottomBar.Screen
                    name="Food"
                    position="LEFT"
                    component={FoodScreen}
                />
                <CurvedBottomBar.Screen
                    name="Grocery"
                    position="LEFT"
                    component={GroceryScreen}
                />
                <CurvedBottomBar.Screen
                    name="Orders"
                    position="RIGHT"
                    component={OrdersScreen}
                />
                <CurvedBottomBar.Screen
                    name="Account"
                    position="RIGHT"
                    component={AccountScreen}
                />
            </CurvedBottomBar.Navigator>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenText: {
        fontSize: 20,
        color: '#024220',
    },
    shadow: {
        shadowColor: '#DDDDDD',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#024220',
        bottom: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: 12,
        marginTop: 1,
        fontFamily: 'Kreon-Bold'
    },
});