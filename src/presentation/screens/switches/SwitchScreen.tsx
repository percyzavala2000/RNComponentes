import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CustomSwich } from '../../components/ui/CustomSwich';
import { Separator } from '../../components/ui/Separator';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: false,
    isHungry: false,
    isHappy: true
  });


// render
  return (
    <CustomView style={{marginTop:100,paddingHorizontal:10}} >
      <Card>
        <CustomSwich isOn={state.isActive} onChange={(value)=>setState({...state,isActive:value})} text='¿Esta Activo?'/>
          <Separator  />
        <CustomSwich isOn={state.isHungry} onChange={(value)=>setState({...state,isHungry:value})} text='¿Tienes Hambre?'/>
          <Separator  />
        <CustomSwich isOn={state.isHappy} onChange={(value)=>setState({...state,isHappy:value})} text='¿Es Feliz?'/>
     {/*  <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}

      {/* <Text>SwitchScreen</Text> */}
      {/* <Button text="Switch" onPress={()=>toggleSwitch()} /> */}
      </Card>
    </CustomView>
  )
}
