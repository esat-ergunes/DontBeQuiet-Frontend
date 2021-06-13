export const liveServer = "https://dont-be-quiet.herokuapp.com";
export const IMAGE_URL = "http://dont-be-quiet.herokuapp.com/";

const devTesting = false;
export const baseURL = devTesting === true ? localServer : liveServer;
export const endPoints = {
  register: "/activist/signup",
  getFollowedOrganizations: "/activist/followedOrg",
  getAllOrganizations: "/activist/organizations",
  followOrganization: "/activist/follow/",
  unfollowOrganization: "/activist/unfollow/",
  addEvent: "/eventsOrg/",
  getEventsByInterest: "/activist/myInterests",
  getEventsByFollowedOrg: "/activist/FollowedOrgEvents",
  likeEvent: "/activist/likeEvent/",
  unLikeEvent: "/activist/unlikeEvent/",
  participateEvent: "/activist/participate/",
  unParticipateEvent: "/activist/unparticipate/",
  getAllLikedEvents: "/activist/likedEvents",
  getAllParticipatedEvents: "/activist/participated",
  getAllEventsBySpecificOrgs: "/events/organization/",
};
