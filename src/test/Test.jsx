import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Test() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="mx-auto border-2 w-96">
      <div className="my-10 bg-yellow-300" data-aos="zoom-in">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rerum
        magnam enim ex tempore consequatur saepe aut ducimus aperiam dicta quia,
        laborum debitis reprehenderit quaerat, est minus. Obcaecati quia illo
        consequatur voluptatum tempore quidem. Cupiditate, sint. Fugit totam
        recusandae veritatis cumque quaerat. Dolorem nulla dolore id aspernatur
        cupiditate commodi corrupti numquam impedit omnis exercitationem
        voluptatibus nihil autem doloribus, dolor dignissimos mollitia cum
        expedita eveniet itaque quaerat voluptas? Earum esse totam cupiditate
        nam voluptas veritatis. Quasi, odio temporibus at placeat consectetur
        suscipit tenetur sunt expedita quam obcaecati quis in praesentium
        numquam reiciendis soluta dignissimos officia! Minima dignissimos saepe
        distinctio provident possimus!
      </div>
      <div className="my-10 bg-green-400" data-aos="fade-up">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rerum
        magnam enim ex tempore consequatur saepe aut ducimus aperiam dicta quia,
        laborum debitis reprehenderit quaerat, est minus. Obcaecati quia illo
        consequatur voluptatum tempore quidem. Cupiditate, sint. Fugit totam
        recusandae veritatis cumque quaerat. Dolorem nulla dolore id aspernatur
        cupiditate commodi corrupti numquam impedit omnis exercitationem
        voluptatibus nihil autem doloribus, dolor dignissimos mollitia cum
        expedita eveniet itaque quaerat voluptas? Earum esse totam cupiditate
        nam voluptas veritatis. Quasi, odio temporibus at placeat consectetur
        suscipit tenetur sunt expedita quam obcaecati quis in praesentium
        numquam reiciendis soluta dignissimos officia! Minima dignissimos saepe
        distinctio provident possimus!
      </div>
      <div className="my-10 bg-fuchsia-400" data-aos="zoom-in">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rerum
        magnam enim ex tempore consequatur saepe aut ducimus aperiam dicta quia,
        laborum debitis reprehenderit quaerat, est minus. Obcaecati quia illo
        consequatur voluptatum tempore quidem. Cupiditate, sint. Fugit totam
        recusandae veritatis cumque quaerat. Dolorem nulla dolore id aspernatur
        cupiditate commodi corrupti numquam impedit omnis exercitationem
        voluptatibus nihil autem doloribus, dolor dignissimos mollitia cum
        expedita eveniet itaque quaerat voluptas? Earum esse totam cupiditate
        nam voluptas veritatis. Quasi, odio temporibus at placeat consectetur
        suscipit tenetur sunt expedita quam obcaecati quis in praesentium
        numquam reiciendis soluta dignissimos officia! Minima dignissimos saepe
        distinctio provident possimus!
      </div>
      <div className="my-10 bg-red-400" data-aos="fade-up">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rerum
        magnam enim ex tempore consequatur saepe aut ducimus aperiam dicta quia,
        laborum debitis reprehenderit quaerat, est minus. Obcaecati quia illo
        consequatur voluptatum tempore quidem. Cupiditate, sint. Fugit totam
        recusandae veritatis cumque quaerat. Dolorem nulla dolore id aspernatur
        cupiditate commodi corrupti numquam impedit omnis exercitationem
        voluptatibus nihil autem doloribus, dolor dignissimos mollitia cum
        expedita eveniet itaque quaerat voluptas? Earum esse totam cupiditate
        nam voluptas veritatis. Quasi, odio temporibus at placeat consectetur
        suscipit tenetur sunt expedita quam obcaecati quis in praesentium
        numquam reiciendis soluta dignissimos officia! Minima dignissimos saepe
        distinctio provident possimus!
      </div>
    </div>
  );
}
