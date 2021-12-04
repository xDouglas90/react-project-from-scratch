import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repositories">
      <h1 className="repositories__title">Lista de Repositórios</h1>

      <ul className="repositories__list">
        {repositories.map((repository: Repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
