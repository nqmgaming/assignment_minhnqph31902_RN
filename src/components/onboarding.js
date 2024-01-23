import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
    return (
        <View style={{ height: Dimensions.get('window').height / 2 }}>
            <Onboarding
                showNext={false}
                showSkip={false}
                showDone={false}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                        }} source={require('../assets/images/img1.png')} />,
                        title: '',
                        subtitle: '',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                        }} source={require('../assets/images/img2.png')} />,
                        title: 'Onboarding 2',
                        subtitle: 'Description for onboarding 2',
                    },
                    // other pages...
                ]}
            />
        </View>
    );
};

export default OnboardingScreen;