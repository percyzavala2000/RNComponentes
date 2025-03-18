import React, { useContext } from 'react'
import { View, Text, Alert } from 'react-native'
import { Button } from '../../components/ui/Button';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { showPrompt } from '../../../config/adapters/prompt.adapter';
import { ThemeContext } from '../../context/ThemeContext';

export const AlertScreen = () => {
    const{isDark}=useContext(ThemeContext)
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],{cancelable:true,userInterfaceStyle:isDark?'dark':'light'});

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],{cancelable:false,userInterfaceStyle:isDark?'dark':'light'});

    const onShowPrompt = () => {
      showPrompt({
        title:'ingresaR password',
        subTitle:'Enter your password to claim your $1.5B in lottery winnings',
        buttons:[
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        promptType:'secure-text',
        defaultValue:'test',
        placeholder:'placeholder',
      
         
      })
     /*  prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        {  
            type: 'secure-text',
            cancelable: false,
            defaultValue: 'test',
            placeholder: 'placeholder',
   
        },
        
      ); */
    }

    
// render
  return (
    <CustomView style={globalStyles.globalMargin} >
      <Title title='Alertas' safe />
      <Button text="Alerta-2 Botones" onPress={createTwoButtonAlert} />
      <Button text="Alerta-3 Botones" onPress={createThreeButtonAlert} />
     <Button text="Prompt-imput " onPress={onShowPrompt} />


    </CustomView>
  )
}
