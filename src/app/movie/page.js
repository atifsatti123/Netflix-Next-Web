import Link from "next/link";
import React from "react";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  console.log("url", url);
  console.log("abcd");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ecdf717842mshad126d129fc6fb9p1da146jsnaadce371338c",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log("data", data);
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          {main_data.map((curElem) => {
            return <MovieCard key={curElem.id} {...curElem} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Movie;
