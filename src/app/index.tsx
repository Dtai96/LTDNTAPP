import { ThemedText } from '@/components/themed-text';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyApp() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/android-icon-foreground.png")}
          style={styles.avatar} />
        <ThemedText style ={styles.Title }>Thông tin sinh viên</ThemedText>
        <FlatList
          data={[
            { id: '1', name: 'Nguyễn Văn A', msv: '23103001', class: 'CNTT K23', ngaysinh: '01/01/2005', diachi: '567 Lê Duẩn' },
            { id: '2', name: 'Nguyễn Văn B', msv: '23103002', class: 'CNTT K23', ngaysinh: '01/02/2005', diachi: '567 Lê Duẩn' },
            { id: '3', name: 'Nguyễn Văn C', msv: '23103003', class: 'CNTT K23', ngaysinh: '01/03/2005', diachi: '567 Lê Duẩn' },
            { id: '4', name: 'Nguyễn Văn D', msv: '23103004', class: 'CNTT K23', ngaysinh: '01/04/2005', diachi: '567 Lê Duẩn' },
          ]}
          renderItem={({ item }) => (
            <View>
              <ThemedText>Họ và tên: {item.name} </ThemedText>
              <ThemedText>MSSV: {item.msv} </ThemedText>
              <ThemedText>Lớp: {item.class} </ThemedText>
              <ThemedText>Ngày sinh: {item.ngaysinh} </ThemedText>
              <ThemedText>Địa chỉ: {item.diachi} </ThemedText>
              <ThemedText></ThemedText>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom : 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
})