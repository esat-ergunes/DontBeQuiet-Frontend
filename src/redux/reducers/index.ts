import { combineReducers } from "redux";
import allOrganizationReducer from "./allorganization-reducer/allorganization-reducer";

import loginReducer from "./auth-reducers/login-reducer";
import eventReducer from "./event-reducer/event-reducer";
import followOrganizationReducer from "./followorganization-reducer/followorganization-reducer";
import interestReducer from "./interests-reducer/interests-reducer";
import likeReducer from "./like-reducer/like-reducer";
import tokenReducer from "./token-reducer/token-reducer";
// import addListingReducer from "./listing-reducers/addListing-reducer";
// import profileReducer from "./profile-reducers/profile-reducer";
// import addServiceReducer from "./service-reducers/addService-reducer";
// import accInfoReducer from "./settings-reducers/accountinfo-reducer";
// import contactInfoReducer from "./settings-reducers/contactInfo-reducer";

// import driverReducer from "./driver-reducers/driver-reducer";
// import driverCollectionReducer from "./driver-reducers/driverCollection-reducers";

let rootReducer;
export default rootReducer = combineReducers(
  Object.assign({
    login: loginReducer,
    interests: interestReducer,
    followorganization: followOrganizationReducer,
    allOrganization: allOrganizationReducer,
    event: eventReducer,
    token: tokenReducer,
    like: likeReducer,
    // contactInfo: contactInfoReducer,
    // profile: profileReducer,
  })
);
