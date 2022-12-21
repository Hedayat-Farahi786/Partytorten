import { Formik } from "formik";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { toggleReviewbar } from "../features/sideMenu/sideMenu";

function Reviewbar() {
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(-1);
  const [uploadedImage, setUploadedImage] = useState();

  const showReviewbar = useSelector((state) => state.sideMenu.showReviewbar);

  const dispatch = useDispatch();

  const validateReviewForm = (values) => {
    const errors = {};

    if (!values.comment) {
      errors.comment = "Comment should not be empty!";
    } else if (values.comment.length < 6) {
      errors.comment = "Comment should be at least 6 characters";
    } else if (values.comment.length > 200) {
      errors.comment = "Comment should not be more than 200 characters";
    } else if (rating < 0) {
      errors.comment = "Please select stars for rating";
    }

    return errors;
  };

  const submitReviewForm = (values, { setSubmitting, resetForm }) => {
    values.rating = rating;
    console.log(values);
    setSubmitting(false);
    resetForm({});
    console.log(values);
    setUploadedImage("");
    setRating(-1);
  };

  return (
    <>
      {showReviewbar && (
        <div
          className="review transition-all duration-200 ease-linear fixed flex items-end justify-end top-0 left-0 bottom-0 right-0 h-full w-full z-50 bg-[#00000078] overflow-hidden"
          id="review"
        >
          <Formik
            initialValues={{ comment: "", image: "" }}
            validate={validateReviewForm}
            onSubmit={submitReviewForm}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
              resetForm,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="bg-white h-full w-10/12 xl:w-4/12 p-5 md:p-10 flex flex-col items-center space-y-14"
              >
                <div className="flex flex-col items-start space-y-4 w-full">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-xl font-bold">Add A Review</p>
                    <GrFormClose
                      cursor="pointer"
                      onClick={() => dispatch(toggleReviewbar())}
                      size={35}
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-base">Your Rating: </p>
                    <div className="stars flex cursor-pointer">
                      {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                          <AiFillStar
                            type="button"
                            size={20}
                            key={index}
                            color={
                              index <= ((rating && hover) || hover)
                                ? "#D26E4B"
                                : "#D6D6D6"
                            }
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <textarea
                    name="comment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                    className="w-full border rounded-md text-sm"
                    rows="5"
                    placeholder="Leave a comment...."
                  ></textarea>
                  <p className="text-error text-xs">
                    {errors.comment && touched.comment && errors.comment}
                  </p>
                  <div className="mb-10 w-full flex flex-col items-start space-y-2">
                    <input
                      name="image"
                      onChange={(event) => {
                        setFieldValue("image", event.target.files[0]);
                        setUploadedImage(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                      onBlur={handleBlur}
                      type="file"
                      value={values.image[0]}
                      className="text-sm border rounded-md w-full"
                    />
                    <p className="text-xs text-gray-500">
                      Upload a picture of product you'd like to share{" "}
                      <small>(optional)</small>
                    </p>
                  </div>
                  <div>
                    <img
                      width="300"
                      className="rounded-md"
                      src={uploadedImage}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black disabled:opacity-50 disabled:cursor-not-allowed uppercase text-[#fafafa] font-semibold px-6 py-2 text-base rounded"
                >
                  Submit Review
                </button>
              </form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
}

export default Reviewbar;
