import ModelYearList from "../HomeScreen/HomeScreen";
import MakeList from "../NewUserScene/NewUserScene";

const Routes = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
    headerMode: 'screen',
  },
  NewUser: {
    screen: NewUserScreen,
    navigationOptions: {
      header: null,
    },
    headerMode: 'screen',
  },
};

export default Routes;