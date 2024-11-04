import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
     const {id, title}=post;

     const navigate=useNavigate();
     

     const userStyle={
          border: '2px solid yellow',
          padding: '5px',
          borderRadius: '20px'
     }
     const handleShowDetail=()=>{
          navigate(`/post/${id}`);
     }

     return (
          <div style={userStyle} >
               <h4>Post of ID: {id}</h4>
               <h5>
                  Title: {title};
               </h5>
               <Link to={`/post/${id}`}>Post Detail</Link>
               <Link to={`/post/${id}`}><button>Show Details</button></Link>
               <button onClick={handleShowDetail}>Click to see details</button>
          </div>
     );
};

export default Post;