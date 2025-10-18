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
```
