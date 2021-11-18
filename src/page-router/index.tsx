import { connect } from 'react-redux';

import { IReduxStore } from '../store/types';

import PageRouter from './component';


const mapStateToProps = (state: IReduxStore) => ({
});

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageRouter);