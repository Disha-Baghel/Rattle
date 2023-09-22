import React from 'react';
import {Text, View, VirtualizedList} from 'react-native';

function Progress({progress}) {
  return (
    <View className="w-full justify-center items-center mt-3">
      <View className="overflow-hidden rounded-full bg-gray-200 w-9/12">
        <View style={{ height: 10, width: `${progress}%`, backgroundColor: '#419197', borderRadius: 50 }}></View>
      </View>
      <View className="flex-row justify-between w-8/12">
        <Text className="text-lg">0</Text>
        <Text className="text-lg">14</Text>
      </View>
    </View>
  );
}

function Card({children}) {
  return (
    <View className="items-center justify-center w-9/12 h-1/5 bg-[#434556] my-2 rounded-xl shadow-2xl shadow-black">
      <View className="flex-row justify-between w-6/12">
        <View className="bg-[#434556] rounded-xl shadow-lg shadow-white w-16 h-16 justify-center items-center">
          <Text className="text-xl">07</Text>
        </View>
        <View className="bg-[#434556] rounded-xl shadow-lg shadow-white w-16 h-16 justify-center items-center">
          <Text className="text-xl">07</Text>
        </View>
      </View>
      {children}
    </View>
  );
}

function App() {
  return (
    <View className="items-center justify-center bg-[#434556] flex-1">
      <Card>
        <Progress progress={40}/>
      </Card>
      <Card>
        <Text className="text-xl">Electro Chemical Potential</Text>
      </Card>
      <Card>
        <Text className="text-xl">Rust Thickness</Text>
      </Card>
    </View>
  );
}

export default App;
