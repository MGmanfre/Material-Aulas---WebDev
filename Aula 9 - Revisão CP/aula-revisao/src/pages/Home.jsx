import { useEffect, useState } from "react";
import Section from "../components/Section";
import RepoCard from "../components/RepoCard";

export default function Home() {
  const [nodeRepos, setNodeRepos] = useState([])
  const [reactRepos, setReactRepos] = useState([])
  const [pythonRepos, setPythonRepos] = useState([])
  const API = import.meta.env.VITE_GITHUB_API

  useEffect(()=> {
    fetch(`${API}node&per_page=5`)
    .then(res => res.json())
    .then(data => setNodeRepos(data.items))
    fetch(`${API}react&per_page=5`)
    .then(res => res.json())
    .then(data => setReactRepos(data.items))
    fetch(`${API}python&per_page=5`)
    .then(res => res.json())
    .then(data => setPythonRepos(data.items))
  },[])

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
      <Section title="Node Repositórios">
        {
          nodeRepos.map(pegaItem => (
            <RepoCard key={pegaItem.id}
            {...pegaItem}/>
          ))
        }
      </Section>
      <Section title="React Repositórios">
        {
          reactRepos.map(pegaItem => (
            <RepoCard key={pegaItem.id}
            {...pegaItem}/>
          ))
        }
      </Section>
      <Section title="Python Repositórios">
        {
          pythonRepos.map(pegaItem => (
            <RepoCard key={pegaItem.id}
            {...pegaItem}/>
          ))
        }
      </Section>
    </div>
  );
}
