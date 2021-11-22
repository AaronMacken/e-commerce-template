import { action, computed, observable } from "mobx";

class UiStore {
  static create(rootStore) {
    return new UiStore(rootStore);
  }

  constructor(rootStore) {
    Object.assign(this, { rootStore });
  }

  @observable testBoolean = false;
}

export default UiStore;
