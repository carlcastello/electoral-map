import { connect } from 'react-redux';

import { handleAsideToggle } from '../../components/aside/action';
import { IReduxStore } from '../../store/types';

import MunicipalWard from './component';

const mapStateToProps = (state: IReduxStore) => ({
});

const mapDispatchToProps = {
  handleAsideToggle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MunicipalWard);