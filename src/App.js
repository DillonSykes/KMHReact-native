import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import AddActivity from './AddActivity'
import History from './History'
import Earn from './Earn'

// create our app's navigation stack
const App = SwitchNavigator(
    {
        Loading,
        SignUp,
        Login,
        Main,
        AddActivity,
        History,
        Earn
    },
    {
        initialRouteName: 'Loading'
    }
)

export default App