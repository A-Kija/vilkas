import { Link, Switch, Route } from 'react-router-dom';
import Street from './Street';

function LinkuMiskas() {

    return(
        <div className="forest">
        <nav>
        <Link to={'home'}><h3>Linku Miskas</h3></Link>
        <Link to={'road'}><h3>Misko plentas</h3></Link>
        <div>
        <Link to={'1'}><h3>Misko gatve 1</h3></Link>
        <Link to={'2'}><h3>Misko gatve 2</h3></Link>
        <Link to={'3'}><h3>Misko gatve 3</h3></Link>
        <Link to={'4'}><h3>Misko gatve 4</h3></Link>
        <Link to={'5'}><h3>Misko gatve 5</h3></Link>
        </div>
        </nav>
        <Switch>

            <Route path={'/home'}>
                <h1>The Home</h1>
            </Route>
            <Route path={'/road'}>
                <h1>The Road</h1>
            </Route>

            <Route path={'/:street'} children={<Street/>} />

            <Route path={'/'}>
                <h1>The begining</h1>
            </Route>
        </Switch>

        </div>
    )
}

export default LinkuMiskas;