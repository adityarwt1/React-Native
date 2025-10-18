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
