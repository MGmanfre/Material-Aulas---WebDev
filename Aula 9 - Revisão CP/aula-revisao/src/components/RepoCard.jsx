import { FaRegStar } from "react-icons/fa";

export default function RepoCard({name, html_url, description, language, stargazers_count }){
    return (
        <div className="rounded-xl border-white hover:scale-105">
            <a href={html_url}>
                <h1>{name}</h1>
                <h2><FaRegStar />{stargazers_count}</h2>
                <h2>{language}</h2>
                <p>{description}</p>
            </a>
        </div>
    )
}