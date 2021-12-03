export function RepositoryItem({ repository }) {
  return (
    <li className="repositories__list-item">
      <strong className="list-item__title">{repository.name ?? "Default"}</strong>
      <p className="list-item__description">{repository.description ?? "Description here"}</p>

      <a className="list-item__link" href={repository.link ?? ""} target="_blank" rel="noopener noreferrer">
        Acessar repositório
      </a>
    </li>
  );
}
