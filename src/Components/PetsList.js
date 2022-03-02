import PetItem from "./PetItem";
import { useState } from "react";
import SearchBar from './SearchBar'
import Selector from './Selector'

export default function PetsList(props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const pets = props.pets
    .filter((pet) => pet.name.toLowerCase().includes(query))
    .filter((pet) => pet.type.includes(type))
    .map((pet) => <PetItem key={pet.id} pet={pet} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar setQuery={setQuery}/>
              <br />
              Type:
              <Selector setType={setType} />
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{pets}</div>
      </div>
    </section>
  );
}
