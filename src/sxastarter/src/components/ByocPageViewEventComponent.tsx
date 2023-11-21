import * as BYOC from '@sitecore/byoc';
import { useEffect } from 'react';

import type Events from '@sitecore-cloudsdk/events/browser';

type SDKs = Partial<{
  Events: typeof Events;
}>;

declare module '@sitecore/byoc' {
  interface ContextProperties {
    sitecoreEdgeContextId: string;
    sitecoreEdgeUrl: string;
    sdks: SDKs;
    getSDK<T extends keyof SDKs>(name: T): Promise<SDKs[T]>;
  }
}

function MyComponent({ title, getSDK }: { title: string } & BYOC.ContextProperties) {
  useEffect(() => {
    getSDK('Events').then((events) => {
      events?.pageView({
        channel: 'WEB',
        currency: 'CAD',
        page: 'foo',
        language: 'en',
      });
    });
  }, [getSDK]);
  return <h1>{title}</h1>;
}

BYOC.registerComponent(MyComponent, {
  name: 'MyComponent',
  group: 'Test',
  properties: {
    title: {
      type: 'string',
    },
  },
});
