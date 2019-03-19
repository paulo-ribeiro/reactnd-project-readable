import React, { Fragment } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const EditDeleteButtons = ({ onHandleEdit, onHandleDelete }) => (
  <Fragment>
    <IconButton
      aria-label="Edit"
      onClick={() => onHandleEdit()}>
      <EditIcon fontSize="small" />
    </IconButton>
    <IconButton
      aria-label="Delete"
      onClick={() => onHandleDelete()}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  </Fragment>
);

export default EditDeleteButtons;