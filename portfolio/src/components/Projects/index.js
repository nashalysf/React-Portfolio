import React, { useState } from 'react';
import Modal from '../Modal';

const Projects = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState ([
    {
      name: 'Horiseon',
      category: 'front',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Find-A-Story',
      category: 'front',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Password-Generator',
      category: 'front',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Story-Keeper',
      category: 'back',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Deepen',
      category: 'back',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Just-Tech-news',
      category: 'back',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);
  const currentPhotos = photos.filter((photo)=>photo.category === category);
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div>
    {isModalOpen && (
      <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
    )}
    <div className="flex-row">
      {currentPhotos.map((image, i) => (
        <img
          src={require(`../../assets/small/${category}/${i}.jpg`).default}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
        />
      ))}
    </div>
  </div>
  )
}
  
export default Projects;
  

