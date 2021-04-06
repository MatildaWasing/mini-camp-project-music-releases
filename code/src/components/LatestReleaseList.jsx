import React from 'react'
import { List } from './List'
import { albums } from '../data/data.json'
import { keysToCamel } from '../data/keysToCamel'

export const LatestReleaseList = () => {
  return (
    <div>
      <div className="intro">
        <span className="title">New albums & singles</span>
      </div>
      <div className="flex-box">
        <List
          albumList={keysToCamel(albums).items} />
      </div>
    </div>
  );
};