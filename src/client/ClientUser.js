"use strict";

const dbus = require("dbus-next");
const Message = dbus.Message;


/**
 * The user that is being used by the client.
 */
class ClientUser {
  /**
   * Constructs an instance of ClientUser. For internal use only.
   * @param {Object} data
   * @param {Object} data.client
   * @hideconstructor
   */
  constructor(data) {
    this._client = data.client;
  }

  /**
   * The Client that this instance belongs to.
   * @type {Client}
   * @readonly
   */
  get client() {
    return this._client;
  }

  /**
   * Check if the client user is registered.
   * Should always return `true`.
   * @return {Promise<boolean>}
   */
  getRegistrationStatus() {
    const msg = new Message({
      destination: "org.asamk.Signal",
      path: this.client.interfacePath,
      interface: "org.asamk.Signal",
      member: "isRegistered",
      signature: "s",
      body: [this.client.settings.phoneNumber]
    });

    return this.client._bus.call(msg);
  }
}

module.exports = ClientUser;
