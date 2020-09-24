import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings108524Navigator from '../features/Settings108524/navigator';
import UserProfile108522Navigator from '../features/UserProfile108522/navigator';
import BlankScreen0108500Navigator from '../features/BlankScreen0108500/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
