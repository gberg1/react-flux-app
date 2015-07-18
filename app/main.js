import React from 'react';
import Timer from './components/Timer';

let Application = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Timer</h1>
        <Timer />
      </div>
    );
  }
})

React.render(<Application />, app);
