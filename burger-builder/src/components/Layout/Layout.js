import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        {/*<div>ToolBar, SideDrawer, Backdrop</div>*/}

        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;