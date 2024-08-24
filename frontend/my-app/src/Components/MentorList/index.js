import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MentorList() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('/mentors/')
      .then(response => setMentors(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Available Mentors</h1>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id}>{mentor.name} - {mentor.areas_of_expertise}</li>
        ))}
      </ul>
    </div>
  );
}

export default MentorList;
