import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserImage from '../assets/219983.png'

export const UserInfo = () => {
    return(
        <div className="user-info">
            <div className="bubble"><FontAwesomeIcon icon="fa-solid fa-bell" /></div>
            <div className="bubble"><img src={UserImage} alt="user" /></div>
        </div>
    )
};
