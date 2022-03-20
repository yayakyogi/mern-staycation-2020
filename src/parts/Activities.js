import React from "react";
import Button from "../elements/Button";

export default function Activities({ data }) {
  if (data.activityId.length === 0) return null;
  return (
    <section className="container">
      <h4 className="mb-3 font-weight-medium">Treasure to Choose</h4>
      <div className="container-grid">
        {data.activityId.map((activity, index) => {
          return (
            <div
              className="item column-3 row-1"
              key={`activities-${index}`}
              data-aos="fade-up"
              data-aos-delay={200 * index}
            >
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    src={`${process.env.REACT_APP_HOST}/${activity.imageUrl}`}
                    alt={activity.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href={`/properties/${activity._id}`}
                    className="stretched-link d-block text-gray-800"
                  >
                    <h5 className="h4">{activity.name}</h5>
                  </Button>
                  <span className="text-gray-500">{activity.type}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
  // }
  // );
}
