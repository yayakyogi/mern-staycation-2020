import React from "react";
import Button from "../elements/Button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section
        className="container"
        key={`category-${index1}`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* get category name */}
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="container-grid">
          {/* cek jika category punya items dan items tidak memiliki data sama sekali maka tampilkan pesan */}
          {category.items.length === 0 ? (
            // kondisi jika BENAR
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            // kondisi Jika SALAH atau item != 0
            category.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-items-${index2}`}
                  data-aos="fade-up"
                  data-aos-delay={200 * index2}
                >
                  <div className="card">
                    {/* kemudian cek apakah ada item isPopular dan nilainya true */}
                    {item.isPopular && (
                      // jika YA beri tag warna pink
                      <div className="tag">
                        Popular
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block text-gray-800"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.city} - {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
