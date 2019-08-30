import React from 'react'
import { Text, View } from 'react-native'
import firebase from 'react-native-firebase';
import { statusCodes, GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

const androidConfig = {    
    clientId: "620018303232-88l03akbb2cn23nej8bi3f22giu4oepe.apps.googleusercontent.com",
    appId: "1:620018303232:android:6e3a2c22f49a747c",
    apiKey: "AIzaSyAYNxsCGtTATZ1w8PBz7oBGlM_OoFvRSGU",
    databaseURL: "https://moonbucks-dbf40.firebaseio.com",
    storageBucket: "moonbucks-dbf40.appspot.com",
    messagingSenderId: "620018303232",
    projectId: "moonbucks-dbf40",
    // persistence: true,
};

export default class Auth extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            userInfo: null,
        };
    }
    
    componentDidMount() {
        firebase.initializeApp(androidConfig, 'moonBucks');
        
        firebase.app('moonBucks').auth().signInAnonymously()
            .then((user) => {
                this.setState({
                    isAuthenticated: true,
                });
                console.log(user.toJSON());
            });
    }

    _signin() {
        signIn = async () => {
            try {
                await GoogleSignin.hasPlayServices();
                const userInfo = await GoogleSignin.signIn();
                this.setState({ userInfo: userInfo });
            } catch (error) {
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // when the login-flow cancelled
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    // opeeration (f.e. sign in) is in progress already
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    // play services not available or outdated.
                } else {
                    // some other errors... 
                }

            }
        }
    }

    render() {

        if ( !this.state.isAuthenticated ) {
            <GoogleSigninButton 
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signin}
                disabled={this.state.isSigninInProgress}
            />
            // return null;
        }

        return (
            <View>
                <Text> already Login </Text>
            </View>
        )
    }
}
