import React, { useState } from 'react';
import '../Profile.css'
import { FiEdit } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { edituser } from '../../../redux/Slices/userSlice';

function Editprofile({user, ping, setping}) {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 const [edited, setedited] = useState({name: user.name, email: user.email})
 
       // Convert the registration timestamp to a Date object
       const updateDate = new Date(user.updatedAt);

       // Format the date and time
       const formDate = updateDate.toLocaleDateString();
       const formTime = updateDate.toLocaleTimeString();

const [showupdate, setshowupdate] = useState(false)
const updateImg = () => {
  setshowupdate(!showupdate);
};
// upload img
const [selectedImage, setSelectedImage] = useState(null);
const [confirmImage, setConfirmImage] = useState(false);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    setSelectedImage(reader.result);
  };

  if (file) {
    reader.readAsDataURL(file);
    setConfirmImage(true);
  }
};

const handleConfirm = () => {
  // Add logic to save the image URL to the database
  // You can make an API call here or implement your own logic
  dispatch(edituser({id:user._id, selectedImage}));

  setConfirmImage(false);
  setshowupdate(!showupdate);
};

const handleCancel = () => {
  setSelectedImage(null);
  setConfirmImage(false);
};

  return (
    <div>
            <div className='profile_conatainer' style={{padding:'20px'}}>
    <div className="profile">
      <div className="info">
        <h2>Full Name:  </h2> 
        <input type="string" value={user.name}/> 
        <br/>
        <h2>Email: </h2> 
        <input type="string" value={user.email}/>
        <br/>
                {/* modal change */}
                <>
                edit <FiEdit onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type="string" placeholder={user.name} 
                      onChange={(e) => setedited({...edited, name: e.target.value} )}/> 
                <input type="string" placeholder={user.email} 
                      onChange={(e) => setedited({...edited, email: e.target.value} )}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(edituser({id:user._id, edited}));
              setping(!ping);
              handleClose();}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

      </div>
      <div className="avatar">
        <div><img src={user.avatar} alt="User Avatar" /></div>
        edit <FiEdit onClick={updateImg}/>
        <div>
      {showupdate && <div>  

        <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && !confirmImage && (
        <div>
          <h2>Preview:</h2>
          <img src={selectedImage} alt="Uploaded" />
        </div>
      )}
      {confirmImage && (
        <div>
          <h2>Confirm Image:</h2>
          <img src={selectedImage} alt="Uploaded" />
        </div>
      )}
      <div>
      <button 
      onClick={()=>{
      handleConfirm();}}
      >Confirm</button>
      <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>

    </div>}
    </div>
      </div>
   
    </div>
    <div>
    <h4>Update Date: {formDate}</h4>
    <h4>Update Time: {formTime}</h4>
    </div>
    </div>
    </div>
  )
}

export default Editprofile