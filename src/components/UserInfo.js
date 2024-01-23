import React, { useState, useEffect } from 'react'

const UserInfo = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/octocat')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])
    return (
        <div className="container userinfo-container">
            <div className="col col-left">
                <img 
                    src={user.avatar_url} 
                    alt={`${user.name} avatar`}
                    width="117"
                    height="117" 
                />
            </div>
            <div className="col col-right">
                <div className="row username-row">
                    <h2 className="username">{user.name}</h2>
                    <p className="join-date">Joined {user.created_at}</p>
                </div>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="login">{`@${user.login}`}</a>
                <p className="bio">{user.bio}</p>
                <div className="stats-container">
                    <div className="stat">
                        <h3 className="stat-header">Repos</h3>
                        <p className="stat-number">{user.public_repos}</p>
                    </div>
                    <div className="stat">
                        <h3 className="stat-header">Followers</h3>
                        <p className="stat-number">{user.followers}</p>
                    </div>
                    <div className="stat">
                        <h3 className="stat-header">Following</h3>
                        <p className="stat-number">{user.following}</p>
                    </div>
                </div>
                <div className="icons-container">
                    <p className="location-icon">{user.location}</p>
                    <p className="twitter-icon">{user.twitter_username}</p>
                    <a href={user.blog} target="_blank" rel="noreferrer" className="blog-icon">{user.blog}</a>
                    <p className="company-icon">{user.company}</p>

                </div>
            </div>
        </div>
    )
}

export default UserInfo