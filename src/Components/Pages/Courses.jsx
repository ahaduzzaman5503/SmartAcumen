import React, { useState, useEffect } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(courses);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://smartacumen-server.vercel.app/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);  
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="flex justify-center items-center p-5 text-2xl font-bold text-black">
        Online Courses
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <div className="flex justify-center items-center" key={course._id}>
              <div className="border">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="">
                    <img
                      className="p-8 rounded-t-lg"
                      src={course.image}
                      alt="product image"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="">
                      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {course.title}
                      </h5>
                    </a>

                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        ${course.price}
                      </span>
                      <a
                        href=""
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
