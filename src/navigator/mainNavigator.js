import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings108603Navigator from '../features/Settings108603/navigator';
import Settings108595Navigator from '../features/Settings108595/navigator';
import UserProfile108593Navigator from '../features/UserProfile108593/navigator';
import UserProfile108562Navigator from '../features/UserProfile108562/navigator';
import Tutorial108561Navigator from '../features/Tutorial108561/navigator';
import NotificationList108533Navigator from '../features/NotificationList108533/navigator';
import Settings108532Navigator from '../features/Settings108532/navigator';
import Settings108524Navigator from '../features/Settings108524/navigator';
import UserProfile108522Navigator from '../features/UserProfile108522/navigator';
import BlankScreen0108500Navigator from '../features/BlankScreen0108500/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings108603: { screen: Settings108603Navigator },
Settings108595: { screen: Settings108595Navigator },
UserProfile108593: { screen: UserProfile108593Navigator },
UserProfile108562: { screen: UserProfile108562Navigator },
Tutorial108561: { screen: Tutorial108561Navigator },
NotificationList108533: { screen: NotificationList108533Navigator },
Settings108532: { screen: Settings108532Navigator },
Settings108524: { screen: Settings108524Navigator },
UserProfile108522: { screen: UserProfile108522Navigator },
BlankScreen0108500: { screen: BlankScreen0108500Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
