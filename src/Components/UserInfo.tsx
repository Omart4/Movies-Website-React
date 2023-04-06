import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserImage from '../assets/219983.png'

export const UserInfo = ():JSX.Element => {
    return(
        <div className="user-info">
            <div className="bubble"><FontAwesomeIcon icon={["fas","bell"]} /></div>
            <div className="bubble"><img src={UserImage} alt="user" /></div>
        </div>
    )
};
