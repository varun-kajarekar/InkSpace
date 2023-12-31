import { useDispatch }  from 'react-redux';
import { menuItemClick ,actionItemClick } from '../../slice/menuSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faRotateLeft, faRotateRight, faFileArrowDown, faEraser, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'


const Menu = () => {

    
    const dispatch = useDispatch()

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)


    const handleMenuClick = (itemName)=>{
        dispatch(menuItemClick(itemName))
    }
    const handleActionClick = (itemName)=>{
        dispatch(actionItemClick(itemName))
    }
    
    return (  
        <div className="absolute left-1/2 bottom-3 translate-x-[-50%] flex justify-center items-center h-12 w-auto  bg-white rounded-md">
            <div className={`mx-3 px-2 py-1 rounded-md hover:bg-slate-400/90 cursor-pointer ${activeMenuItem ==='pencil'?'bg-slate-400/90':'bg-slate-100'}`}  onClick={()=>handleMenuClick('pencil')} >
                <FontAwesomeIcon icon={faPencil} size="lg" />
            </div>
            <div className={`mx-3 px-2 py-1 rounded-md hover:bg-slate-400/90 cursor-pointer ${activeMenuItem ==='eraser'?'bg-slate-400/90':'bg-slate-100'}`} onClick={()=>handleMenuClick('eraser')}>
                <FontAwesomeIcon icon={faEraser} size="lg" />
            </div>
            <div className="mx-3 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-400/90 cursor-pointer" onClick={()=>handleActionClick('download')}>
                <FontAwesomeIcon icon={faFileArrowDown} size="lg" />
            </div>
            <div className="mx-3 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-400/90 cursor-pointer" onClick={()=>handleActionClick('undo')}>
                <FontAwesomeIcon icon={faRotateLeft} size="lg" />
            </div>
            <div className="mx-3 bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-400/90 cursor-pointer" onClick={()=>handleActionClick('redo')}>
                <FontAwesomeIcon icon={faRotateRight} size="lg" />
            </div>
            {/* <div className={`mx-3 px-2 py-1 rounded-md hover:bg-slate-400/90 cursor-pointer ${activeMenuItem ==='hide'?'bg-slate-400/90':'bg-slate-100'}`} onClick={()=>handleMenuClick('hide')}>
                <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
            </div> */}
        </div>
    );
}

export default Menu;