# React Native Notes By Aditya

## Basic Difrences

1. **For making the div center**:

```jsx
export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

2. How to change the status bar colour

```jsx
<StatusBar backgroundColor="#4CAF50" barStyle="dark-content" />
```

3. How to give the text colour

```jsx
export const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

4. How to Image in the React Native

```jsx
<Image
  source={{
    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
  }}
  style={{ width: 200, height: 200 }}
/>
```

5. How to take input in the React Native

```jsx
 const [text, setText] = useState<string>();

    <TextInput
        onChangeText={text => setText(text)}
        defaultValue={text}
        placeholder="Enter you text here..."
    />
```

6. How to crate the scroll able content

```jsx
<ScrollView>
  <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
  <Image source={logo} />
</ScrollView>
```

7. How to map Array

```jsx
<FlatList
  data={[
    { key: 'Devin' },
    { key: 'Dan' },
    { key: 'Dominic' },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
    { key: 'Julie' },
  ]}
  renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
/>
```

8. Two Array

```jsx
<SectionList
  sections={[
    { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
    {
      title: 'J',
      data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'],
    },
  ]}
  renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
  renderSectionHeader={({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  )}
  keyExtractor={item => `basicListEntry-${item}`}
/>
```

9.  Platform Specific Code

```jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});

import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});

//for the component level platform build
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid'),
})();

<Component />;

// detecting the platform

// in android
import { Platform } from 'react-native';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}

// in the ios
import { Platform } from 'react-native';

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}

//same coponent but
BigButton.ios.js;
BigButton.android.js;

//working same
import BigButton from './BigButton';


Container.js # picked up by webpack, Rollup or any other Web bundler
Container.native.js # picked up by the React Native bundler for both Android and iOS (Metro)
```

10. How to difine the prop in the React Native

```jsx
type PreviewLayoutProps = PropsWithChildren<{
  label: string,
  values: string[],
  selectedValue: string,
  setSelectedValue: (value: string) => void,
}>;
```

11. Preview Layout

```jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import type { PropsWithChildren } from 'react';

const RowGapAndColumnGap = () => {
  const [rowGap, setRowGap] = useState(10);
  const [columnGap, setColumnGap] = useState(10);

  return (
    <PreviewLayout
      columnGap={columnGap}
      handleColumnGapChange={setColumnGap}
      rowGap={rowGap}
      handleRowGapChange={setRowGap}
    >
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
      <View style={[styles.box, styles.box5]} />
    </PreviewLayout>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  columnGap: number,
  handleColumnGapChange: (gap: number) => void,
  rowGap: number,
  handleRowGapChange: (gap: number) => void,
}>;

const PreviewLayout = ({
  children,
  handleColumnGapChange,
  handleRowGapChange,
  rowGap,
  columnGap,
}: PreviewLayoutProps) => (
  <View style={styles.previewContainer}>
    <View style={styles.inputContainer}>
      <View style={styles.itemsCenter}>
        <Text>Row Gap</Text>
        <TextInput
          style={styles.input}
          value={String(rowGap)}
          onChangeText={v => handleRowGapChange(Number(v))}
        />
      </View>
      <View style={styles.itemsCenter}>
        <Text>Column Gap</Text>
        <TextInput
          style={styles.input}
          value={String(columnGap)}
          onChangeText={v => handleColumnGapChange(Number(v))}
        />
      </View>
    </View>
    <View style={[styles.container, { rowGap, columnGap }]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  itemsCenter: { alignItems: 'center' },
  inputContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  previewContainer: { padding: 10, flex: 1 },
  input: {
    borderBottomWidth: 1,
    paddingVertical: 3,
    width: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
    maxHeight: 400,
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  box: {
    width: 50,
    height: 80,
  },
  box1: {
    backgroundColor: 'orangered',
  },
  box2: {
    backgroundColor: 'orange',
  },
  box3: {
    backgroundColor: 'mediumseagreen',
  },
  box4: {
    backgroundColor: 'deepskyblue',
  },
  box5: {
    backgroundColor: 'mediumturquoise',
  },
});

export default RowGapAndColumnGap;
```

12. How to take the take the image from the directory

```jsx
const icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;
```

13. Get Image from the network call

```jsx
<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{ width: 400, height: 400 }}
/>
```

14. Image Background

```jsx
<ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
</ImageBackground>
```

15. How to handle the touch

```jsx
    <Button onPress={onPress} title="This looks great!" />
    <Button onPress={onPress} title="OK!" color="#841584" />
```
