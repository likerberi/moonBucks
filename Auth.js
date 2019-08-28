import React from 'react'
import { Text, View } from 'react-native'
import firebase from 'react-native-firebase';
import { statusCodes, GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class Auth extends Component {
    
    constructor() {
        super();
        this.state = {
            isAuthenticated: false,
            userInfo: null,
        };
    }
    
    componentDidMount() {
        firebase.auth().signInAnonymously()
            .then(() => {
                this.setState({
                    isAuthenticated: true,
                });
            });
    }

    _signin() {
        signIn = async () => {
            try {
                await GoogleSignin.hasPlayServices();
                const userInfo = await GoogleSignin.signIn();
                this.setState({ userInfo });
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
                <Text> textInComponent </Text>
            </View>
        )
    }
}
