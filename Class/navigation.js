import { StackActions, NavigationActions } from 'react-navigation';
const reset = (navigation, routeName) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  });
  navigation.dispatch(resetAction);
};

export default {
  reset
};


