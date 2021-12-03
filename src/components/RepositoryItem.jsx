export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? "Default"}</strong>
      <p>{repository.description ?? "Description here"}</p>

      <a href={repository.link ?? ""} target="_blank" rel="noopener noreferrer">
        Acessar repositório
      </a>
    </li>
  );
}
