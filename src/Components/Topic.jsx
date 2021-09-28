import {
    useParams
} from "react-router-dom";
export default function Topic() {

    const { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }