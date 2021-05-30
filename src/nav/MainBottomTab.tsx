import React,{useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ROUTES from 'ultis/routes';
import SvgTabPlanInactive from '../svgs/MainBottomTab/SvgTapPlanInactive';
import SvgTabSearchInactive from '../svgs/MainBottomTab/SvgTabSearchInactive';
import SvgTabInactive from '../svgs/MainBottomTab/SvgTabInactive';
import SvgTabAddInactive from '../svgs/MainBottomTab/SvgTabAddInactive 2';
import SvgTabPeopleInactive from '../svgs/MainBottomTab/SvgTabPeopleInactive';
import SvgTabProfileInactive from '../svgs/MainBottomTab/SvgTabProfileInactive';
import SvgTabCalendarInavtive from '../svgs/MainBottomTab/SvgTabCalendarInactive'
import ForUStack from 'nav/ForUStack';
import StackPeople from 'nav/StackPeople';
import StackSearchEvents from 'nav/StackSearchEvents';
import StackProfile from 'nav/StackProfile';
import Calendar from 'screens/Calendar';
import News from 'screens/News';
import addEvent from 'screens/AddEvent/addEvent';

import { color } from 'react-native-reanimated';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';

const Tab = createBottomTabNavigator();

const MainBottomTab = () => {
  /*-----------------Start-Check-if-organization-or-not--------------------*/
    const [Admin,setAdmin] = useState(false);
  
    async function _getUserData(){
      const token = await AsyncStorage.getItem("token");
      const decodeData = jwtDecode(token);
      setAdmin(decodeData.default)
     
    }
    const a = Admin;
    //console.log(Admin)
    const Ustatus = ()=>{
  
      if(!a){
        
        let test1 =  <SvgTabInactive color={color} /> 
        let test2 = StackSearchEvents
        return [<SvgTabInactive color="red" />, test2];
      }else{
        //return  <SvgTabAddInactive color="black" /> 
        let test3 = <SvgTabAddInactive color="black" /> 
        let test4 = addEvent
        return [<SvgTabAddInactive color="black" />,test4];
    
    }
    }
    Ustatus();
    let values = Ustatus();
    let value1 =values[1];
    let value0 =values[0];
  
    _getUserData();
  /*-----------------End-Check----------------------*/
    return (
      
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: '#61c13c',
          inactiveTintColor: 'white',
          style:{backgroundColor:"#1d1d1b",borderTopColor:"#1d1d1b"}
        }}>
  
  
  
        <Tab.Screen
          name={ROUTES.TabPlan}
          component={ForUStack}
          options={{
            tabBarIcon: ({color}) => <SvgTabPlanInactive color={color} />,
           
          }}
        />
        
  
  <Tab.Screen
          name={ROUTES.TabPeople}
          component={StackPeople}
          options={{
            tabBarIcon: ({color}) => <SvgTabPeopleInactive color={color} />,
          }}
        />
  
  <Tab.Screen
          name={ROUTES.News}
          /*component={News}*/
          component={value1}
          options={{
            //tabBarIcon: ({color}) => Ustatus(),
            //tabBarIcon: ({color}) => (a ? <SvgTabAddInactive color={color} /> : <SvgTabInactive  color={color} /> )
  
            tabBarIcon: ({color}) => (a ? <SvgTabAddInactive color={color} /> :<SvgTabSearchInactive color={color} />)
            //tabBarIcon: ({color}) =>  <SvgTabInactive color={color}/>
          }}
        />
        <Tab.Screen
          name={ROUTES.TabSearchEvents}
          component={Calendar}
          options={{
            tabBarIcon: ({color}) => <SvgTabCalendarInavtive color={color} />,
          }}
        />
        <Tab.Screen
          name={ROUTES.TabProfile}
          component={StackProfile}
          options={{
            tabBarIcon: ({color}) => <SvgTabProfileInactive color={color} />,
          }}
        />
        
      </Tab.Navigator>
    );
  };
export default MainBottomTab;
