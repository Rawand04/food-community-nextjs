"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const [image, setImage] = useState();
  const imageInput = useRef();

  function handleImagePick() {
    imageInput.current.click();
  }

  function handleImageChanged(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);

      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && <p>No image selected yet.</p>}
          {image && <Image src={image} alt="Selected image by user" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChanged}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleImagePick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
