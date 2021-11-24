import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const Post = (user) => {
    return (
        <Fragment>
            <div className="col-md-3 my-5"> 
                <div className="card shadow">
                    <div className="card-body">
                        <h5>User Id : {user.blog.userId}</h5>
                        <h5>Id : {user.blog.id} </h5>
                        <h5>Title : {user.blog.title} </h5>
                        <p>Body : {user.blog.body} </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Post;