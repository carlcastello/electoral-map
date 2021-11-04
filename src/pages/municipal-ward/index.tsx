import { connect } from 'react-redux';

import { handleDrawerToggle } from '../../components/main-drawer/action';
import { IReduxStore } from '../../store/types';

import MunicipalWard from './component';

const mapStateToProps = (state: IReduxStore) => ({
});

const mapDispatchToProps = {
  handleDrawerToggle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MunicipalWard);