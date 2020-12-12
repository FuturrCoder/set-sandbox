/*
color: "purple", "green", "red"
shape: "diamond", "squiggle", "oval"
shading: "empty", "solid", "striped"
number: 1, 2, 3
*/

let shapeData = {
  diamond: "M25 0 L50 50 L25 100 L0 50 Z",
  squiggle: "M38.4,63.4c0,16.1,11,19.9,10.6,28.3c-0.5,9.2-21.1,12.2-33.4,3.8s-15.8-21.2-9.3-38c3.7-7.5,4.9-14,4.8-20 c0-16.1-11-19.9-10.6-28.3C1,0.1,21.6-3,33.9,5.5s15.8,21.2,9.3,38C40.4,50.6,38.5,57.4,38.4,63.4z",
  oval: "M25,99.5C14.2,99.5,5.5,90.8,5.5,80V20C5.5,9.2,14.2,0.5,25,0.5S44.5,9.2,44.5,20v60 C44.5,90.8,35.8,99.5,25,99.5z"
};

class Card extends React.Component {
  render() {
    let fill;

    if (this.props.shading == "empty") {
      fill = "none";
    } else if (this.props.shading == "solid") {
      fill = this.props.color;
    } else {
      fill = `url(#striped-${this.props.color})`;
    }

    let shapes = [];

    for (let i = 0; i < parseInt(this.props.number); i++) {
      shapes.push(
        <svg key={i} width="50" height="100">
          <path
            d={shapeData[this.props.shape]}
            stroke={this.props.color}
            fill={fill}
          />
        </svg>
      );
    }

    return (
      <button>
        {shapes}
      </button>
    );
  }
}

ReactDOM.render(
  <Card
    shape="oval"
    color="red"
    shading="solid"
    number="2"
  />,
  document.getElementById('game')
);