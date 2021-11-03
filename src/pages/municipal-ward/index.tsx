import { connect } from 'react-redux';

import { handleDrawerToggle } from '../../components/main-drawer/action';

import MunicipalWard from './component';

const mapDispatchToProps = {
  handleDrawerToggle
}

export default connect(
  null,
  mapDispatchToProps,
)(MunicipalWard);