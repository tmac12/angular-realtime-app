import * as signalR from '@microsoft/signalr';

const httpOptions: signalR.IHttpConnectionOptions = {
  skipNegotiation: true,
  transport: signalR.HttpTransportType.WebSockets,
};

const SIGNALR_URL = 'http://192.168.214.199:50012/plantHub';
// const SIGNALR_URL = 'http://localhost:50012/plantHub';
export const feedHub = {
  hubName: 'feed',
  url: SIGNALR_URL,
  options: httpOptions,
  automaticReconnect: true,
};
