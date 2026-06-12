import { useAuth } from '@clerk/expo';
import { Redirect } from 'expo-router';
import React from 'react';

const SSOCallbackScreen = () => {

    const { isSignedIn, isLoaded } = useAuth()

    if (!isLoaded) {
        return null;
    }

    if (isSignedIn) {
        return <Redirect href={'/'} />
    }

    return <Redirect href={'/(auth)/sign-in'} />

}

export default SSOCallbackScreen