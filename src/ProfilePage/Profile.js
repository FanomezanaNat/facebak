import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './Profile.css';

function Profile() {
    const location = useLocation();
    const userId = location.pathname.slice(9);
    //   const userId = '9b12d8e1-75b4-44e9-939f-e35807a27d35';
  const [user, setUser] = useState(null);

  useEffect(() => {
      const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:8080/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div className="profile_page">
      {user ? (
        <div>
          <div className="profile_cover_picture"></div>
          <div className="profile_banner">
            <div className="profile_picture">
              <img src={user.photo} alt='profile_picture' />
            </div>
            <div className="profile_name">
              <h1>{user.username}</h1>
              <p>
                {user.email} • Joined {new Date(user.joinedAt).toLocaleDateString()}
              </p>
              <p>{user.bio}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default Profile;