import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';

export const TextInputScreen = () => {
  const [form, setform] = useState({
    name: '',
    email: '',
    telefono: '',
  });
  // render
  return (
    <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding':'height'} >
      <ScrollView>
        <CustomView margin>
          <Title title="Text Inputs" safe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre Completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setform({...form, name: value})}
            />
          </Card>

          <View style={{height: 10}} />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Correo"
              keyboardType="email-address"
              autoCapitalize={'none'}
              autoCorrect={false}
              onChangeText={value => setform({...form, email: value})}
            />
          </Card>
          <View style={{height: 10}} />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={value => setform({...form, telefono: value})}
            />
          </Card>
          <Card>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
            <Text>{JSON.stringify(form, null, 4)}</Text>
          </Card>
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              keyboardType="phone-pad"
              onChangeText={value => setform({...form, telefono: value})}
            />
          </Card>
        </CustomView>
          <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
