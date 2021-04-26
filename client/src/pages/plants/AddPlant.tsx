import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import {
  Classes,
  Intent,
  InputGroup,
  FormGroup,
  Button,
  Overlay,
  H4,
  NumericInput,
  TextArea,
  MenuItem,
} from '@blueprintjs/core';
import { Select, ItemRenderer } from '@blueprintjs/select';

import './AddPlant.scss';

import { fetchAllPlants, Plant } from '../../redux/models/plants';
import { RootState } from '../../redux/reducers/index';
import { Hardiness, hardinessSelectItems } from './utils';

type AddPlantProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
};

const renderHardiness: ItemRenderer<any> = (item: Hardiness, { handleClick, modifiers, query }) => {
  return <MenuItem active={modifiers.active} key={item.value} onClick={handleClick} text={item.label} />;
};

// ----------------- Component -----------------

const AddPlant = ({ isOpen, onClose, onSubmit }: AddPlantProps) => {
  const classes = classnames(Classes.CARD, Classes.ELEVATION_4, 'overlay');


  const savePlant = () => {

    /* const values = {
      latin_name: ,
      plant_id: uuidv4(),
    }; */
    // onSubmit(values);
    // console.log(data);
    onClose();
  };

  const handleHardinessSelect = (value: any) => {
    console.log(value);
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
      className={Classes.OVERLAY_SCROLL_CONTAINER}
    >
      <div className={classes}>
        <H4>Add a new plant...</H4>

        <div className="add-plant-form">
          <FormGroup className="input-group" label="Names" inline>

          <FormGroup className="input-group" label="Latin name" labelFor="latin-name" inline>
              <InputGroup id="latin-name" className="input" placeholder="Latin name" />
            </FormGroup>
              
            <FormGroup className="input-group" label="Hybrid name" labelFor="hybrid-name" inline>
              <InputGroup id="hybrid-name" className="input" placeholder="Hybrid name" />
            </FormGroup>

            <FormGroup className="input-group" label="Hungarian name" labelFor="hungarian-name" inline>
              <InputGroup id="hungarian-name" className="input" placeholder="Other name" />
            </FormGroup>

            <FormGroup className="input-group" label="English name" labelFor="english-name" inline>
              <InputGroup id="english-name" className="input" placeholder="English name" />
            </FormGroup>
          </FormGroup>

          <FormGroup className="input-group" label="Plant Type" inline></FormGroup>

          <FormGroup className="input-group" label="Interest" inline>
            <FormGroup className="input-group" label="Type" inline></FormGroup>
            <FormGroup className="input-group" label="Colour" inline></FormGroup>
            <FormGroup className="input-group" label="Months" inline></FormGroup>
          </FormGroup>

          <FormGroup className="input-group" label="Size" inline>
            <FormGroup className="input-group" label="Height" labelFor="height" labelInfo="(required)" inline>
              <NumericInput id="height" />
            </FormGroup>

            <FormGroup className="input-group" label="Spread" labelFor="spread" labelInfo="(required)" inline>
              <NumericInput id="spread" />
            </FormGroup>
          </FormGroup>

          <FormGroup className="input-group" label="Soil" inline>
            <FormGroup className="input-group" label="Type" inline></FormGroup>
            <FormGroup className="input-group" label="Soil PH" inline></FormGroup>
            <FormGroup className="input-group" label="Moisture" inline></FormGroup>
          </FormGroup>

          <FormGroup className="input-group" label="Hardiness" inline>
            <Select items={hardinessSelectItems} itemRenderer={renderHardiness} onItemSelect={handleHardinessSelect}>
              <Button rightIcon="caret-down">Hardiness</Button>
            </Select>
          </FormGroup>

          <FormGroup className="input-group" label="Position" inline></FormGroup>

          <FormGroup className="input-group" label="Growth" inline></FormGroup>

          <FormGroup className="input-group" label="Information" inline>
            <FormGroup className="input-group" label="Description" labelFor="description" inline>
              <TextArea
                id="Description"
                growVertically={true}
                // onChange={this.handleChange}
                // value={this.state.value}
              />
            </FormGroup>

            <FormGroup className="input-group" label="Links" inline>
              <FormGroup className="input-group" label="Link description" inline>
                <InputGroup id="link-description" className="input" placeholder="Link description" />
              </FormGroup>

              <FormGroup className="input-group" label="Link" inline>
                <InputGroup id="link" className="input" placeholder="Link" />
              </FormGroup>
            </FormGroup>
          </FormGroup>
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
