import React from 'react';
import { Text, View } from 'react-native';

function Card({name}) {
    return (
        <View className="justify-center w-9/12 text-2xl bg-[#434556] rounded-lg shadow-lg h-1/5 shadow-black">
            <Text className="text-3xl">{name}</Text>
            <Text className="text-3xl">{name}</Text>
        </View>
    )
}

function App() {
  return (
      <View className="items-center justify-center flex-1 bg-[#434556] gap-3">
        <Card name="vikram" />
        <Card name="Disha" />
        <Card name="Got" />
      </View>
  );
}

export default App;

