import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  }; //funcions as a way to set default props in case nothing gets passed

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index, //note that the dataset key is meant to retrieve all the data- elements
    });
  }; // +e turns the string into a number

  render() {
    const { active } = this.state; // mutable internal state of the class component
    const { images } = this.props; // inmutable params that gets passed to the class component

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
