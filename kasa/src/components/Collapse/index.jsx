import Chevron from '../../assets/chevron.svg'
import Chevron_down from '../../assets/chevron-down.svg'

export default function Collapse(props) {

    const openClose = props.state

    const menuOpenClose = props.function

    const title = props.title

    const classname = props.class

    return (
        <div className={classname}>
            <div className={classname + '_top'}>
                <p>{title}</p>
                {openClose?<img className={classname + '_top_chevron'} onClick={menuOpenClose} src={Chevron} alt="" />:<img className={classname + '_top_chevron'} onClick={() => menuOpenClose(openClose, title)} src={Chevron_down} alt="" />}
            </div>
            {openClose?<div className={classname +'_text'}>
                {props.children}
            </div>:null}
        </div>
    )
}