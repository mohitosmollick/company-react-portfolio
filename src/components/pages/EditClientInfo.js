import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Input from "../Input";

const Register = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [image, setImage] = useState();
  // const cors = require("cors");

  async function handleRegister(e) {
    e.preventDefault();
    //validation

    try {
      setError("");
      setLoading(true);
      await axios
        .post("http://127.0.0.1:8000/api/client_register", {
          name,
        })
        .then(({ data }) => {
          Swal.fire({
            text: data.message,
          });
        });
    } catch (err) {
      Swal.fire("Failed to create an account!", err.message, "question");
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <section className="py-20 lg:py-[20px]">
      <div class="max-w-screen-xl m-0 sm:m-20 shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12  lg:flex hidden">
          <div class="h-full">
            {/* <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            /> */}
          </div>
        </div>
        <div class="flex-1 text-center ">
          <div class=" xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <h3 class="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
                Edit profile Information
              </h3>
            </div>
            <form onSubmit={handleRegister}>
              <Input
                required
                placeholder="Your Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                placeholder="Image"
                type="file"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />

              {error && (
                <p class="text-red-500 dark:text-gray-400  italic text-md ">
                  {error}
                </p>
              )}
              <button disabled={loading} className="btn btn-sm">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
