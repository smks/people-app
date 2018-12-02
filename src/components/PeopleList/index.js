import { connect } from 'react-redux';
import PeopleList, { mapStateToProps, mapDispatchToProps } from './PeopleList';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeopleList);
