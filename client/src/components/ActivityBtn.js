import React, {useState} from 'react';
import './ActivityBtn.css'

const ActivityBtn = (props) =>  {

  const [num_votes, setNumVotes] = useState(props.num_votes)

  const updateCount = () => {
    const options = {
      method: 'PATCH',
      body: JSON.stringify({num_votes: num_votes + 1}),
      headers:{
        'Content-Type': 'application/json'
      }
    }
    const response = fetch(`/api/activities/${props.id}`, options)
    setNumVotes(num_votes + 1)

  }

  return (
    <button className='activityBtn' id={props.id} onClick={updateCount}>
      {props.activity} <br/> {'△ ' + num_votes + ' Upvotes' }
    </button>
  )

}

export default ActivityBtn;
