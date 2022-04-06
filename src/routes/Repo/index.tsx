import React, { useState } from 'react';
import * as C from './styles';
import API from '../../services/api';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useLocation } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GithubRepositoryUnit } from '../../interface/githubRepositoryUnit';
import { GithubIssues } from '../../interface/githubIssues';

export const Repo: React.FC = () => {
  const { state } = useLocation();
  const [repository, setRepository] = useState<GithubRepositoryUnit | null>(
    null,
  );

  const [issues, setIssues] = useState<GithubIssues[]>([]);

  React.useEffect(() => {
    API.get(`repos/${state}`).then(res => setRepository(res.data));
    API.get(`repos/${state}/issues`).then(res => setIssues(res.data));
  }, [state]);
  return (
    <>
      <C.Header>
        <img src={Logo} alt="Gitcollection" />
        <Link to="/">
          <FiChevronLeft size={25} />
          Voltar
        </Link>
      </C.Header>
      {repository && (
        <C.RepoInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </C.RepoInfo>
      )}
      <C.Issues>
        {issues.map(item => (
          <a
            href={item.html_url}
            key={item.id}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <strong>{item.title}</strong>
              <p>{item.user.login}</p>
            </div>
            <FiChevronRight />
          </a>
        ))}
      </C.Issues>
    </>
  );
};
