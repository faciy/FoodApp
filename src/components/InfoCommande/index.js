import {ScrollView, StyleSheet, Text, View, Animated} from 'react-native';
import React, {useRef} from 'react';

const App = () => {
  const scrolling = useRef(new Animated.Value(0)).current;
  const HEIGHT_MAX = 100;
  const HEIGHT_MIN = 50;

  const heightAnimate = scrolling.interpolate({
    inputRange: [0, 135],
    outputRange: [HEIGHT_MAX, HEIGHT_MIN],
    extrapolate: 'clamp',
  });
  return (
    <View>
      <Animated.View
        style={{
          backgroundColor: 'blue',
          position: 'absolute',
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          zIndex: 1,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          I am Header
        </Text>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={{
          backgroundColor: 'yellow',
          marginTop: 100,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}>
        {Array.from(Array(20).keys()).map((item, index) => (
          <Text
            key={index}
            style={{
              margin: '5%',
              padding: '2%',
              backgroundColor: 'red',
              color: 'white',
              textAlign: 'center',
            }}>
            Etudiant n°{item + 1}
          </Text>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
