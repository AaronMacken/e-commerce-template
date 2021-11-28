import { action, computed, observable } from "mobx";

class UiStore {
  static create(rootStore) {
    return new UiStore(rootStore);
  }

  constructor(rootStore) {
    Object.assign(this, { rootStore });
  }

  @observable testBoolean = false;
  @observable isDesktop = false;

  @action setIsDesktop() {
    this.isDesktop = window.innerWidth > 991
  } 
  

//   @action setTestBoolean(booleanValue) {
//       this.testBoolean = booleanValue
//   }

}

export default UiStore;
