import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList172151Navigator from '../features/ArticleList172151/navigator';
import ArticleList172150Navigator from '../features/ArticleList172150/navigator';
import ArticleList172149Navigator from '../features/ArticleList172149/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList172151: { screen: ArticleList172151Navigator },
ArticleList172150: { screen: ArticleList172150Navigator },
ArticleList172149: { screen: ArticleList172149Navigator },

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
