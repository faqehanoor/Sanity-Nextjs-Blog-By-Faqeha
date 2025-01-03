import React from 'react';

import Comments from '@/app/components/Comments'; 


const blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Choosing the Perfect Perfume",
      content:
        "Selecting a perfume is about finding a scent that matches your personality. Discover tips on how to choose the perfect perfume for any occasion.",
      image: "/assets/card1.jpg", 
      link: "https://perfumesociety.org/blog/",
    },
    {
      id: 2,
      title: "Top 5 Perfumes to Gift Your Loved Ones",
      content:
        "Perfumes make excellent gifts for special occasions. Explore our list of the top 5 perfumes to make your loved ones feel cherished.",
      image: "/assets/card2.jpg", 
      link: "https://www.perfume.com/blog/", 
    },
    {
      id: 3,
      title: "Caring for Your Perfume Collection",
      content:
        "Ensure your favorite fragrances last longer by storing them correctly. Learn the do’s and don’ts of perfume care.",
      image: "/assets/card3.jpg", 
      link: "https://experimentalperfumeclub.com/journal/", 
    },

    {
      id: 3,
      title: "Caring for Your Perfume Collection",
      content:
        "Ensure your favorite fragrances last longer by storing them correctly. Learn the do’s and don’ts of perfume care.",
      image: "/assets/perfume5.webp", 
      link: "https://experimentalperfumeclub.com/journal/", 
    },

    {
      id: 3,
      title: "Caring for Your Perfume Collection",
      content:
        "Ensure your favorite fragrances last longer by storing them correctly. Learn the do’s and don’ts of perfume care.",
      image: "/assets/perfume2.jpg", 
      link: "https://experimentalperfumeclub.com/journal/", 
    },

    {
      id: 3,
      title: "Caring for Your Perfume Collection",
      content:
        "Ensure your favorite fragrances last longer by storing them correctly. Learn the do’s and don’ts of perfume care.",
      image: "/assets/perfume4.jpg", 
      link: "https://experimentalperfumeclub.com/journal/", 
    },

  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-10">Perfume Blog</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg max-w-sm overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.content}</p>
              <a
                href={blog.link}
                className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-indigo-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
     <Comments />
      </div>
    
    </div>
  );
};

export default blog;
