export function RepositoryItem({ repository }) {
  return (
    <li className="repositories__list-item">
      <strong className="list-item__title">{repository.name}</strong>
      <p className="list-item__description">{repository.description}</p>

      <a
        className="list-item__link"
        href={repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar repositório
      </a>
    </li>
  );
}
