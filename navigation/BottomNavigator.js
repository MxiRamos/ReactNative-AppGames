import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Biblioteca from "../screens/Biblioteca";
import Icon from "../components/Icon";
import RedesSociales from "../screens/RedesSociales";
import Search from "../screens/Search";
import Cuenta from "../screens/Cuenta";

const Tab = createBottomTabNavigator()

export default function BottomNavigator() {
    return(
            <Tab.Navigator
            screenOptions={{
                showLabel: false,
                style: {
                    backgroundColor: 'transparent',
                },
            }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon
                                name={focused ? 'home' : 'home-outline'}
                                color={focused ? 'white' : color}
                                size={size}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Redes Sociales" 
                    component={RedesSociales} 
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon
                                name={focused ? 'people-sharp' : 'people-outline'}
                                color={focused ? 'white' : color}
                                size={size}
                            />
                        )
                    }}
                />
                <Tab.Screen name="Buscar" 
                    component={Search} 
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon
                                name={ focused ? 'search-sharp' : 'search-outline'}
                                color={ focused ? 'white' : color }
                                size={ size }
                            />
                        )
                    }}

                />
                <Tab.Screen name="Mi biblioteca" 
                    component={Biblioteca} 
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon
                                name={ focused ? 'library-sharp' : 'library-outline'}
                                color={ focused ? 'white' : color }
                                size={ size }
                            />
                        )
                    }}
                    />
                <Tab.Screen name="Account" 
                    component={Cuenta}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon
                                name={ focused ? 'person-circle-sharp' : 'person-circle-outline'}
                                color = { focused ? 'white' : color }
                                size = { size }
                            />
                        )
                    }}
                />
            </Tab.Navigator>
    )
}

