import { useState } from "react";

export default function PetItem(props) {
  const pet = props.pet;
  const [petPic, setPet] = useState(pet.image)
  const petPet = () =>{
    setPet(pet.image2)
  }

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petPic} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={petPet}>
            Pet
          </button>
        </div>
      </div>
    </div>
  );
}
