interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li className="repositories__list-item">
      <strong className="list-item__title">{props.repository.name}</strong>
      <p className="list-item__description">{props.repository.description}</p>

      <a
        className="list-item__link"
        href={props.repository.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar repositório
      </a>
    </li>
  );
}
