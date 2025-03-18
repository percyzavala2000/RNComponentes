import React, { useContext } from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

import {IconIcon} from '../../icons/IconIcon';
import {useNavigation} from '@react-navigation/native';
import { Separator } from './Separator';
import { ThemeContext } from '../../context/ThemeContext';

type MenuItemProps = {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
};

export const MenuItem = ({
  icon,
  name,
  component,
  isFirst = false,
  isLast = false,
}: MenuItemProps) => {
  const navigation = useNavigation<any>();
    const{colors}=useContext(ThemeContext)
  // render
  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}>
          <IconIcon
            name={icon}
            size={25}
            color={colors.primary}
            style={{marginRight: 10}}
          />
          <Text style={{color: colors.text}}>{name}</Text>
          <IconIcon
            name="chevron-forward-outline"
            size={25}
            color={colors.primary}
            style={{marginLeft: 'auto'}}
          />
        </View>
      </Pressable>

      {!isLast && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
