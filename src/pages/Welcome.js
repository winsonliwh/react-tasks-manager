import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { Button, Box, FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Welcome() {

	const [isRegistering, setIsRegistering] = useState(false);

	const [signInValues, setSignInValues] = useState({
		email: "",
		password: "",
	});

	const handleSignInValues = e => {
		const { name, value } = e.target;
		setSignInValues(prevInput => {
			return {
				...prevInput,
				[name]: value
			}
		});
	};

	const [registerValues, setRegisterValues] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleRegisterValues = e => {
		const { name, value } = e.target;
		setRegisterValues(prevInput => {
			return {
				...prevInput,
				[name]: value
			}
		});
	};

	const [showPassword, setShowPassword] = useState(false)
	const handleShowPassword = () => {
		setShowPassword(!showPassword)
	};

	const navigate = useNavigate();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				navigate("/home");
			}
		});
	}, [navigate]);

	const handleSignIn = e => {
		e.preventDefault()
		signInWithEmailAndPassword(auth, signInValues.email, signInValues.password)
			.then(() => {
				navigate("/home");
			})
			.catch(() => alert("Invalid email or password!"));
	};

	const handleRegister = e => {
		e.preventDefault()
		if (registerValues.password !== registerValues.confirmPassword) {
			alert("Please confirm that password are the same!");
			return;
		}
		createUserWithEmailAndPassword(
			auth,
			registerValues.email,
			registerValues.password
		)
			.then(() => {
				navigate("/home");
			})
			.catch((err) => alert(err.message));
	};

	return (
		<div className="welcomePage">
			<Container className="welcomeForm">
				<h1 style={{ textAlign: "center" }}>LOGIN</h1>
				{isRegistering ? (
					<Box
						component="form"
						// sx={{'& > :not(style)': {m: 3, width: '25ch',}}}
						sx={{ m: 3, width: '25ch', }}
						noValidate
						autoComplete="off"
						onSubmit={handleRegister}
						className="welcomeInput"
					>
						<FormControl fullWidth sx={{ m: 1 }} variant="standard">
							<InputLabel>Email</InputLabel>
							<Input name="email" value={registerValues.email} onChange={handleRegisterValues} />
						</FormControl>

						<FormControl fullWidth sx={{ m: 1 }} variant="standard">
							<InputLabel>Password</InputLabel>
							<Input
								name="password"
								type={showPassword ? 'text' : 'password'}
								value={registerValues.password}
								onChange={handleRegisterValues}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleShowPassword}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>

						<FormControl fullWidth sx={{ m: 1 }} variant="standard">
							<InputLabel>Confirm Password</InputLabel>
							<Input
								name="confirmPassword"
								type={showPassword ? 'text' : 'password'}
								value={registerValues.confirmPassword}
								onChange={handleRegisterValues}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleShowPassword}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<div className="welcomeBtn">
							<Button variant="contained" type="submit">
								Register
							</Button>

							<Button className="welcomeRightBtn" onClick={() => setIsRegistering(false)}>
								Go back
							</Button>
						</div>
					</Box>
					// </Form>
				) : (
					<Box
						component="form"
						sx={{ width: '25ch', m: 3, }}
						noValidate
						autoComplete="off"
						onSubmit={handleSignIn}
						className="welcomeInput"
					>
						<FormControl fullWidth sx={{ m: 1 }} variant="standard">
							<InputLabel>Email</InputLabel>
							<Input name="email" value={signInValues.email} onChange={handleSignInValues} />
						</FormControl>

						<FormControl fullWidth sx={{ m: 1 }} variant="standard">
							<InputLabel>Password</InputLabel>
							<Input
								name="password"
								type={showPassword ? 'text' : 'password'}
								value={signInValues.password}
								onChange={handleSignInValues}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleShowPassword}
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>

						<div className="welcomeBtn">
							<Button variant="contained" type="submit">
								Sign In
							</Button>

							<Button onClick={() => setIsRegistering(true)}>
								Create an account
							</Button>
						</div>

						<div style={{ fontSize: 20, marginTop: 24 }}>
							<h4 style={{ textAlign: "center" }}>Or login the demo account.</h4>
							<table style={{ margin: "auto" }}>
								<tr>
									<td style={{ textAlign: "right" }}>Email:&nbsp;</td>
									<td>demo@gmail.com</td>
								</tr>
								<tr>
									<td>Password:&nbsp;</td>
									<td>demo123</td>
								</tr>
							</table>
						</div>
					</Box>
				)}
			</Container>
		</div>
	);
}
