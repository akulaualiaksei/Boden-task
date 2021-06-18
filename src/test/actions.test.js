import { setModal, hideModal, changeListView } from '../redux/actions';
import { SET_MODAL, HIDE_MODAL, CHANGE_LIST_VIEW } from '../redux/types';

describe('actions', () => {
  it('should set modal', () => {
    const modalData = {
      title: 'some title',
      text: 'some text',
    };
    const expectedAction = {
      type: SET_MODAL,
      payload: modalData,
    };
    expect(setModal(modalData)).toEqual(expectedAction);
  });
  it('should hide modal', () => {
    const expectedAction = {
      type: HIDE_MODAL,
    };
    expect(hideModal()).toEqual(expectedAction);
  });
  it('should change list view', () => {
    const data = true;
    const expectedAction = {
      type: CHANGE_LIST_VIEW,
      payload: data,
    };
    expect(changeListView(data)).toEqual(expectedAction);
    expect(changeListView(!data)).toEqual({
      ...expectedAction,
      payload: !expectedAction.payload,
    });
  });
});
