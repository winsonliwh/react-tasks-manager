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
	const [registerInfo, setRegisterInfo] = useState({
		email: "",
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
	}, [navigate]);

	const handleSignIn = e => {
		e.preventDefault()
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate("/react-tasks-manager/home");
			})
			.catch((err) => alert(err.message));
	};

	const handleRegister = e => {
		e.preventDefault()
		if (registerInfo.password !== registerInfo.confirmPassword) {
			alert("Please confirm that password are the same!");
			return;
		}
		createUserWithEmailAndPassword(
			auth,
			registerInfo.email,
			registerInfo.password
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
					<Form onSubmit={handleRegister}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="example@example.com"
								value={registerInfo.email}
								onChange={(e) =>
									setRegisterInfo({
										...registerInfo,
										email: e.target.value
									})
								}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								value={registerInfo.password}
								onChange={(e) =>
									setRegisterInfo({
										...registerInfo,
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
								value={registerInfo.confirmPassword}
								onChange={(e) =>
									setRegisterInfo({
										...registerInfo,
										confirmPassword: e.target.value
									})
								}
							/>
						</Form.Group>

						<div className="welcomeBtn">
							<Button variant="primary" type="submit">
								Register
							</Button>

							<Button className="welcomeRightBtn" onClick={() => setIsRegistering(false)}>
								Go back
							</Button>
						</div>
					</Form>
				) : (
					<Form onSubmit={handleSignIn}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" value={email} onChange={handleEmailChange} placeholder="example@example.com" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
						</Form.Group>

						<div className="welcomeBtn">
							<Button variant="primary" type="submit">
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
