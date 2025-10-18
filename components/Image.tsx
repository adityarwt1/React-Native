import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const ImageComponent = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ImageComponent;
