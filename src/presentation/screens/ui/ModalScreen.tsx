import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native'
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false)
// render
  return (
    <CustomView margin>
      <Title title="Modal" safe  />
      <Button text="Open Modal"  onPress={()=>setIsVisible(true)} />
      <Modal visible={isVisible} animationType="slide">
        <Title title="Modal Content" safe />
      </Modal>
    </CustomView>
  )
}
