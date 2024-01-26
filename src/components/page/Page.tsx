import React, {memo} from 'react';
import {ImageBackground, KeyboardAvoidingView} from 'react-native';
import styles from './styles';
import {images} from 'src/appConstant/images';

type Props = {
  children: React.ReactNode;
};

const Page = ({children}: Props) => (
  <ImageBackground
    source={images.backGroundDot}
    resizeMode="repeat"
    style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

export default memo(Page);
