import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "http://github.com/unform/unform",
};

interface Repo {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repo, setRepo] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/acf77/repos")
      .then((response) => response.json())
      .then((data) => setRepo(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repo.map((repo) => {
          return <RepositoryItem key={repo.name} repository={repo} />;
        })}
      </ul>
    </section>
  );
}
