import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
    "name": "Amki",
    "slug": "Amki",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
        "image": "./assets/images/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
    },
    "ios": {
        "supportsTablet": true,
        "bundleIdentifier": "com.nonarne.Amki"
    },
    "android": {
        "adaptiveIcon": {
            "foregroundImage": "./assets/images/adaptive-icon.png",
            "backgroundColor": "#ffffff"
        },
        "package": "com.nonarne.Amki"
    },
    "web": {
        "bundler": "metro",
        "output": "static",
        "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
        "expo-router"
    ],
    "experiments": {
        "typedRoutes": true
    },
    "extra": {
        "router": {
            "origin": false
        },
        "eas": {
            "projectId": "3e6bb0ad-4e54-46ee-829a-f10ed5a9f000"
        }
    }
};

export default config;
