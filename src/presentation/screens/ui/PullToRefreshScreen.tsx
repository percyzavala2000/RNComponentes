import React, {useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, globalStyles} from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {top} = useSafeAreaInsets();

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
        />
      } style={[globalStyles.mainContainer,globalStyles.globalMargin]}>
      
        <Title title="Pull to refresh" safe />
     
    </ScrollView>
  );
};
