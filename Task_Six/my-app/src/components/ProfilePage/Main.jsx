import React from 'react'

const Main = () => {
  return (
    <div className="profile-settings-container">
      <div className="profile-card">
        {/* Profile Header */}
        <h3 className="profile-card-title">Your Profile</h3>

        {/* Profile Image */}
        <div className="profile-image">
          <i class="ri-account-circle-2-line"></i>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <div className="form-group">
            <label for="Name">Full Name</label>
            <input type="text" id="Name"></input>
          </div>

          <div className="form-group">
            <label>Role / Title</label>
            <input type="text" ></input>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" ></input>
          </div>

          <div className="form-group">
            <label>Timezone</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main
