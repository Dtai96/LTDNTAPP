import { ThemedText } from '@/components/themed-text';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyApp(){
  return (
    <SafeAreaView>
      <ScrollView>
        <ThemedText type='title'>Hello World!</ThemedText>
      </ScrollView>
    </SafeAreaView>
  )
}