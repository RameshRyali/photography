import React, { useState } from "react";

const PhotographersDashboard = () => {
  const [activeSection, setActiveSection] = useState("View Photographers");

  const renderContent = () => {
    switch (activeSection) {
      case "Add Photographer":
        return (
          <div className="add-photographer-form">
            <h1>Add Photographer</h1>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter phone number" required />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" placeholder="Enter location" required />
              </div>
              <div className="form-group">
                <label>Specialization</label>
                <input type="text" placeholder="Enter specialization" required />
              </div>
              <div className="form-group">
                <label>Experience</label>
                <input type="number" placeholder="Enter experience in years" required />
              </div>
              <div className="form-group">
                <label>Availability</label>
                <input type="text" placeholder="Enter availability" required />
              </div>
              <div className="form-group">
                <label>Pricing</label>
                <input type="number" placeholder="Enter starting price" required />
              </div>
              <button type="submit" className="add-btn">Add Photographer</button>
            </form>
          </div>
        );
      case "View Photographers":
        return (
          <div>
            <h1>Our Photographers</h1>
            <div className="photographers-container">
              {/* Photographer Card 1 */}
              <div className="photographer-card">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Sarah Johnson"
                  className="photographer-image"
                />
                <div className="photographer-details">
                  <h3>Sarah Johnson</h3>
                  <p className="specialty">Wedding Photography</p>
                  <p><i className="location">New York, NY</i></p>
                  <p>+1 (555) 123-4567</p>
                  <p>8 years experience</p>
                  <p>Availability: Weekends</p>
                  <p>Starting from <span className="price">$500</span></p>
                </div>
                <div className="actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
              {/* Photographer Card 2 */}
              <div className="photographer-card">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Michael Chen"
                  className="photographer-image"
                />
                <div className="photographer-details">
                  <h3>Michael Chen</h3>
                  <p className="specialty">Portrait & Fashion</p>
                  <p><i className="location">San Francisco, CA</i></p>
                  <p>+1 (555) 987-6543</p>
                  <p>6 years experience</p>
                  <p>Availability: Mon-Sat</p>
                  <p>Starting from <span className="price">$300</span></p>
                </div>
                <div className="actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
          </div>
        );
      case "Bookings":
        return (
          <div>
            <h1>Bookings</h1>
            <p>Manage your bookings here.</p>
          </div>
        );
      case "Gallery":
        return (
          <div>
            <h1>Gallery</h1>
            <p>Manage the photo gallery here.</p>
          </div>
        );
      default:
        return <h1>Welcome to the Admin Panel</h1>;
    }
  };

  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li
            className={activeSection === "View Photographers" ? "active" : ""}
            onClick={() => setActiveSection("View Photographers")}
          >
            View Photographers
          </li>
          <li
            className={activeSection === "Add Photographer" ? "active" : ""}
            onClick={() => setActiveSection("Add Photographer")}
          >
            Add Photographer
          </li>
          <li
            className={activeSection === "Bookings" ? "active" : ""}
            onClick={() => setActiveSection("Bookings")}
          >
            Bookings
          </li>
          <li
            className={activeSection === "Gallery" ? "active" : ""}
            onClick={() => setActiveSection("Gallery")}
          >
            Gallery
          </li>
        </ul>
      </aside>
      <main className="main-content">{renderContent()}</main>
    </div>
  );
};

export default PhotographersDashboard;

