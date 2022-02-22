import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LeftMenu from '../components/navbar/leftMenu';
import ListUserCont from '../containers/user_level-containers/listUserCont';
/** */
import '../resources/css/App.css';

const UserLevelPage = ({ match }) => (
    <Switch>
        <Route path={`${match.path}`} render={({ match: { url } }) => (
            <main>
                {/* <LeftMenu url={[
                    { key: 1, path: `${url}`, title: 'Todos os Usuário' },
                    { key: 2, path: `${url}/add`, title: 'Adicionar Usuário' },
                    { key: 3, path: `${url}/edit`, title: 'Editar Usuário' },
                    { key: 4, path: `${url}/attributes`, title: 'Categorias' },
                ]} /> */}
                <div className="container">
                    <Route path={`${url}`} exact component={ListUserCont} />
                </div>
            </main>
        )} />
        <Redirect to={`${match.url}`} />
    </Switch>
)

export default UserLevelPage