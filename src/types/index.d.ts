export interface IDns {
  name: string;
  ip_address: string;
}

export interface INsset {
  handle: string;
  registrar: string;
  dns: IDns[];
}

export interface IKeyset {
  handle: string;
  registrar: string;
  dns_keys: string[];
}

export interface IPublish {
  organization: boolean;
  name: boolean;
}

export interface IContact {
  handle: string;
  organization: string;
  name: string;
  publish: IPublish;
}

export interface IEventTimestamp {
  timestamp: string;
  registrar_handle: string;
}

export interface IEvents {
  registered: IEventTimestamp;
  transferred: IEventTimestamp;
  updated: IEventTimestamp;
  unregistered: IEventTimestamp | null;
}

export interface IFlag {
  name: string;
  active: boolean;
  description: string;
}

export interface IStateFlags {
  flags: IFlag[];
  groups: string[][];
}

export interface IDomainDetailData {
  fqdn: string;
  nsset: INsset;
  keyset: IKeyset;
  owner: IContact;
  sponsoring_registrar: string;
  administrative_contacts: IContact[];
  expires_at: string;
  events: IEvents;
  state_flags: IStateFlags;
}
