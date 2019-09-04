import React from 'react'
import styled from 'styled-components'

const FollowersCards = props => {

    console.log(props.followersinfo)
    return (
        <div>

            {props.followersinfo.map(follower => {
                return (
                    <div>
                        <h1>Followers</h1>
                        <img width='200' src={follower.avatar_url} />
                        <p>{follower.login}</p>
                
                    </div>
                )

            })}
        </div>
    )
}

export default FollowersCards