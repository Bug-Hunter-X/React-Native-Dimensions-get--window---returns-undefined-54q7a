import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const { width, height } = Dimensions.get('window') || {}; // Handle undefined
    setWidth(width || 0); // Provide default values
    setHeight(height || 0);
  }, []);

  return (
    <View>
      <Text>Width: {width}</Text> 
      <Text>Height: {height}</Text> 
    </View>
  );
};

export default MyComponent;