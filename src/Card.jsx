import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

export default function Card() {
  return (
    <section className="hero-section">
      <div className="card-container">
        <div className="card">
          <div
            className="card-background"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div className="content">
            <div className="card-category">Nike Air Griffey</div>
            <h3 className="card-heading">Men's Shoes</h3>
            <div className="card-sizes">
              <span className="size">38</span>
              <span className="size">39</span>
              <span className="size">41</span>
              <span className="size">42</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card-background"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <div className="content">
            <div className="card-category">Nike Air Zoom</div>
            <h3 className="card-heading">Basketball Shoes</h3>
            <div className="card-sizes">
              <span className="size">38</span>
              <span className="size">39</span>
              <span className="size">41</span>
              <span className="size">42</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card-background"
            style={{ backgroundImage: `url(${img3})` }}
          ></div>
          <div className="content">
            <div className="card-category">Nike Air Max</div>
            <h3 className="card-heading">Big Kids Shoes</h3>
            <div className="card-sizes">
              <span className="size">38</span>
              <span className="size">39</span>
              <span className="size">41</span>
              <span className="size">42</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
