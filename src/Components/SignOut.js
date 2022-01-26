import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { VscSignOut } from "react-icons/vsc"
import { GoSignOut } from "react-icons/go"
import { ReactComponent as Logout } from '../img/logout.svg';

export default function SignOut() {

	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/react-tasks-manager/");
			})
			.catch((err) => {
				alert(err.message);
			});
	};

    return (
        // <div>
            // <Button onClick={handleSignOut}><Logout /></Button>
            <Logout className="logout" onClick={handleSignOut} />
        // </div>
    );
}
