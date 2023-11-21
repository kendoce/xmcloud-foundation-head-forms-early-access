import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface ByocDefaultComponentProps {
  title: string;
  columnsCount: number;
}

export const ByocDefaultComponent = (props: ByocDefaultComponentProps): JSX.Element => {
  const columns: string[] = [];
  for (let i = 0; i < props.columnsCount; i++) {
    columns.push(`Component Column ${i + 1}`);
  }
  return (
    <div className="container">
      <h2>{props.title || 'BYOC Demo'}</h2>
      <p>ByocDefaultComponent Component</p>
      <div className="row">
        {columns.map((text, index) => (
          <div key={index} className={`col-sm-${props.columnsCount}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(ByocDefaultComponent, {
  name: 'ByocDefaultComponent',
  properties: {
    title: {
      type: 'string',
    },
    columnsCount: {
      type: 'number',
    },
  },
});
