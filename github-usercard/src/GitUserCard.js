import React from 'react'
import styled from 'styled-components'

const GitUser = props => {

    // console.log(props)
    return (
        <div>
            <h1>{props.gitinfo.name}</h1>
            <img width='200' src={props.gitinfo.avatar_url} />
            <p>{props.gitinfo.login}</p>
            <p>{props.gitinfo.location}</p>
            <p>{props.gitinfo.bio}</p>
            <p>Followers: {props.gitinfo.followers}</p>

        </div>
    )
}

export default GitUser
