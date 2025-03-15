import React, {useState} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {colors} from '../../../config/theme/theme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
  ]);
  const loadMore = () => {
    const newArray = Array.from({length: 5}, (_, i) =>
      (numbers.length + i + 1).toString(),
    );
    setNumbers([...numbers, ...newArray]);
  };
  // render
  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item}
        renderItem={({item}) => <ListItem number={parseInt(item)} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};
type ListItemProps = {
  number: number;
};
export const ListItem = ({number}: ListItemProps) => {
  return (
    <Image
      source={{uri: `https://picsum.photos/id/${number}/200/300`}}
      style={{height: 400, width: '100%'}}
    />
  );
};
