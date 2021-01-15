import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>ToolBar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;