import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Menu,
  MenuItem,
  Button,
} from '@blueprintjs/core';
import AddPlant from './AddPlant';

import './Plants.scss';

import { fetchAllPlants } from '../redux/models/plants';
import { RootState } from '../redux/reducers/index';

type PlantsProps = {};

const Plants = ({}: PlantsProps) => {
  const [addOpen, setToggleAddOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const plants = useSelector((state: RootState) => state.plants.items);

  useEffect(() => {
    dispatch(fetchAllPlants());
  }, [dispatch]);

  const toggleAddOpen = () => setToggleAddOpen(!addOpen);

  const savePlant = (values: any) => {
    console.log(values);
    toggleAddOpen()
  }

  const renderPlants = () => {
    return (
      <div className="plants-page">
        <Menu>
          <MenuItem text="Child one" />
          <MenuItem text="Child two" />
          <MenuItem text="Child three" />
          <Button intent="success" icon="add" text="Add new plant" onClick={toggleAddOpen}/>
        </Menu>
        <div className="plant-list">
          {plants.map(({ latin_name }, i) => (
            <div key={i}>{latin_name}</div>
          ))}
        </div>

      </div>
    );
  };

  return (
    <Fragment>
      {plants ? renderPlants() : <div>No plants found...</div>}
      <AddPlant isOpen={addOpen} onClose={toggleAddOpen} onSubmit={savePlant}/>
    </Fragment>
  );
};

export default Plants;
