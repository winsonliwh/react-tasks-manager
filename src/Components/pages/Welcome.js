import React, { useState, useEffect } from "react";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import TopBar from "../TopBar";

export default function Welcome() {

	const [email, setEmail] = useState("");
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const [password, setPassword] = useState("");
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const [isRegistering, setIsRegistering] = useState(false);
	const [registerInformation, setRegisterInformation] = useState({
		email: "",
		confirmEmail: "",
		password: "",
		confirmPassword: ""
	});

	const navigate = useNavigate();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				navigate("/react-tasks-manager/home");
			}
		});
	}, []);


	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate("/react-tasks-manager/home");
			})
			.catch((err) => alert(err.message));
	};

	const handleRegister = () => {
		if (registerInformation.email !== registerInformation.confirmEmail) {
			alert("Please confirm that email are the same");
			return;
		} else if (
			registerInformation.password !== registerInformation.confirmPassword
		) {
			alert("Please confirm that password are the same");
			return;
		}
		createUserWithEmailAndPassword(
			auth,
			registerInformation.email,
			registerInformation.password
		)
			.then(() => {
				navigate("/react-tasks-manager/home");
			})
			.catch((err) => alert(err.message));
	};

	return (
		<div>
			<TopBar />
			<div>
				{isRegistering ? (
					<>
						<input
							type="email"
							placeholder="Email"
							value={registerInformation.email}
							onChange={(e) =>
								setRegisterInformation({
									...registerInformation,
									email: e.target.value
								})
							}
						/>
						<input
							type="email"
							placeholder="Confirm Email"
							value={registerInformation.confirmEmail}
							onChange={(e) =>
								setRegisterInformation({
									...registerInformation,
									confirmEmail: e.target.value
								})
							}
						/>
						<input
							type="password"
							placeholder="Password"
							value={registerInformation.password}
							onChange={(e) =>
								setRegisterInformation({
									...registerInformation,
									password: e.target.value
								})
							}
						/>
						<input
							type="password"
							placeholder="Confirm Password"
							value={registerInformation.confirmPassword}
							onChange={(e) =>
								setRegisterInformation({
									...registerInformation,
									confirmPassword: e.target.value
								})
							}
						/>
						<button className="sign-in-register-button" onClick={handleRegister}>Register</button>
						<button className="create-account-button" onClick={() => setIsRegistering(false)}>Go back</button>
					</>
				) : (
					<>
						<input type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
						<input
							type="password"
							onChange={handlePasswordChange}
							value={password}
							placeholder="Password"
						/>
						<button className="sign-in-register-button" onClick={handleSignIn}>
							Sign In
						</button>
						<button
							className="create-account-button"
							onClick={() => setIsRegistering(true)}
						>
							Create an account
						</button>
					</>
				)}
			</div>
		</div>
	);
}
