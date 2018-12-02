import React, { Component } from 'react';
import Loading from 'react-loading';
import {
  shape, arrayOf, string, func, bool, number,
} from 'prop-types';
import './PeopleList.css';

import Panel from '../Panel';

import { getPeople } from '../../actions';

class PeopleList extends Component {
  componentDidMount() {
    const { fetchPeople } = this.props;

    fetchPeople();
  }

  showUsers() {
    const { people } = this.props;

    return people.map(person => (
      <div key={person.id} className="person">
        <img
          alt="person"
          className="avatar"
          src={`https://ui-avatars.com/api/?name=${person.name}`}
        />
        <div className="bio">{person.name}</div>
      </div>
    ));
  }

  render() {
    const { hasLoadedPeople } = this.props;
    if (hasLoadedPeople === false) {
      return <Loading className="loading" color="#14233c" />;
    }
    return (
      <Panel size="md">
        <div className="people-list">{this.showUsers()}</div>
      </Panel>
    );
  }
}

PeopleList.propTypes = {
  people: arrayOf(
    shape({
      id: number,
      name: string,
    }),
  ),
  hasLoadedPeople: bool.isRequired,
  fetchPeople: func.isRequired,
};

PeopleList.defaultProps = {
  people: [],
};

export const mapStateToProps = ({ people: { list, hasLoadedPeople } }) => ({
  people: list,
  hasLoadedPeople,
});

export const mapDispatchToProps = {
  fetchPeople: getPeople.request,
};

export default PeopleList;
