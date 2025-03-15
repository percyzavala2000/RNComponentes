import React, {useState} from 'react';
import {View, Text, Modal, ViewBase} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  // render
  return (
    <CustomView margin>
      <Title title="Modal" safe />
      <Button text="Open Modal" onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title title="Modal Content" />
            <Button text="Close" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </CustomView>
  );
};
