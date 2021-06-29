import React from "react";
import { Card, CardContent } from "@material-ui/core";

const Table = ({ countries }) => {
  return (
    <Card className="app__table">
      <CardContent>
        <h3>
          <center>Cases By Countries [ Highest ]</center>
        </h3>

        <table>
          {console.log(countries[0])}
          {countries.map(({ country, cases }) => (
            <tr>
              <td>{country}</td>
              <td>{cases}</td>
            </tr>
          ))}
        </table>
      </CardContent>
    </Card>
  );
};

export default Table;
