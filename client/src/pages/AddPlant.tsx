import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import { Classes, Intent, InputGroup, FormGroup, Button, Overlay, H4 } from '@blueprintjs/core';

import './AddPlant.scss';

import { fetchAllPlants } from '../redux/models/plants';
import { RootState } from '../redux/reducers/index';

type AddPlantProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
};

const AddPlant = ({ isOpen, onClose, onSubmit }: AddPlantProps) => {
  const classes = classnames(Classes.CARD, Classes.ELEVATION_4, 'overlay');

  /* const dispatch = useDispatch();
  const plants = useSelector((state: RootState) => state.plants.items);

  useEffect(() => {
    dispatch(fetchAllPlants());
  }, [dispatch]); */

  const savePlant = () => {
    const values = {
      latin_name: 'plant',
      plant_id: uuidv4(),
    };
    onSubmit(values);
    onClose();
  };

  return (
    <Overlay
      isOpen={isOpen}
      onClose={onClose}
      autoFocus
      canEscapeKeyClose
      canOutsideClickClose
      enforceFocus
      hasBackdrop
      usePortal
    >
      <div className={classes}>
        <H4>Add a new plant...</H4>
        <div className="add-plant-form">
          <FormGroup
            className="input-group" 
            label="Latin name"
            labelFor="latin-name"
            labelInfo="(required)"
            inline
          >
            <InputGroup id="latin-name" className="input" placeholder="Latin name" />
          </FormGroup>
          <InputGroup className="input" placeholder="Other name" />
          <InputGroup className="input" placeholder="Hybrid name" />
        </div>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button intent={Intent.DANGER} onClick={onClose} style={{ margin: '' }}>
            Close
          </Button>
          <Button intent={Intent.SUCCESS} onClick={savePlant} style={{ margin: '' }}>
            Save Plant
          </Button>
        </div>
      </div>
    </Overlay>
  );
};

export default AddPlant;
