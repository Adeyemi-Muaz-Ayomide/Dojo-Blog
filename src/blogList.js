const BlogList = ({blogs , handleDelete}) => {

    return (
        <div className="home">    
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}> Delete Blogs!!</button>
                </div>
        ))}
        </div>
    );
}
 
export default BlogList;