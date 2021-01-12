import React, { useEffect } from 'react';
import { StoreContext, StoreProvider } from '@mile-hi-labs/react-data';
import { SessionProvider } from '@mile-hi-labs/react-session';
import { ToastProvider } from 'contexts/toast-context';
import * as Adapters from 'adapters';
import * as Serializers from 'serializers';
import * as Models from 'models';
import Router from 'router';


const App = (props) => {
  const apiDomain = 'https://library-api.milehilabs.dev';


  // Render
  return (
    <StoreProvider adapters={Adapters} serializers={Serializers} models={Models} apiDomain={apiDomain}>
    	<StoreContext.Consumer>
    		{store => (
		    	<SessionProvider store={store}>
		      	<ToastProvider>
		        	<Router />
		      	</ToastProvider>
		    	</SessionProvider>
	    	)}
    	</StoreContext.Consumer>
    </StoreProvider>
  );
}

export default App;
