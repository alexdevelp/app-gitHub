import React from 'react';
import * as C from './styles';
import API from '../../services/api';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { GithubRepository } from '../../interface/githubRepository';

const Dashboard: React.FC = () => {
  const formElement = React.useRef<HTMLFormElement | null>(null);

  const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
    const storegeRepos = localStorage.getItem('@app-one:repositories');
    if (storegeRepos) {
      return JSON.parse(storegeRepos);
    }
    return [];
  });
  const [newRepo, setNewRepo] = React.useState('');
  const [inputError, setInputError] = React.useState('');

  const handleIputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setNewRepo(event.target.value);
  };

  const handleAddRepo = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!newRepo) {
      setTimeout(() => {
        setInputError('');
      }, 3000);
      return setInputError('Informe o repositório: user_name/repository_name');
    }

    try {
      const response = await API.get<GithubRepository>(`/repos/${newRepo}`);
      const repository = response.data;
      const verify = repos.find(
        item => item.full_name === repository.full_name,
      );
      if (verify) {
        setTimeout(() => {
          setInputError('');
          formElement.current?.reset();
        }, 3000);
        return setInputError('Repositório já encontrado anteriormente');
      }
      setRepos(state => [...state, repository]);
      setNewRepo('');
      formElement.current?.reset();
    } catch {
      setTimeout(() => {
        setInputError('');
        formElement.current?.reset();
      }, 3000);
      return setInputError('Repositório não encontrado');
    }
  };

  React.useEffect(() => {
    localStorage.setItem('@app-one:repositories', JSON.stringify(repos));
  }, [repos]);

  return (
    <C.Container>
      <img src={Logo} alt="Gitcollection" />
      <C.Title>Catálogo de repositórios do Github</C.Title>
      <C.Form
        onSubmit={handleAddRepo}
        hasError={Boolean(inputError)}
        ref={formElement}
      >
        <input
          placeholder="User_name/Repository_name"
          onChange={handleIputChange}
        />
        <button type="submit">Buscar</button>
      </C.Form>
      {inputError && <C.Error>{inputError}</C.Error>}
      <C.Repos>
        {repos.map(item => (
          <Link
            key={item.full_name}
            to={`/repositories`}
            state={item.full_name}
          >
            <img src={item.owner.avatar_url} alt={item.owner.login} />
            <div>
              <strong>{item.full_name}</strong>
              <p>{item.description}</p>
            </div>
            <FiChevronRight size={25} />
          </Link>
        ))}
      </C.Repos>
    </C.Container>
  );
};

export default Dashboard;
