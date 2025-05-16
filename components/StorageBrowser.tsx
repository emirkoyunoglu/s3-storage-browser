import React from 'react';
import { createAmplifyAuthAdapter, createStorageBrowser } from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';
import { Amplify } from 'aws-amplify';
import config from '../amplify_outputs.json';

// Configure Amplify using the imported configuration
Amplify.configure(config);

// Create the StorageBrowser component with Amplify authentication
export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});