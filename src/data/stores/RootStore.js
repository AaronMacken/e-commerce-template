import UiStore from "./UiStore";

class RootStore {
  static create() {
    return new RootStore();
  }

  constructor() {
    this.uiStore = UiStore.create(this);
  }
}

export default RootStore;
