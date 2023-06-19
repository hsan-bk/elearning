import React, { useState } from 'react';
import '../Profile.css';
import { FiEdit } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { edituser } from '../../../redux/Slices/userSlice';

function Editprofile({ user, ping, setping }) {
  const dispatch = useDispatch();
  
  const [showupdate, setShowUpdate] = useState(false);
  const [edited, setedited] = useState({ name: user.name, email: user.email, avatar: '' });


  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setedited({ ...edited, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const updateAvatar = () => {
    setShowUpdate(!showupdate);
  };

  const handleSaveChanges = () => {
    dispatch(edituser({ id: user._id, edited }));
    setping(!ping);
    
  };

  // Convert the registration timestamp to a Date object
  const updateDate = new Date(user.updatedAt);

  // Format the date and time
  const formDate = updateDate.toLocaleDateString();
  const formTime = updateDate.toLocaleTimeString();

  return (
    <div>
      <div className='profile_conatainer' style={{ padding: '20px' }}>
        <div className='profile'>
          <div className='info'>
            <h2>Full Name: </h2>
            <input type='string' value={edited.name} onChange={(e) => setedited({ ...edited, name: e.target.value })} />
            <br />
            <h2>Email: </h2>
            <input type='string' value={edited.email} onChange={(e) => setedited({ ...edited, email: e.target.value })} />
            <br />
            {/* modal change */}
            {/* <>
              edit Info <FiEdit onClick={handleShow} />

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input
                    type='string'
                    placeholder={user.name}
                    value={edited.name}
                    onChange={(e) => setedited({ ...edited, name: e.target.value })}
                    style={{ marginBottom: '10px' }}
                  />
                  <input
                    type='string'
                    placeholder={user.email}
                    value={edited.email}
                    onChange={(e) => setedited({ ...edited, email: e.target.value })}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='primary' onClick={handleSaveChanges}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </> */}
          </div>
          <div className='avatar'>
             <div>
              <img src={edited.avatar || user.avatar} alt='User Avatar' />
            </div>
            edit Avatar <FiEdit onClick={updateAvatar} />
            {showupdate && (
              <div>
                <input type='file' accept='image/*' onChange={handleAvatarChange} />
                
              </div>
            )}
          </div>
        </div>
        <div>
        <button onClick={handleSaveChanges}>Save Changes</button>
          <h4>Update Date: {formDate}</h4>
          <h4>Update Time: {formTime}</h4>
        </div>
      </div>
    </div>
  );
}

export default Editprofile;
