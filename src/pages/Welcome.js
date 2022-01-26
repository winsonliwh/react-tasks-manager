import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import TopBar from "./components/TopBar";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase";

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
			<Container className="welcomeForm">
				{isRegistering ? (
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="example@example.com"
								value={registerInformation.email}
								onChange={(e) =>
									setRegisterInformation({
										...registerInformation,
										email: e.target.value
									})
								}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="confirmEmail">
							<Form.Label>Confirm Email address</Form.Label>
							<Form.Control
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
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
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
						</Form.Group>

						<Form.Group className="mb-3" controlId="confirmPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
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
						</Form.Group>

						<div className="welcomeBtn">
							<Button variant="primary" onClick={handleRegister}>
								Register
							</Button>

							<Button className="welcomeRightBtn" onClick={() => setIsRegistering(false)}>
								Go back
							</Button>
						</div>
					</Form>
				) : (
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="example@example.com" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
						</Form.Group>

						<div className="welcomeBtn">
							<Button variant="primary" onClick={handleSignIn}>
								Sign In
							</Button>

							<Button onClick={() => setIsRegistering(true)}>
								Create an account
							</Button>
						</div>
					</Form>
				)}
			</Container>
		</div>
	);
}
