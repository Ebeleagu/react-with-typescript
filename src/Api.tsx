import { useState, useEffect } from "react";

interface Book {
  id: string;
  author: string;
  publisher: string;
  volumeInfo: {
    title: string;
    description: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export default function Products() {
  const API =
    "https://www.googleapis.com/books/v1/volumes?q=%22chinua%20achebe%22";
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(API)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setBooks(data.items || []);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <section className="bg-[#e6e0d2]">
      <div className="">
        {books.map((book) => (
          <figure key={book.id}>
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className=""
              />
            )}
            <figcaption>
              <strong className="text-xl font-mono">{book.volumeInfo.title}</strong>
              <p className=" font-mono">
                {book.volumeInfo.description || "No description available"}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
