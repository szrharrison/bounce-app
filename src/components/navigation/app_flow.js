import { createMaterialTopTabNavigator } from "react-navigation";
import AddTask from "../screens/add_task";
import DoTask from "../screens/do_task";
import TasksList from "../screens/tasks_list";
import withAuth from "../hocs/with_auth";

const AppFlow = createMaterialTopTabNavigator({
  AddTask: withAuth(AddTask),
  TasksList: withAuth(TasksList),
  DoTask: {
    screen: withAuth(DoTask),
    path: "do/:taskId"
  }
}, {
  tabBarPosition: "top",
  order: ["AddTask", "DoTask", "TasksList"],
  lazy: true,
  swipeEnabled: false,
  animationEnabled: true,
  initialRouteName: "AddTask",
  backBehavior: "none",
});

export default AppFlow;