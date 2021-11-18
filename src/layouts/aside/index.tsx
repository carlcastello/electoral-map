import { connect } from 'react-redux';

import { IReduxStore } from '../../store/types';

import Aside from './component';

import { asideDataSelector } from './selectors';

const mapStateToProps = (state: IReduxStore) => ({
  asideData: asideDataSelector(state),

});

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Aside);