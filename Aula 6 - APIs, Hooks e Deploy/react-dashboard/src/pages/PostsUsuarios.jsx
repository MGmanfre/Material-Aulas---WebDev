import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
export default function PostsUsuarios() {
    const params = useParams();
    const [posts, setPosts] = useState([]);
    
      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
          .then((res) => res.json())
          .then((data) => setPosts(data));
      }, []);

    return(
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Posts Usuário {params.id}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((getItem) => (
                    <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-bold mb-2">Post {getItem.id}</h2>
                        <p className="mb-2 font-bold text-gray-600">{getItem.title}</p>
                        <p className="text-gray-600">{getItem.body}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}