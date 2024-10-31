import { Text, View, ScrollView} from "react-native";
import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
      
      <Text className="text-2xl text-red-500">12345.</Text>
    </View>


  );
}
