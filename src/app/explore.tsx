import { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export default function Form() {
  const [hoTen, setHoTen] = useState('');
  const [maSV, setMaSV] = useState('');
  const [email, setEmail] = useState('');
  const [soDienThoai, setSoDienThoai] = useState('');
  const [matKhau, setMatKhau] = useState('');

  const [errors, setErrors] = useState({
    hoTen: '',
    email: '',
  });

  const validate = () => {
    const newErrors = { hoTen: '', email: '' };

    if (!hoTen.trim()) {
      newErrors.hoTen = 'Họ và tên không được để trống';
    }
    if (!email.trim()) {
      newErrors.email = 'Email không được để trống';
    }

    setErrors(newErrors);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText style ={styles.Title }>Thông tin sinh viên</ThemedText>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.field}>
            <ThemedText style={styles.label}>Họ và tên</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Nhập họ và tên"
              value={hoTen}
              onChangeText={setHoTen}
              onBlur={validate}
            />
            {errors.hoTen ? <ThemedText style={styles.error}>{errors.hoTen}</ThemedText> : null}
          </View>

          <View style={styles.field}>
            <ThemedText style={styles.label}>Mã sinh viên</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Nhập mã số sinh viên"
              value={maSV}
              onChangeText={setMaSV}
            />
          </View>

          <View style={styles.field}>
            <ThemedText style={styles.label}>Email</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Nhập email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              onBlur={validate}
            />
            {errors.email ? <ThemedText style={styles.error}>{errors.email}</ThemedText> : null}
          </View>

          <View style={styles.field}>
            <ThemedText style={styles.label}>Số điện thoại</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Nhập số điện thoại"
              keyboardType="numeric"
              value={soDienThoai}
              onChangeText={setSoDienThoai}
            />
          </View>

          <View style={styles.field}>
            <ThemedText style={styles.label}>Mật khẩu</ThemedText>
            <TextInput
              style={styles.input}
              placeholder="Nhập mật khẩu"
              secureTextEntry
              value={matKhau}
              onChangeText={setMatKhau}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "white"
  },
    Title: {
    fontWeight: 'bold',
    fontSize: 30,
    padding : 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});