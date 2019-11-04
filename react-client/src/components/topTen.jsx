import React from "react";

// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.
// const TopTen = () => (
class TopTen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Top Ten Stories </h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.by}</td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopTen;

// <tr>
// <td>Video Games Are Changing the Way Soccer Is Played</td>
// <td>mhb</td>
// <td>100</td>
// </tr>
