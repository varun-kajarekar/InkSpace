import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faRotateLeft, faRotateRight, faFileArrowDown, faEraser } from '@fortawesome/free-solid-svg-icons';


const Menu = () => {
    return (
        <div className="absolute left-1/2 top-10 translate-x-[-50%] flex justify-center items-center h-10 w-auto  bg-white rounded-md">
            <div className="mx-3 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-300 cursor-pointer">
                <FontAwesomeIcon icon={faPencil} size="lg"/>
            </div>
            <div className="mx-3 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-300 cursor-pointer">
                <FontAwesomeIcon icon={faEraser} size="lg"/>
            </div>
            <div className="mx-3 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-300 cursor-pointer">
                <FontAwesomeIcon icon={faRotateLeft} size="lg"/>
            </div>
            <div className="mx-3 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-300 cursor-pointer">
                <FontAwesomeIcon icon={faRotateRight} size="lg"/>
            </div>
            <div className="mx-3 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-300 cursor-pointer">
                <FontAwesomeIcon icon={faFileArrowDown}  size="lg"/>
            </div>
        </div>
    );
}

export default Menu;