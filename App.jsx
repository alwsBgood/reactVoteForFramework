import React from 'react';



// let jsx =
//   <div className="container">
//     <img src="https://facebook.github.io/react/img/logo.svg"/>
//     <h1>React</h1>
//     <p>Библиотека для создания пользовательских интерфейсов</p>
//   </div>;


// function Hero() {
//   return (
//   <div className="container">
//     <img src="https://facebook.github.io/react/img/logo.svg"/>
//     <h1>React</h1>
//     <p>Библиотека для создания пользовательских интерфейсов</p>
//   </div>
//   )
// }

// function Hero(props) {
//   return (
//   <div className="container">
//     <img src={props.imageUrl}/>
//     <h1>{props.title}</h1>
//     <p>{props.subtitle}</p>
//   </div>
//   )
// }


// function Hero(props) {
//   let count = 0;
//   function handleClick() {
//     count++;
//     console.log(count);
//   }
//   return (
//   <div className="container">
//     <div className="count">{count}</div>
//     <img src={props.imageUrl} onClick={handleClick}/>
//     <h1>{props.title}</h1>
//     <p>{props.subtitle}</p>
//   </div>
//   );
// }

let ImageCounter = function(props) {
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={"img/" + props.imageUrl} onClick={props.onCount} />
        </div>
    );
}

let Hero = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  handleClick: function(){
    this.setState({ count: this.state.count + 1 })
  },

  render: function() {
    return (
    <div className="container">
      <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick} />
      <h1>{this.props.title}</h1>
      <p>{this.props.subtitle}</p>
    </div>
    );
  }
})


let App =
React.createClass({
  render: function() {
    return (
      <div>
      {this.props.heroes.map(function(hero) {
          return <Hero key={hero.id} title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />
        })
      }
      </div>
    );
  }
})




// export default jsx;

export default App;
