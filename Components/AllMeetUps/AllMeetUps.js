import { useRouter } from "next/router";

const AllMeetUps = ({ allMeetUpsArr, showExtra = false }) => {
  let router = useRouter();
  function goToDetails(id) {
    router.push(`/fetchdetails/${id}`)
  }
  return (
    <div className="all_meetups">
      <h1>All Meetups</h1>
      <div className="meetup_container">
        {allMeetUpsArr.map((item, index) => (
          <div className="main_meetups" key={index} onClick={()=>goToDetails(item._id)}>
            <img src={item.img} />
            <div className="meetup_content">
              <h2>{item.name}</h2>
              {showExtra ? (
                <>
                  <p>{item.address}</p>
                  <p>{item.description}</p>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMeetUps;
