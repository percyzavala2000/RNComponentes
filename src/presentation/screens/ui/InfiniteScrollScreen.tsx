import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
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
    setTimeout(() => {
      console.log('loading');
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };
  // render
  return (
    <CustomView margin>
      <Title title="Infinite Scroll" safe />
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Text
            style={{
              height: 300,
              backgroundColor: colors.primary,
              color: 'white',
              fontSize: 50,
              textAlign: 'center',
            }}>
            {' '}
            {item}{' '}
          </Text>
        )}
      />
    </CustomView>
  );
};
