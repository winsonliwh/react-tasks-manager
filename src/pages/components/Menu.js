import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Offcanvas } from 'react-bootstrap';
import { ReactComponent as Menuimg } from '../../img/menu.svg';

// const options = [
// {
//   name: 'Enable backdrop (default)',
//   scroll: false,
//   backdrop: true,
// },
// {
//   name: 'Disable backdrop',
//   scroll: false,
//   backdrop: false,
// },
// {
//   name: 'Enable body scrolling',
//   scroll: true,
//   backdrop: false,
// },
// {
//   name: 'Enable both scrolling & backdrop',
//   scroll: true,
//   backdrop: true,
// },
// ];

export default function Menu() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(prevShow => !prevShow);

	return (
		<>
			<Button className="menuBtn" onClick={handleShow}>
				<Menuimg className="menuImg"/>
			</Button>
			<Offcanvas show={show} onHide={handleClose} scroll={true} onClick={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title><p>Task Manager</p></Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div><Link className="menuLinkText" to="/home"><p>HOME</p></Link></div>
					<div><Link className="menuLinkText" to="/calendar"><p>Calendar</p></Link></div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}