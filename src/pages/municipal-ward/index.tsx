import { connect } from 'react-redux';

import { IReduxStore } from '../../store/types';

import MunicipalWard from './component';

const mapStateToProps = (state: IReduxStore) => ({
});

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MunicipalWard);