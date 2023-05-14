
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Link, useParams, useNavigate } from "react-router-dom"
// import Reviews from "./Reviews"
// const API = process.env.REACT_APP_API_URL

// function ModalDelete() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [game, setGame] = useState()
//   const {id} = useParams()
//   let navigate = useNavigate()

//   useEffect(() => {
//     axios
//     .get(`${API}/games/${id}`)
//     .then((response) => {
//         // console.log(response.data)
//         setGame(response.data)
//     }).catch((e) => {
//         console.warn("catch", e)
//     })
// }, [id,])

//   const deleteGame = () => {
//     axios.delete(`${API}/games/${id}`)
//     .then(() => {
//         navigate(`/games`)
//     },
//      (error) => console.error(error)
//     )
//     .catch((c) => console.warn("catch", c))
//   }

//   const handleDelete = () => {
//     deleteGame()
// }

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch delete modal
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Delete function</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//          Are you sure you want to delete
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleDelete}>Delete</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// export default ModalDelete

