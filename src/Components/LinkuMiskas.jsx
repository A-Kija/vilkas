import { Link, Switch, Route } from 'react-router-dom';

function LinkuMiskas() {

    return(
        <div className="forest">
        <nav>
        <Link to={'home'}><h3>Linku Miskas</h3></Link>
        <Link to={'road'}><h3>Misko plentas</h3></Link>
        <Link to={'street'}><h3>Misko gatve</h3></Link>
        </nav>
        <Switch>

            <Route path={'/home'}>
                <h1>The Home</h1>
            </Route>
            <Route path={'/road'}>
                <h1>The Road</h1>
            </Route>
            <Route path={'/street'}>
                <h1>The Street</h1>
            </Route>
            <Route path={'/'}>
                <h1>The begining</h1>
            </Route>
        </Switch>

        </div>
    )
}

export default LinkuMiskas;