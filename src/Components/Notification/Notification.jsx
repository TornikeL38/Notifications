import "./style.css"
import successIcon from '../../images/success.png'
import errorIcon from '../../images/error.png'
import warningIcon from '../../images/warning.png'
import infoIcon from '../../images/info.png'


const notificationData = {
    success : {
        class : 'n-success',
        image : successIcon,
        text : 'Success',
    },
    error  : {
        class : 'n-error',
        image : errorIcon,
        text : 'Error',
    },
    warning : {
        class : 'n-warning',
        image : warningIcon,
        text : 'Warning',
    },
    info :  {
        class : 'n-info',
        image : infoIcon,
        text : 'Info',
    }
}


export default function Notification(props) {
    const item = notificationData[props.type];
    return(
        <div className={`notification ${item.class}`}>
            <div className="lines"></div>
            <div className="notification-icon-wrapper">
                <img src={item.image} alt="icon" />
            </div>
            <div className="notification-text-wrapper">
                <h3>{item.text}</h3>
                <p>Order Placed Successfully. You can check order delivery status.</p>
            </div>
        </div>
    )
}