import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  //console.log(props)
  const {tweet} = props;
  //console.log(tweet.message);
  
  return (
    <div className="tweet">
      <ProfileImage profile={tweet.user.image}/>
      <div className="body">
        <div className="top">
          <User name={tweet.user.name} handle ={tweet.user.handle}/>
          <Timestamp stamp={tweet.timestamp}/>
        </div>

        <Message message={tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
