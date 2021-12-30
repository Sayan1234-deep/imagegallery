import React, { useEffect, useState } from "react";
import "../index.css";
import Image from "./Image"
import Masonry from "react-masonry-component";
import Loading from "./Loading";
import { DebounceInput } from "react-debounce-input";
import Modal from "react-modal/lib/components/Modal";

const ImageHolder = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [currentImage, setCurrentImage] = useState(null)

  {/* Masnory Option */}
  const masonryOptions = {
    transitionDuration: 20,
    isFitWidth: true,
  };


  const getImages = async () => {
    const apiUrl = `https://pixabay.com/api/?key=24960954-36d5ea4d032138056f16023c0&q=${search}&image_type=photo&pretty=true&per_page=30&page=4`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.hits);
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    getImages();
  }, [search])


  return (
    <>
      {/* SearchBox */}
      <center>
        <form>
          <div className="form-group forms">
            <label htmlFor="exampleInputEmail1">Search Photo</label>
            <DebounceInput
              autoComplete="off"
              minLength={2}
              debounceTimeout={500}
              type="text"
              className="form-control inputs"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </form>
      </center>
      <hr />
      <Modal isopen={!!currentImage}>
        <img
          src="https://pixabay.com/get/gf69f44430c32d6e2ddca8c1348971a9ea91f407aea7479800bb3123a971328bbdd5d0003782f12bdc1c4e4abe6a82dd21e57213f651939efa5528937bffadbf5_640.jpg"
          alt="imag preview"
        />
      </Modal>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <Masonry className="masnory_container" options={masonryOptions}>
          {data.map((photo) => {
            return (
              <Image
                key={photo.id}
                src={photo.webformatURL}
                handleClick={() => {}}
              />
            );
          })}
        </Masonry>
      )}
      ;
    </>
  );
};

export default ImageHolder;
