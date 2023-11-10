import React from 'react'

const UserPortfolio = () => {
    const fullName = "Winnie Fredrick Gitau"
    const education = "Moringa School"
    const professionalBackground = "Frontend Developer"
    const skills = ["HTML", "CSS", "JavaScript", "React JS"]


  return (
    <div className='user-portfolio'>
        <h1>{fullName}</h1>
        <h2>Education</h2>
        <p>{education}</p>

        <h2>Professional Background</h2>
        <p>{professionalBackground}</p>

        <h2>Skills</h2>
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default UserPortfolio
