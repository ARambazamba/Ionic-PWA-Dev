import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { StorageAction } from "./StorageAction";

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  execute(action: StorageAction, key?: string, value?) {
    switch (action) {
      case StorageAction.set:
        return this.storage.set(key, value);
        break;
      case StorageAction.get:
        return this.storage.get(key);
        break;
      case StorageAction.delete:
        return this.storage.remove(key);
        break;
      case StorageAction.clear:
        return this.storage.clear();
        break;
      default:
        break;
    }
  }
}
