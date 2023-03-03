import {IAction} from '../reducers/reducers.d';
import {IimagePath, IpotionStatus} from '../helpers/constants';
import {Dispatch} from 'react';
import {createTriggerNotify} from './notifyService';

function toggleImage(
	dispatch: Dispatch<IAction>,
	potionStatus: IpotionStatus,
): void {
	dispatch({
		type: 'TOGGLE_IMAGE_PATH',
		payload: potionStatus ? IimagePath.filled : IimagePath.empty,
	});
	dispatch({
		type: 'SET_POTION_STATUS',
		payload: potionStatus,
	});
}
function setScheduleTime(dispatch: Dispatch<IAction>, data: string): void {
	dispatch({
		type: 'SET_SCHEDULE_TIME',
		payload: data,
	});
}
export {toggleImage, setScheduleTime};
