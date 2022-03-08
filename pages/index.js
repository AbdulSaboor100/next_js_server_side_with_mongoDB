import AllMeetUps from "../Components/AllMeetUps/AllMeetUps";
import Layput from "../Components/Layout/Layput";

function home() {
  let allMeetUpsArr = [
    {
      img: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Go-for-a-nice-romantic-walk-to-the-Buddha-Garden-.jpg",
      name: "galantic place",
      address: "some where 143 city 8834",
      description: "this is first meetup",
    },
    {
      img: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Go-for-a-nice-romantic-walk-to-the-Buddha-Garden-.jpg",
      name: "argentio place",
      address: "some where 52 city 039821",
      description: "this is second meetup",
    },
    {
      img: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Go-for-a-nice-romantic-walk-to-the-Buddha-Garden-.jpg",
      name: "forgland place",
      address: "some where 24 city 3543",
      description: "this is third meetup",
    },
    {
      img: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Go-for-a-nice-romantic-walk-to-the-Buddha-Garden-.jpg",
      name: "bicanto place",
      address: "some where 334 city 1214",
      description: "this is fifth meetup",
    },
  ];
  return (
    <div>
        <AllMeetUps allMeetUpsArr={allMeetUpsArr} />
    </div>
  );
}

export default home;