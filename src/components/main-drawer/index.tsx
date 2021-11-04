import { connect } from 'react-redux';

import { IReduxStore } from '../../store/types';

import MainDrawer from './component';

import { mainDrawerDataSelector } from './selectors';

const mapStateToProps = (state: IReduxStore) => ({
  mainDrawerData: mainDrawerDataSelector(state),
});

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainDrawer);