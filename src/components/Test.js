import React, {useEffect,useState} from 'react'

function Test() {
    const [posts,setPosts]=useState([])
useEffect(()=>{
    const url='https://jsonplaceholder.typicode.com/posts';
    fetch(url).then(resp=>resp.json()).then(resp=>setPosts(resp))
},[])    
    return (
        <div className="Test">
            <h1 align="center">React-App</h1>
            {
                posts.map(post=><div><p>{`${post.id}.${post.title}`}</p></div>)
            }
        </div>
    )
}

export default Test
