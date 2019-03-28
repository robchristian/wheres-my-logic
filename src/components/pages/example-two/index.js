import { connect } from 'react-redux';
import { startStreamingJson } from '~/actions';
import Component from './component';

const mapStateToProps = ({ JSON }) => ({
	JSON,
});
const mapDispatchToProps = (dispatch) => ({
	startStreaming: () => dispatch(startStreamingJson()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component);
