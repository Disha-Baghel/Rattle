import React from 'react';
import {Image, Text, View} from 'react-native';
import ph from './Images/ph.png';
import bolt from './Images/bolt.png'
import wifi from './Images/wifi.png'

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

function Card({children, image, value, unit}) {
  return (
    <View className="items-center justify-center w-9/12 h-1/5 bg-[#434556] my-2 rounded-xl shadow-2xl shadow-black">
      <View className="flex-row justify-between w-6/12">
        <Image source={image} className="w-16 h-16" resizeMode='cover'/>
        <View className="flex-row bg-[#434556] rounded-xl shadow-sm shadow-white w-16 h-16 justify-center items-center">
          <Text className="text-2xl font-bold">{value}</Text>
          <Text className=""> {unit}</Text>
        </View>
      </View>
      {children}
    </View>
  );
}

function App() {

  const ph_value = 7;
  const ph_progress = (ph_value / 14.0) * 100;

  return (
    <View className="items-center justify-center bg-[#434556] flex-1">
      <View className='w-9/12 h-[30%] bg-[#434556] flex items-center gap-2'>
        <View className='w-full h-5/6 bg-black rounded-xl'/>
        <Text className='text-xl'>Live Video</Text>
      </View>
      <Card image={ph} value={ph_value} unit=''>
        <Progress progress={ph_progress} className='mt-4'/>
      </Card>
      <Card image={bolt} value={1.8} unit='mV'>
        <Text className="text-xl mt-4">Electro Chemical Potential</Text>
      </Card>
      <Card image={wifi} value={10} unit='mm'>
        <Text className="text-xl mt-4">Rust Thickness</Text>
      </Card>
    </View>
  );
}

export default App;
