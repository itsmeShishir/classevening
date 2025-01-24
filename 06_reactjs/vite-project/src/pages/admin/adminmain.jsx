import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminMain() {
  // Existing States
  const [categories, setCategories] = useState([]);
  const [bloodBanks, setBloodBanks] = useState([]);
  const [userProfile, setUserProfile] = useState({});

  // Profile form fields
  const [profileForm, setProfileForm] = useState({
    phone_number: "",
    lat: "",
    long: "",
    profile_image: null,
  });

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState(null);

  const [newBloodBank, setNewBloodBank] = useState({
    title: "",
    description: "",
    stock: 0,
    price: 0.0,
    category: "",
    active: true,
  });
  const [newBloodBankImage, setNewBloodBankImage] = useState(null);

  // Feature Requests States
  const [featureRequests, setFeatureRequests] = useState([]);
  const [newFeatureRequest, setNewFeatureRequest] = useState({
    recipient: "",
    title: "",
    description: "",
  });
  const [selectedFeatureRequest, setSelectedFeatureRequest] = useState(null);
  const [updatedFeatureRequest, setUpdatedFeatureRequest] = useState({
    title: "",
    description: "",
    status: "",
  });

  // Notifications States
  const [notifications, setNotifications] = useState([]);

  // For updating Category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedCategoryName, setUpdatedCategoryName] = useState("");
  const [updatedCategoryImage, setUpdatedCategoryImage] = useState(null);

  // For updating Blood Bank
  const [selectedBloodBank, setSelectedBloodBank] = useState(null);
  const [updatedBloodBank, setUpdatedBloodBank] = useState({});
  const [updatedBloodBankImage, setUpdatedBloodBankImage] = useState(null);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Retrieve token from local storage
  const token = localStorage.getItem("token");

  // API endpoints
  const categoryApiUrl = "http://127.0.0.1:8000/api/categories/";
  const bloodBankApiUrl = "http://127.0.0.1:8000/api/bloodbanks/";
  const profileApiUrl = "http://127.0.0.1:8000/api/auth/profile/";
  const changePasswordApiUrl =
    "http://127.0.0.1:8000/api/auth/change-password/";
  const logoutApiUrl = "http://127.0.0.1:8000/api/auth/logout/";

  const featureRequestApiUrl = "http://127.0.0.1:8000/api/feature-requests/";
  const notificationApiUrl = "http://127.0.0.1:8000/api/notifications/";

  // --------------------------------------------------
  //                   USE EFFECTS
  // --------------------------------------------------
  useEffect(() => {
    fetchCategories();
    fetchBloodBanks();
    fetchUserProfile();
    fetchFeatureRequests();
    fetchNotifications();
  }, []);

  // Populate profile form when userProfile updates
  useEffect(() => {
    if (userProfile) {
      setProfileForm({
        phone_number: userProfile.phone_number || "",
        lat: userProfile.lat || "",
        long: userProfile.long || "",
        profile_image: null, // Only new images can be uploaded
      });
    }
  }, [userProfile]);

  // --------------------------------------------------
  //                   FETCH FUNCTIONS
  // --------------------------------------------------
  const fetchCategories = async () => {
    try {
      const response = await axios.get(categoryApiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(response.data);
    } catch (err) {
      setError("Error fetching categories.");
    }
  };

  const fetchBloodBanks = async () => {
    try {
      const response = await axios.get(bloodBankApiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBloodBanks(response.data);
    } catch (err) {
      setError("Error fetching blood banks.");
    }
  };

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(profileApiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserProfile(response.data);
    } catch (err) {
      setError("Error fetching user profile.");
    }
  };

  const fetchFeatureRequests = async () => {
    try {
      const response = await axios.get(featureRequestApiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFeatureRequests(response.data);
    } catch (err) {
      setError("Error fetching feature requests.");
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(notificationApiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotifications(response.data);
    } catch (err) {
      setError("Error fetching notifications.");
    }
  };

  // --------------------------------------------------
  //                   AUTH FUNCTIONS
  // --------------------------------------------------
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await axios.post(
        changePasswordApiUrl,
        { new_password: newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccessMessage("Password changed successfully.");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError("Error changing password.");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        logoutApiUrl,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      localStorage.clear();
      window.location.href = "/login";
    } catch (err) {
      setError("Error during logout.");
    }
  };

  // --------------------------------------------------
  //                   PROFILE UPDATE
  // --------------------------------------------------
  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    // Put the updated fields into FormData
    const formData = new FormData();
    formData.append("phone_number", profileForm.phone_number);
    formData.append("lat", profileForm.lat);
    formData.append("long", profileForm.long);
    // If a new image was selected, append it
    if (profileForm.profile_image) {
      formData.append("profile_image", profileForm.profile_image);
    }

    try {
      // Use PUT or PATCH depending on your API implementation
      // If your endpoint uses patch: axios.patch(...)
      const response = await axios.put(profileApiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccessMessage("Profile updated successfully.");
      // Re-fetch the user profile to get the latest data
      fetchUserProfile();
    } catch (err) {
      setError("Error updating profile.");
    }
  };

  // --------------------------------------------------
  //                   CATEGORY CRUD
  // --------------------------------------------------
  // CREATE
  const handleAddCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", newCategoryName);
    if (newCategoryImage) formData.append("category_image", newCategoryImage);

    try {
      await axios.post(categoryApiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setNewCategoryName("");
      setNewCategoryImage(null);
      fetchCategories();
    } catch (err) {
      setError("Error adding category.");
    }
  };

  // UPDATE
  const handleSelectCategoryForUpdate = (category) => {
    setSelectedCategory(category);
    setUpdatedCategoryName(category.name || "");
    setUpdatedCategoryImage(null);
    setError("");
    setSuccessMessage("");
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    if (!selectedCategory) return;
    const formData = new FormData();
    formData.append("name", updatedCategoryName);
    if (updatedCategoryImage) {
      formData.append("category_image", updatedCategoryImage);
    }

    try {
      await axios.put(`${categoryApiUrl}${selectedCategory.id}/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Category updated successfully.");
      setSelectedCategory(null);
      setUpdatedCategoryName("");
      setUpdatedCategoryImage(null);
      fetchCategories();
    } catch (err) {
      setError("Error updating category.");
    }
  };

  // DELETE
  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`${categoryApiUrl}${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCategories();
    } catch (err) {
      setError("Error deleting category.");
    }
  };

  // --------------------------------------------------
  //                   BLOOD BANK CRUD
  // --------------------------------------------------
  // CREATE
  const handleAddBloodBank = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(newBloodBank).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (newBloodBankImage) {
      formData.append("images", newBloodBankImage);
    }

    try {
      await axios.post(`${bloodBankApiUrl}create/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setNewBloodBank({
        title: "",
        description: "",
        stock: 0,
        price: 0.0,
        category: "",
        active: true,
      });
      setNewBloodBankImage(null);
      fetchBloodBanks();
    } catch (err) {
      setError("Error adding blood bank.");
    }
  };

  // UPDATE
  const handleSelectBloodBankForUpdate = (bloodBank) => {
    setSelectedBloodBank(bloodBank);
    setUpdatedBloodBank({
      title: bloodBank.title || "",
      description: bloodBank.description || "",
      stock: bloodBank.stock || 0,
      price: bloodBank.price || 0.0,
      category: bloodBank.category || "",
      active: bloodBank.active || true,
    });
    setUpdatedBloodBankImage(null);
    setError("");
    setSuccessMessage("");
  };

  const handleUpdateBloodBank = async (e) => {
    e.preventDefault();
    if (!selectedBloodBank) return;

    const formData = new FormData();
    Object.entries(updatedBloodBank).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (updatedBloodBankImage) {
      formData.append("images", updatedBloodBankImage);
    }

    try {
      await axios.put(`${bloodBankApiUrl}${selectedBloodBank.id}/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Blood Bank updated successfully.");
      setSelectedBloodBank(null);
      setUpdatedBloodBank({});
      setUpdatedBloodBankImage(null);
      fetchBloodBanks();
    } catch (err) {
      setError("Error updating blood bank.");
    }
  };

  // DELETE
  const handleDeleteBloodBank = async (id) => {
    try {
      await axios.delete(`${bloodBankApiUrl}${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBloodBanks();
    } catch (err) {
      setError("Error deleting blood bank.");
    }
  };

  // --------------------------------------------------
  //                   FEATURE REQUEST CRUD
  // --------------------------------------------------
  // CREATE
  const handleAddFeatureRequest = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recipient", newFeatureRequest.recipient);
    formData.append("title", newFeatureRequest.title);
    formData.append("description", newFeatureRequest.description);

    try {
      await axios.post(featureRequestApiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setNewFeatureRequest({
        recipient: "",
        title: "",
        description: "",
      });
      fetchFeatureRequests();
      setSuccessMessage("Feature request added successfully.");
    } catch (err) {
      setError("Error adding feature request.");
    }
  };

  // UPDATE
  const handleSelectFeatureRequestForUpdate = (featureRequest) => {
    setSelectedFeatureRequest(featureRequest);
    setUpdatedFeatureRequest({
      title: featureRequest.title || "",
      description: featureRequest.description || "",
      status: featureRequest.status || "",
    });
    setError("");
    setSuccessMessage("");
  };

  const handleUpdateFeatureRequest = async (e) => {
    e.preventDefault();
    if (!selectedFeatureRequest) return;

    const formData = new FormData();
    formData.append("title", updatedFeatureRequest.title);
    formData.append("description", updatedFeatureRequest.description);
    formData.append("status", updatedFeatureRequest.status);

    try {
      await axios.put(
        `${featureRequestApiUrl}${selectedFeatureRequest.id}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMessage("Feature request updated successfully.");
      setSelectedFeatureRequest(null);
      setUpdatedFeatureRequest({
        title: "",
        description: "",
        status: "",
      });
      fetchFeatureRequests();
    } catch (err) {
      setError("Error updating feature request.");
    }
  };

  // DELETE
  const handleDeleteFeatureRequest = async (id) => {
    try {
      await axios.delete(`${featureRequestApiUrl}${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchFeatureRequests();
    } catch (err) {
      setError("Error deleting feature request.");
    }
  };

  // --------------------------------------------------
  //                   RENDER
  // --------------------------------------------------
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}

      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Name:</strong> {userProfile.username}
            </p>
            <p>
              <strong>Email:</strong> {userProfile.email}
            </p>
            <p>
              <strong>Role:</strong> {userProfile.role}
            </p>
          </div>
          <div>
            <p>
              <strong>Phone:</strong>{" "}
              {userProfile.phone_number || "Not Provided"}
            </p>
            <p>
              <strong>Latitude:</strong> {userProfile.lat || "Not Provided"}
            </p>
            <p>
              <strong>Longitude:</strong> {userProfile.long || "Not Provided"}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Profile Update Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
        <form onSubmit={handleProfileUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              value={profileForm.phone_number}
              onChange={(e) =>
                setProfileForm({
                  ...profileForm,
                  phone_number: e.target.value,
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700">Latitude</label>
            <input
              type="text"
              value={profileForm.lat}
              onChange={(e) =>
                setProfileForm({ ...profileForm, lat: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter latitude"
            />
          </div>

          <div>
            <label className="block text-gray-700">Longitude</label>
            <input
              type="text"
              value={profileForm.long}
              onChange={(e) =>
                setProfileForm({ ...profileForm, long: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter longitude"
            />
          </div>

          <div>
            <label className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              onChange={(e) =>
                setProfileForm({
                  ...profileForm,
                  profile_image: e.target.files[0],
                })
              }
              className="mt-1 block w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Change Password
          </button>
        </form>
      </div>

      {/* Add Category */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add Category</h2>
        <form onSubmit={handleAddCategory} className="space-y-4">
          <div>
            <label className="block text-gray-700">Category Name</label>
            <input
              type="text"
              placeholder="Category Name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Category Image</label>
            <input
              type="file"
              onChange={(e) => setNewCategoryImage(e.target.files[0])}
              className="mt-1 block w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Add Category
          </button>
        </form>
      </div>

      {/* Add Blood Bank */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add Blood Bank</h2>
        <form onSubmit={handleAddBloodBank} className="space-y-4">
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={newBloodBank.title}
              onChange={(e) =>
                setNewBloodBank({ ...newBloodBank, title: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              placeholder="Description"
              value={newBloodBank.description}
              onChange={(e) =>
                setNewBloodBank({
                  ...newBloodBank,
                  description: e.target.value,
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Stock</label>
            <input
              type="number"
              placeholder="Stock"
              value={newBloodBank.stock}
              onChange={(e) =>
                setNewBloodBank({ ...newBloodBank, stock: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              step="0.01"
              placeholder="Price"
              value={newBloodBank.price}
              onChange={(e) =>
                setNewBloodBank({ ...newBloodBank, price: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <select
              value={newBloodBank.category}
              onChange={(e) =>
                setNewBloodBank({ ...newBloodBank, category: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Blood Bank Image</label>
            <input
              type="file"
              onChange={(e) => setNewBloodBankImage(e.target.files[0])}
              className="mt-1 block w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Blood Bank
          </button>
        </form>
      </div>

      {/* Feature Requests Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Feature Requests</h2>

        {/* Add Feature Request Form */}
        <form onSubmit={handleAddFeatureRequest} className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700">Recipient (User ID)</label>
            <input
              type="number"
              placeholder="Recipient User ID"
              value={newFeatureRequest.recipient}
              onChange={(e) =>
                setNewFeatureRequest({
                  ...newFeatureRequest,
                  recipient: e.target.value,
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Feature Request Title"
              value={newFeatureRequest.title}
              onChange={(e) =>
                setNewFeatureRequest({
                  ...newFeatureRequest,
                  title: e.target.value,
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              placeholder="Feature Request Description"
              value={newFeatureRequest.description}
              onChange={(e) =>
                setNewFeatureRequest({
                  ...newFeatureRequest,
                  description: e.target.value,
                })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            Add Feature Request
          </button>
        </form>

        {/* Feature Requests List */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requester Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipient Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {featureRequests.map((fr) => (
                <tr key={fr.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{fr.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {fr.requester_email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {fr.recipient_email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{fr.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {fr.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{fr.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button
                      onClick={() => handleSelectFeatureRequestForUpdate(fr)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteFeatureRequest(fr.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {featureRequests.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-4 whitespace-nowrap text-center text-gray-500"
                  >
                    No feature requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Feature Request Form (visible only if selectedFeatureRequest) */}
      {selectedFeatureRequest && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Update Feature Request
          </h2>
          <form onSubmit={handleUpdateFeatureRequest} className="space-y-4">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                value={updatedFeatureRequest.title}
                onChange={(e) =>
                  setUpdatedFeatureRequest({
                    ...updatedFeatureRequest,
                    title: e.target.value,
                  })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                value={updatedFeatureRequest.description}
                onChange={(e) =>
                  setUpdatedFeatureRequest({
                    ...updatedFeatureRequest,
                    description: e.target.value,
                  })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Status</label>
              <select
                value={updatedFeatureRequest.status}
                onChange={(e) =>
                  setUpdatedFeatureRequest({
                    ...updatedFeatureRequest,
                    status: e.target.value,
                  })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Review">In Review</option>
                <option value="Implemented">Implemented</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Update Feature Request
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedFeatureRequest(null);
                  setUpdatedFeatureRequest({
                    title: "",
                    description: "",
                    status: "",
                  });
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Notifications Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Read
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {notifications.map((notif) => (
                <tr key={notif.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{notif.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {notif.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(notif.created_at).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {notif.read ? (
                      <span className="text-green-600">Yes</span>
                    ) : (
                      <span className="text-red-600">No</span>
                    )}
                  </td>
                </tr>
              ))}
              {notifications.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 whitespace-nowrap text-center text-gray-500"
                  >
                    No notifications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* List Categories */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Category List</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td className="px-6 py-4 whitespace-nowrap">{cat.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cat.name}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button
                    onClick={() => handleSelectCategoryForUpdate(cat)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(cat.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-4 whitespace-nowrap text-center text-gray-500"
                >
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update Category Form (visible only if selectedCategory) */}
      {selectedCategory && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Update Category</h2>
          <form onSubmit={handleUpdateCategory} className="space-y-4">
            <div>
              <label className="block text-gray-700">
                Updated Category Name
              </label>
              <input
                type="text"
                value={updatedCategoryName}
                onChange={(e) => setUpdatedCategoryName(e.target.value)}
                placeholder="Updated Category Name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Category Image</label>
              <input
                type="file"
                onChange={(e) => setUpdatedCategoryImage(e.target.files[0])}
                className="mt-1 block w-full"
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory(null);
                  setUpdatedCategoryName("");
                  setUpdatedCategoryImage(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* List Blood Banks */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Blood Bank List</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bloodBanks.map((bank) => (
              <tr key={bank.id}>
                <td className="px-6 py-4 whitespace-nowrap">{bank.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{bank.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {bank.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button
                    onClick={() => handleSelectBloodBankForUpdate(bank)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteBloodBank(bank.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {bloodBanks.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-4 whitespace-nowrap text-center text-gray-500"
                >
                  No blood banks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Update Blood Bank Form (visible only if selectedBloodBank) */}
      {selectedBloodBank && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Update Blood Bank</h2>
          <form onSubmit={handleUpdateBloodBank} className="space-y-4">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                type="text"
                placeholder="Title"
                value={updatedBloodBank.title || ""}
                onChange={(e) =>
                  setUpdatedBloodBank({
                    ...updatedBloodBank,
                    title: e.target.value,
                  })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                placeholder="Description"
                value={updatedBloodBank.description || ""}
                onChange={(e) =>
                  setUpdatedBloodBank({
                    ...updatedBloodBank,
                    description: e.target.value,
                  })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={updatedBloodBank.stock || 0}
                onChange={(e) =>
                  setUpdatedBloodBank({
                    ...updatedBloodBank,
                    stock: e.target.value,
                  })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                step="0.01"
                placeholder="Price"
                value={updatedBloodBank.price || 0.0}
                onChange={(e) =>
                  setUpdatedBloodBank({
                    ...updatedBloodBank,
                    price: e.target.value,
                  })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Category</label>
              <select
                value={updatedBloodBank.category || ""}
                onChange={(e) =>
                  setUpdatedBloodBank({
                    ...updatedBloodBank,
                    category: e.target.value,
                  })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Blood Bank Image</label>
              <input
                type="file"
                onChange={(e) => setUpdatedBloodBankImage(e.target.files[0])}
                className="mt-1 block w-full"
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedBloodBank(null);
                  setUpdatedBloodBank({});
                  setUpdatedBloodBankImage(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminMain;
