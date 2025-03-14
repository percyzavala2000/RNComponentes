import React from 'react'
import { View, Text } from 'react-native'
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';

export const TextInputScreen = () => {
// render
  return (
    <CustomView style={globalStyles.globalMargin} >
      <Title title='Text Inputs' safe />
    </CustomView>
  )
}
