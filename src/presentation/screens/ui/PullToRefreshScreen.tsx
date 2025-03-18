import React, {useContext, useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { globalStyles} from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();
    const{colors}=useContext(ThemeContext)
  

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };
  // render
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={[colors.primary, 'red', 'orange', 'green']}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary}
        />
      } style={[globalStyles.mainContainer,globalStyles.globalMargin]}>
      
        <Title title="Pull to refresh" safe />
     
    </ScrollView>
  );
};
