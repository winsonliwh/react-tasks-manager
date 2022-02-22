import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logout } from '../../img/logout.svg';

export default function SignOut() {

	const navigate = useNavigate();

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/home");
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return (
		<Logout className="logoutBtn" onClick={handleSignOut} />
	);
}
