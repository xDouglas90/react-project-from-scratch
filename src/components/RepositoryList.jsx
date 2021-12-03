import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in ReactJS",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
  return (
    <section className="repositories">
      <h1 className="repositories__title">Lista de Repositórios</h1>

      <ul className="repositories__list">
        <RepositoryItem
          repository={repository}
          description={repository}
          link={repository}
        />
        <RepositoryItem
          repository={repository}
          description={repository}
          link={repository}
        />
        <RepositoryItem
          repository={repository}
          description={repository}
          link={repository}
        />
        <RepositoryItem
          repository={repository}
          description={repository}
          link={repository}
        />
      </ul>
    </section>
  );
}
