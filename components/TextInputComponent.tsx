import { Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextInputComponet = () => {
  const [text, setText] = useState<string>();
  return (
    <>
      <View>
        <TextInput
          onChangeText={text => setText(text)}
          defaultValue={text}
          placeholder="Enter you text here..."
        />
      </View>
    </>
  );
};

export default TextInputComponet;
