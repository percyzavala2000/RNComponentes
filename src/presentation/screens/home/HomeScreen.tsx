import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {IconIcon} from '../../icons/IconIcon';
import {globalStyles, colors} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {MenuItem} from '../../components/ui/MenuItem';

const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

const animationMenuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

export const HomeScreen = () => {
  // render
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title title="Opciones de Menú" safe />
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}
          <View style={{height: 30}} />
          <Title title="Componentes UI" />
          {uiMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
            />
          ))}
          <View style={{height: 30}} />
          <Title title="Animaciones" />
          {animationMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isFirst={index === 0}
              isLast={index === animationMenuItems.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
