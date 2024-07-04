import { InformationLayout } from './information-layout';
import { getInfoTitle } from '../../utils';

export function Information(props) {
	return <InformationLayout>{getInfoTitle(props)}</InformationLayout>;
}
