
import React, {useEffect, useState} from 'react'
import Post from './Post';

const Blog = () => {

    const users = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ];



    const [blog, setblog] = useState(users)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => 
            setblog(data)
            )
        
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
  
                {
                    blog.map((data) => <Post blog={data} />)
                }


            </div>
        </div>
    )
    
}

export default Blog;

