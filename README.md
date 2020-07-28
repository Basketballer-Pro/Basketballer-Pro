## NBA Player Search App

This app lets you search through NBA players and view their statistics. Good for those who play Fantasy Basketball or simply avid fans exploring their curiosity. You will also be able to view team standings and recent game results.

Currently this app displays all team player stats. All data and images are pulled from official NBA sources. Api can be found here: http://data.nba.net/

**NOTE**: Due to Covid-19 the 2019-20 NBA season has been cancelled. Statistics go far as March 12, 2020

### Installation

```
git clone https://github.com/kammanz/raptors-app.git
npm install
npm start
```

For unit testing:

```
npm install enzyme enzyme-adapter-react-16 enzyme-to-json --save-dev
```

or using Yarn:

```
yarn add enzyme enzyme-adapter-react-16 react-test-renderer enzyme-to-json --dev
```

Unit test configuration:

In the src/ directory, create a new file called setupTests.js
In that file, write the following at top of file:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```

### Built With

- [React](https://reactjs.org/) - The JS framework used
- [Redux](https://github.com/reduxjs/react-redux) - Utilizing Redux store, dispatching actions
- [Axios](https://github.com/axios/axios) - Promise based HTTP client
- [CSS Modules](https://github.com/css-modules/css-modules) - CSS processing

### Authors

- **Kaumil Manzoor** - _Development_ - [Kammanz](http://kammanz.com/)
- **Nikhil Tumne** - _Design_ - [Freshly Grazed](http://freshlygrazed.com/)

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://www.mit.edu/~amini/LICENSE.md) file for details
