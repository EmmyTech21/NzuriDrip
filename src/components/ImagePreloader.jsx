import React, { useEffect } from "react";

export default function ImagePreloader({ imageUrls }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const url = img.getAttribute("data-src");
          img.setAttribute("src", url);
          observer.unobserve(img);
        }
      });
    }, { rootMargin: "0px 0px 200px 0px" });

    const images = document.querySelectorAll(".lazy-img");
    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, [imageUrls]);

  return (
    <div className="hidden">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          data-src={url}
          alt="Product"
          className="lazy-img"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      ))}
    </div>
  );
}